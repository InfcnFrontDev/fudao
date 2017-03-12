'use strict';
import React, {PureComponent} from "react";
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";
import AppNavigator from "./AppNavigator";

/**
 * App
 */
export default class App extends PureComponent {
	constructor() {
		super();
		this.state = {
			isLoading: true,
			store: configureStore(() => { // 状态加载成功
				this.setState({
					isLoading: false
				})
			})
		}
	}

	render() {
		if (this.state.isLoading) {
			return null;
		}
		return (
			<Provider store={this.state.store}>
				<AppNavigator />
			</Provider>
		)
	}
}