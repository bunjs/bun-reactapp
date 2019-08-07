import React from 'react';
import {hydrate, render} from 'react-dom';
import { BrowserRouter,Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
const { configureStore, routesConfig } = require('../app/base/index.js');
import { createBrowserHistory } from 'history';
let history=createBrowserHistory();
// injectTapEventPlugin();
const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState, history);

window.config = {
    ismobile: true
}
hydrate(
	<Provider store={store}><BrowserRouter>{renderRoutes(routesConfig)}</BrowserRouter></Provider>,
    document.getElementById('container')
);