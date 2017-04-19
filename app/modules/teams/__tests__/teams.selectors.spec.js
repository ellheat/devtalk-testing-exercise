import { expect } from 'chai';
import { fromJS, Map } from 'immutable';
import { filterTeamsListBySquadValue, selectArithmeticAverage, selectRangeValues, selectTeamsList } from '../teams.selectors';

describe('Teams: selectors', () => {
  const list = fromJS([
    { name: 'Manchester United', squadMarketValue: '500000 €' },
    { name: 'Leicester City', squadMarketValue: '400000 €' },
    { name: 'West Ham United', squadMarketValue: '300000 €' },
    { name: 'Sunderland', squadMarketValue: '200000 €' },
    { name: 'Sunderland', squadMarketValue: '100000 €' },
    { name: 'Burnley', squadMarketValue: '50000 €' },
  ]);
  const rangeValues = {
    min: () => 199999,
    max: () => 400001,
  };
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
    it('should range values', () => {
      expect(selectRangeValues(mockedState)).to.deep.equal(rangeValues);
    });
  });
});
