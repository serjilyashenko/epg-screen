import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {List, Map} from 'immutable';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Calendar from '../components/Calendar';
import ChannelList from '../components/ChannelList';
import * as Actions from '../actions';

class EpgScreen extends Component {

  render() {
    const {epg, actions} = this.props;
    const channels = epg.get('channels') || List();
    const loading = epg.get('loading');

    return (
      <div>
        <h1>EPG Screen</h1>
        <Calendar/>
        <button onClick={actions.getEpg}>load epg</button>
        <div>
          loading: {loading ? 'true' : 'false'}
        </div>
        <ChannelList channels={channels}/>
      </div>
    );
  }
}

EpgScreen.propTypes = {
  actions: PropTypes.object.isRequired,
  epg: PropTypes.instanceOf(Map).isRequired,
};

function mapStateToProps({epg}) {
  return {
    epg,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EpgScreen);
