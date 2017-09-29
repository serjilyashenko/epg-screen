import React, {Component} from 'react';
import {List} from 'immutable';
import PropTypes from 'prop-types';
import ChannelItem from './ChannelItem';

class ChannelList extends Component {

  render() {
    const {channels} = this.props;
    const channelElements = channels.map(channel => <ChannelItem channel={channel} key={channel.get('id')} />);

    return (
      <div>
        <h2>Channel List</h2>
        <ul>
          {channelElements}
        </ul>
      </div>
    );
  }
}

ChannelList.propTypes = {
  channels: PropTypes.instanceOf(List).isRequired,
};

export default ChannelList
