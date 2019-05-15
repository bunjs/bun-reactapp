import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducer.js';
// const rootReducer = require('./reducer.js');
import thunkMiddleware from "redux-thunk";
// import createHistory from 'history/createMemoryHistory';
import {  routerReducer, routerMiddleware } from 'react-router-redux'
// Apply middleware here
// ...


function configureStore(initialState={}, history) {
	const routerReducers=routerMiddleware(history);//路由
	const middleware=[thunkMiddleware,routerReducers];
  	const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware)));
  	return store;
}
export default configureStore;
// export default configureStore;