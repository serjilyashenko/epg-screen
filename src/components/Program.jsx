import React, {PureComponent} from 'react';
import {Map} from 'immutable';
import PropTypes from 'prop-types';
import moment from 'moment';
import {SCALE, MINS_IN_AN_HOUR, MILLISECONDS_IN_A_SECOND} from '../constants/settings';
import classNames from 'classnames';

class Program extends PureComponent {

  getProgramStyles() {
    const {program} = this.props;
    const start = moment(program.get('start'));
    const end = moment(program.get('end'));
    const durationInSeconds = end.diff(start) / MILLISECONDS_IN_A_SECOND;

    const width = Math.floor(durationInSeconds * SCALE / MINS_IN_AN_HOUR);
    const left = (start.hours() * MINS_IN_AN_HOUR + start.minutes()) * SCALE;

    return {
      left,
      width,
    };
  }

  getProgramClass() {
    const {isActive} = this.props;

    return classNames({
      "timetable__body-cell": true,
      "timetable__body-cell_now": isActive,
    });
  }

  render() {
    const {program} = this.props;
    const title = program.get('title');
    const programStyle = this.getProgramStyles();
    const programClass = this.getProgramClass();

    const startTime = moment(program.get('start')).format('HH:mm');
    const endTime = moment(program.get('end')).format('HH:mm');

    return (
      <div className={programClass} style={programStyle}>
        <div className="timetable__broadcast">
          <div className="timetable__broadcast-name">{title}</div>
          <div className="timetable__broadcast-time">{startTime} - {endTime}</div>
        </div>
      </div>
    );
  }
}

Program.propTypes = {
  program: PropTypes.instanceOf(Map).isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default Program;
