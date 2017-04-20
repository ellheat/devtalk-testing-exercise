import { expect } from 'chai';

import { teamsActions, teamsActionsTypes } from '../teams.actions';


describe('Teams: actions', () => {
  describe('getTeams', () => {
    it('should return correct type', () => {
      expect(teamsActions.getTeams().type).to.equal(teamsActionsTypes.GET_TEAMS);
    });
  });

  describe('getTeamsSuccess', () => {
    it('should return correct type', () => {
      expect(teamsActions.getTeamsSuccess().type).to.equal(teamsActionsTypes.GET_TEAMS_SUCCESS);
    });
    it('should return correct payload', () => {
      const payload = {
        someKey: 'some_key_123',
      };
      expect(teamsActions.getTeamsSuccess(payload).payload).to.deep.equal(payload);
    });
  });

  describe('getTeamsError', () => {
    it('should return correct type', () => {
      expect(teamsActions.getTeamsError().type).to.equal(teamsActionsTypes.GET_TEAMS_ERROR);
    });

    it('should return correct data', () => {
      const payload = {
        someKey: 'some_key_123',
      };
      const error = 'err_123';
      expect(teamsActions.getTeamsError(payload, error).payload).to.deep.equal(payload);
    });

    it('should return correct data', () => {
      const payload = {
        someKey: 'some_key_123',
      };
      const error = 'err_123';
      expect(teamsActions.getTeamsError(payload, error).error).to.deep.equal(error);
    });
  });
});
