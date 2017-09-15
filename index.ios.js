/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import { Provider } from 'react-redux';

import { createStore } from 'redux'

import App from './containers/App';

import rootReducer from './containers/App/reducers';

function configureStore() {
    let store = createStore(rootReducer)
    return store
}

const store = configureStore();

export default class mysong extends Component {
  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('mysong', () => mysong);
