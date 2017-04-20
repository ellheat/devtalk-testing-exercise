import { expect } from 'chai';
import { fromJS } from 'immutable';

import teamsReducer from '../teams.reducer';
import { teamsActionsTypes } from '../teams.actions';

describe('Teams: reducer', () => {
  const state = fromJS({
    list: [],
    rangeValues: {
      min: 0,
      max: 600,
    },
    error: null,
  });

  describe('reducer', () => {
    it('should return initial state', () => {
      expect(teamsReducer(undefined, {}).toJS()).to.deep.equal(state.toJS());
    });

    it('should return state on unknown action', () => {
      expect(teamsReducer(state, { type: 'unknown-action' }).toJS()).to.deep.equal(state.toJS());
    });

    it('should set teams on GET_TEAMS_SUCCESS', () => {
      const teams = ['Manchester United', 'Manchester United II', 'Manchester United U23'];
      const expectedState = state.set('list', teams);
      const action = { payload: { teams }, type: teamsActionsTypes.GET_TEAMS_SUCCESS };
      expect(teamsReducer(state, action).toJS()).to.deep.equal(expectedState.toJS());
    });

    it('should set error on GET_TEAMS_ERROR', () => {
      const error = 'err_123';
      const expectedState = state.set('error', error);
      const action = { payload: { error }, type: teamsActionsTypes.GET_TEAMS_ERROR };
      expect(teamsReducer(state, action).toJS()).to.deep.equal(expectedState.toJS());
    });

    it('should set min and max values on SET_RANGE_VALUES', () => {
      const values = { min: 1, max: 2 };
      const expectedState = state.set('rangeValues', values);
      const action = { values, type: teamsActionsTypes.SET_RANGE_VALUES };
      expect(teamsReducer(state, action).toJS()).to.deep.equal(expectedState.toJS());
    });
  });
});
