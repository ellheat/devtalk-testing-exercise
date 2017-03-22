import { call, put, fork } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { stringify } from 'query-string';

import request from '../../utils/request';
import { getTeamsSuccess, getTeamsError } from './teams.actions';
import { ACTION_TYPES } from './teams.constants';


export function* fetchTeamsSaga(action) {
  try {
    const data = yield call(request, `/fixtures/teams.json?${stringify({
      language: action.payload.language,
    })}`);

    yield put(getTeamsSuccess(data));
  } catch (e) {
    yield put(getTeamsError(e));
  }
}

export function* getTeamsSaga() {
  try {
    yield call(takeLatest, ACTION_TYPES.GET, fetchTeamsSaga);
  } catch (e) {
    yield put(getTeamsError(e));
  }
}

export default function* teams() {
  yield [
    fork(getTeamsSaga),
  ];
}
