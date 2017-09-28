import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Map} from 'immutable';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';

class App extends Component {

  render() {
    const {entities, actions} = this.props;

    return (
      <div>
        <h1>Hello, Template</h1>
        <div>{entities.get('count')}</div>
        <button onClick={actions.action1}>Hello</button>
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  entities: PropTypes.instanceOf(Map).isRequired,
};

function mapStateToProps(state) {
  return {
    entities: state.entities,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
