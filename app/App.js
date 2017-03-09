'use strict';
import React, {Component} from "react";
import {View} from "react-native";
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";
import AppNavigator from "./AppNavigator";

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			isLoading: true,
			store: configureStore(() => {
				this.setState({isLoading: false})
			})
		}
	}

	render() {
		if (this.state.isLoading) {
			console.log('loading app');
			return null;
		}
		return (
			<Provider store={this.state.store}>
				<AppNavigator />
			</Provider>
		)
	}
}