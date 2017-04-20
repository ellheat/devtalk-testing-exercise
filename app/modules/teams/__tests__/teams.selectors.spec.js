import { expect } from 'chai';
import { fromJS, Map } from 'immutable';
import {
  selectTeamsListBySquadValue,
  selectArithmeticAverage,
  selectRangeValues,
  selectTeamsList,
} from '../teams.selectors';

describe('Teams: selectors', () => {
  const list = fromJS([
    { name: 'Manchester United', squadMarketValue: '5 €' },
    { name: 'Leicester City', squadMarketValue: '4 €' },
    { name: 'West Ham United', squadMarketValue: '3 €' },
    { name: 'Sunderland', squadMarketValue: '2 €' },
    { name: 'Stoke', squadMarketValue: '1 €' },
    { name: 'Burnley', squadMarketValue: '0.5 €' },
  ]);
  const rangeValues = Map({
    min: 0,
    max: 10,
  });

  const mockedState = Map({
    teams: Map({
      list,
      rangeValues,
    }),
  });

  const getState = (rangeValues) => {
    return Map({
      teams: Map({
        list,
        rangeValues,
      }),
      rangeValues,
    });
  };
  const MULTIPLIER = 1000000;

  describe('selectTeamsList', () => {
    it('should select list', () => {
      expect(selectTeamsList(mockedState).toJS()).to.deep.equal(list.toJS());
    });
    it('should select list', () => {
      expect(list.toJS().length).to.be.equals(6);
    });
  });

  describe('selectRangeValues', () => {
    it('should select range values', () => {
      expect(selectRangeValues(mockedState)).to.deep.equal(rangeValues);
    });
  });

  describe('selectTeamsListBySquadValue', () => {
    it('should return list', () => {
      const state = getState(Map({ min: 0 / MULTIPLIER, max: 10 / MULTIPLIER }));
      expect(selectTeamsListBySquadValue(state).toJS()).to.deep.equal(list.toJS());
    });

    it('should return empty list', () => {
      const state = getState(Map({ min: 0 / MULTIPLIER, max: 0 / MULTIPLIER }));
      expect(selectTeamsListBySquadValue(state).toJS()).to.deep.equal([]);
    });

    it('should return two elements list', () => {
      const state = getState(Map({ min: 2 / MULTIPLIER, max: 3 / MULTIPLIER }));
      const expectedLengthOfList = 2;
      expect(selectTeamsListBySquadValue(state).toJS().length).to.equal(expectedLengthOfList);
    });
  });

  describe('selectArithmeticAverage', () => {
    it('should correct avarage value', () => {
      const state = getState(Map({ min: 1 / MULTIPLIER, max: 3 / MULTIPLIER }));
      const expectedAverage = 2;
      expect(selectArithmeticAverage(state)).to.deep.equal(expectedAverage);
    });

    it('should correct avarage value', () => {
      const state = getState(Map({ min: 0 / MULTIPLIER, max: 0 / MULTIPLIER }));
      const expectedAverage = 0;
      expect(selectArithmeticAverage(state)).to.deep.equal(expectedAverage);
    });
  });
});
