import React, {Component} from 'react';
import {List} from 'immutable';
import PropTypes from 'prop-types';

class ChannelCaptions extends Component {

  render() {
    const {channels} = this.props;
    const captionsElements = channels.map(channel => (
      <div key={channel.get('id')} className="timetable__captions-item">
        <img src={channel.getIn(['images', 'logo'])}/>
      </div>
    ));

    return (
      <div className="timetable__captions">
        {captionsElements}
      </div>
    );
  }
}

ChannelCaptions.propTypes = {
  channels: PropTypes.instanceOf(List).isRequired,
};


export default ChannelCaptions;
