import React, {Component} from 'react';
import {Map} from 'immutable';
import PropTypes from 'prop-types';
import Program from './Program';
import moment from 'moment';

class ChannelItem extends Component {

  isProgramActive(program) {
    const {currentTime} = this.props;
    const start = moment(program.get('start'));
    const end = moment(program.get('end'));
    const current = moment(currentTime);

    return current.isBetween(start, end, null, '[)');
  }

  renderPrograms() {
    const {channel} = this.props;
    const programs = channel.get('schedules');

    return programs.map((program, index) => {
      const isActive = this.isProgramActive(program);
      return <Program program={program} isActive={isActive} key={index}/>;
    });
  }

  render() {
    const programElements = this.renderPrograms();

    return (
      <div className="timetable__body-row">
        {programElements}
      </div>
    );
  }
}

ChannelItem.propTypes = {
  channel: PropTypes.instanceOf(Map).isRequired,
  currentTime: PropTypes.string.isRequired,
};

export default ChannelItem
