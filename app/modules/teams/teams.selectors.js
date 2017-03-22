import { createSelector } from 'reselect';


const selectTeamsDomain = () => (state) => state.get('teams');

export const selectTeamsList = () => createSelector(
  selectTeamsDomain(),
  (state) => state.get('list')
);
