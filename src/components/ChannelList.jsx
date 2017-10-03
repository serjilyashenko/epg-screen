import React, {PureComponent} from 'react';
import {List} from 'immutable';
import PropTypes from 'prop-types';
import ChannelItem from './ChannelItem';
import TimeLine from './TimeLine';
import {SCALE, MINUTES_IN_A_DAY} from '../constants/settings';

class ChannelList extends PureComponent {

  getContainerStyles() {
    const width = MINUTES_IN_A_DAY * SCALE;

    return {width};
  }

  render() {
    const {channels, currentTime, currentPosition} = this.props;
    const containerStyles = this.getContainerStyles();
    const channelElements = channels.map(channel => {
      return <ChannelItem currentTime={currentTime} channel={channel} key={channel.get('id')}/>
    });

    return (
      <div className="timetable__container" style={containerStyles}>
        <div className="timetable__header">
          <TimeLine channels={channels}/>
        </div>
        <div className="timetable__body">
          {channelElements}
        </div>
        <div className="timetable__current" style={{left: currentPosition}}> </div>
      </div>
    );
  }
}

ChannelList.propTypes = {
  channels: PropTypes.instanceOf(List).isRequired,
  currentTime: PropTypes.string.isRequired,
  currentPosition: PropTypes.number.isRequired,
};

export default ChannelList
