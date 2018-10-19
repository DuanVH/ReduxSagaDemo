/** @format */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// Redux
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import allReducers from './reducers'
import CounterContainer from './containers/CounterContainer';

let store = createStore(allReducers);
const appDemo = () => (
    <Provider store={store}>
        <CounterContainer/>
    </Provider>
);

AppRegistry.registerComponent(appName, () => appDemo);
