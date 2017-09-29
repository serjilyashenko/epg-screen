import React, {Component} from 'react';
import {Map} from 'immutable';
import PropTypes from 'prop-types';
import moment from 'moment';

class Program extends Component {

  render() {
    const {program} = this.props;
    const title = program.get('title');
    const startTime = moment(program.get('start')).format('HH:MM');
    const endTime = moment(program.get('end')).format('HH:MM');

    return (
      <li>
        {title}: {startTime} - {endTime}
      </li>
    );
  }
}

Program.propTypes = {
  program: PropTypes.instanceOf(Map).isRequired,
};

export default Program;
