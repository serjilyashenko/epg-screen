import React, {Component} from 'react';
import {List} from 'immutable';
import PropTypes from 'prop-types';
import {SCALE, MINS_IN_AN_HOUR, HOURS_IN_A_DAY} from '../constants/settings';

class TimeLine extends Component {

  render() {
    const hours = new Array(HOURS_IN_A_DAY).fill(null).map((item, index) => index);
    const width = MINS_IN_AN_HOUR * SCALE;
    const cellStyles = {width};
    const hoursElements = hours.map(item => {
      return <span className="timetable__header-cell" style={cellStyles} key={item}>{item}:00</span>
    });

    return (
      <div>
        <div className="timetable__header-row">
          {hoursElements}
        </div>
      </div>
    );
  }
}

TimeLine.propTypes = {
  channels: PropTypes.instanceOf(List).isRequired,
};

export default TimeLine;
