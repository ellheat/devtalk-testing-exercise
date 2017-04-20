import { expect } from 'chai';
import { fromJS, Map } from 'immutable';
import { selectTeamsListBySquadValue, selectArithmeticAverage, selectRangeValues, selectTeamsList } from '../teams.selectors';

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
      expect(selectTeamsListBySquadValue(mockedState).toJS()).to.deep.equal(list.toJS());
    });
  });
});
