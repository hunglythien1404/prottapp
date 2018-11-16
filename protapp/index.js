/** @format */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import myReducer from '@reducers/index';
import thunk from 'redux-thunk';

const store = createStore(
  myReducer,
  applyMiddleware(thunk)
);

const app = () => (
  <Provider store={store}>
    <App/>
  </Provider>
);

AppRegistry.registerComponent('protapp', () => app);
