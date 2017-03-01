'use strict';
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {AsyncStorage} from "react-native";
import reducers from "../reducers";

const logger = store => next => action => {
	if (typeof action === 'function') console.log('dispatching a function');
	else console.log('dispatching', action);
	let result = next(action);
	console.log('next state', store.getState());
	return result;
}

let middlewares = [
	logger,
	thunk
];

let createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default function configureStore() {
	return createStoreWithMiddleware(reducers);
}