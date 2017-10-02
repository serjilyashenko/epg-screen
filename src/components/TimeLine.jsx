import React, {Component} from 'react';
import {List} from 'immutable';
import PropTypes from 'prop-types';
import {SCALE} from '../constants/settings';

class TimeLine extends Component {

  render() {
    const hours = new Array(24).fill(0).map((item, index) => index);
    const cellStyles = {width: 60 * SCALE};
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
