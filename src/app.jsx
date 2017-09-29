import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configure-store';
import {Provider} from 'react-redux';
import EpgScreen from './containers/EpgScreen';

const store = configureStore();

render(
  <Provider store={store}>
    <EpgScreen />
  </Provider>,
  document.getElementById('root')
);
