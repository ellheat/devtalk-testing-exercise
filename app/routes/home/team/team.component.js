import React, { PropTypes, PureComponent } from 'react';


export default class Team extends PureComponent {
  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  render() {
    return (
      <li className="team">
        {this.props.data.get('name')} [{this.props.data.get('shortName')}]
      </li>
    );
  }
}
