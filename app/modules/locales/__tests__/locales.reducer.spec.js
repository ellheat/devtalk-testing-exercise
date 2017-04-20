import { expect } from 'chai';
import { fromJS } from 'immutable';

import localesReducer from '../locales.reducer';
import { localesActionsTypes } from '../locales.actions';


describe('Locales: reducer', () => {
  const state = fromJS({
    language: null,
  });

  it('should return initial state', () => {
    expect(localesReducer(undefined, {}).toJS()).to.deep.equal(state.toJS());
  });

  it('should return state on unknown action', () => {
    expect(localesReducer(state, { type: 'unknown-action' }).toJS()).to.deep.equal(state.toJS());
  });

  it('should set language on SET_LANGUAGE', () => {
    const payload = 'en';
    const expectedState = state.set('language', 'en');
    const action = { payload, type: localesActionsTypes.SET_LANGUAGE };
    expect(localesReducer(state, action).toJS()).to.deep.equal(expectedState.toJS());
  });
});
