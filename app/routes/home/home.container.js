import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Home from './home.component';
import { getTeams } from '../../modules/teams/teams.actions';
import { setLanguage } from '../../modules/locales/locales.actions';
import { selectTeamsList } from '../../modules/teams/teams.selectors';
import { selectLocalesLanguage } from '../../modules/locales/locales.selectors';

const mapStateToProps = createStructuredSelector({
  teams: selectTeamsList(),
  language: selectLocalesLanguage(),
});

export default connect(mapStateToProps, {
  getTeams,
  setLanguage,
})(Home);
