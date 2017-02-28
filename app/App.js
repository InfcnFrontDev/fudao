'use strict';
import React, {Component} from "react";
import {View} from "react-native";
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";
import AppNavigator from "./AppNavigator";

const store = configureStore();

export default class App extends Component {

	render() {
		return (
			<Provider store={store}>
				<AppNavigator />
			</Provider>
		)
	}
}