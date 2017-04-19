import { expect } from 'chai';
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

import routerReducer from '../router.reducer';


describe('Router: reducer', () => {
  const state = fromJS({
    locationBeforeTransitions: null,
  });

  describe('reducer', () => {
    it('should return initial state', () => {
      expect(routerReducer(undefined, {}).toJS()).to.deep.equal(state.toJS());
    });

    it('should return state on unknown action', () => {
      expect(routerReducer(state, { type: 'unknown-action' }).toJS()).to.deep.equal(state.toJS());
    });

    it('should set data on LOCATION_CHANGE', () => {
      const payload = { someKey: 'some-value' };
      const expectedState = state.set('locationBeforeTransitions', payload);
      const action = { payload, type: LOCATION_CHANGE };
      expect(routerReducer(state, action).toJS()).to.deep.equal(expectedState.toJS());
    });
  });
});
