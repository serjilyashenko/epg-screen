import React, {Component} from 'react';
import {Map} from 'immutable';
import PropTypes from 'prop-types';
import Program from './Program';

class ChannelItem extends Component {

  renderPrograms() {
    const {channel} = this.props;
    const Programs = channel.get('schedules');

    return Programs.map((program, index) => <Program program={program} key={index}/>);
  }

  render() {
    const {channel} = this.props;
    const imgURL = channel.getIn(['images', 'logo']);

    return (
      <li>
        <img src={imgURL} width={50} height={30} mode='fit'/>
        <ul>
          {this.renderPrograms()}
        </ul>
      </li>
    );
  }
}

ChannelItem.propTypes = {
  channel: PropTypes.instanceOf(Map).isRequired,
};

export default ChannelItem
