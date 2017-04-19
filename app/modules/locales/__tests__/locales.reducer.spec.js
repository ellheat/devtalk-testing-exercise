import { expect } from 'chai';
import { fromJS } from 'immutable';

import { localesReducer } from '../locales.reducer';
import { localesActions, localesActionsTypes } from '../locales.actions';


describe('Locales: reducer', () => {
  const state = fromJS({
    language: null,
  });

  describe('reducer', () => {
    it('should return initial state', () => {
      expect(localesReducer(undefined, {}).toJS()).to.deep.equal(state.toJS());
    });

    it('should return state on unknown action', () => {
      expect(localesReducer(state, { type: 'unknown-action' }).toJS()).to.deep.equal(state.toJS());
    });

    it('should set data on SET_LANGUAGE', () => {
      const language = 'en';
      const expectedState = state.set('language', language);
      const action = { language, type: localesActionsTypes.SET_LANGUAGE };
      expect(localesReducer(state, action).toJS()).to.deep.equal(expectedState.toJS());
    });
  });

  describe('setLanguage', () => {
    it('should return correct type', () => {
      expect(localesActions.setLanguage().type).to.equal(localesActionsTypes.SET_LANGUAGE);
    });

    it('should return proper payload', () => {
      const language = 'en';
      expect(localesActions.setLanguage(language).language).to.equal(language);
    });
  });
});
