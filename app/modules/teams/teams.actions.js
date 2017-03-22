import { ACTION_TYPES } from './teams.constants';


export function getTeams(language) {
  return {
    type: ACTION_TYPES.GET,
    payload: {
      language,
    },
  };
}

export function getTeamsSuccess(data) {
  return {
    type: ACTION_TYPES.GET_SUCCESS,
    payload: data,
  };
}

export function getTeamsError(error) {
  return {
    type: ACTION_TYPES.GET_FAIL,
    payload: error,
    error: true,
  };
}

