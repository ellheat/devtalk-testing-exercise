import { createSelector } from 'reselect';
import { toNumber, round } from 'lodash';

const MULTIPLIER = 1000000;

const selectTeamsDomain = state => state.get('teams');

export const selectTeamsList = createSelector(
  selectTeamsDomain, state => state.get('list')
);

export const selectRangeValues = createSelector(
  selectTeamsDomain, state => state.get('rangeValues')
);

export const selectTeamsListBySquadValue = createSelector(
  selectTeamsList,
  selectRangeValues,
  (teams, rangeValues) => teams.filter((team) => {
    const squadMarket = toNumber(team.get('squadMarketValue').replace(' €', '').replace(/,/g, ''));
    return squadMarket >= rangeValues.get('min') * MULTIPLIER && squadMarket < rangeValues.get('max') * MULTIPLIER;
  })
);

export const selectArithmeticAverage = createSelector(
  selectTeamsListBySquadValue, state => {
    const sum = state.reduce((prevVal, element) => {
      const squadMarket = toNumber(element.get('squadMarketValue').replace(' €', '').replace(/,/g, ''));

      return prevVal + squadMarket;
    }, 0);

    return round(sum / state.size);
  }
);
