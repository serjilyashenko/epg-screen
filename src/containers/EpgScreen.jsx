import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {List, Map} from 'immutable';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ChannelCaptions from '../components/ChannelCaptions';
import ChannelList from '../components/ChannelList';
import * as Actions from '../actions';
import moment from 'moment';
import {SCALE, MINS_IN_AN_HOUR, TIME_ACCURACY} from '../constants/settings';

class EpgScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentTime: moment().seconds(0).format(),
    };

    this.moveToCurrentPosition = this.moveToCurrentPosition.bind(this);
  }

  componentDidMount() {
    this.props.actions.getEpg();
    this.moveToCurrentPosition();

    this.isTimerStopped = false;
    this.timer = this.setTimer();
  }

  componentWillUnmount() {
    this.isTimerStopped = true;
    clearTimeout(this.timer);
  }

  setTimer() {
    return setTimeout(() => {
      if (this.isTimerStopped) {
        return;
      }

      this.setState({currentTime: moment().seconds(0).format()});
      this.timer = this.setTimer();
    }, TIME_ACCURACY);
  }

  getCurrentPosition() {
    const {currentTime} = this.state;
    const currentTimeMoment = moment(currentTime);
    return (currentTimeMoment.hours() * MINS_IN_AN_HOUR + currentTimeMoment.minutes()) * SCALE;
  }

  moveToCurrentPosition() {
    const currentPosition = this.getCurrentPosition();
    document.getElementById('timetable__scrollable').scrollLeft = currentPosition - window.innerWidth / 2;
  }

  renderNowButton() {
    return <button className="timetable__now-button" onClick={this.moveToCurrentPosition}>NOW</button>;
  }

  render() {
    const {epg} = this.props;
    const {currentTime} = this.state;
    const currentPosition = this.getCurrentPosition();
    const channels = epg.get('channels') || List();
    const nowButton = channels.size ? this.renderNowButton() : null;

    return (
      <div>
        <h1>EPG Screen</h1>
        <div className="timetable">
          <div id="timetable__scrollable" className="timetable__scrollable">
            <ChannelCaptions channels={channels}/>
            <ChannelList channels={channels} currentTime={currentTime} currentPosition={currentPosition} />
          </div>
          {nowButton}
        </div>
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
