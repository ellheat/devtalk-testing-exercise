import { expect } from 'chai';

import { localesActions, localesActionsTypes } from '../locales.actions';


describe('Locales: actions', () => {
  describe('setLanguage', () => {
    it('should return correct type', () => {
      expect(localesActions.setLanguage().type).to.equal(localesActionsTypes.SET_LANGUAGE);
    });

    it('should return proper payload', () => {
      const payload = { someKey: 'some-value' };
      expect(localesActions.setLanguage(payload).payload).to.deep.equal(payload);
    });
  });
});
