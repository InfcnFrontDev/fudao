import React, {PureComponent} from "react";
import AppNavigator from "./AppNavigator";
import {userStore} from "./mobx";


/**
 * App
 */
export default class App extends PureComponent {
	constructor() {
		super();
		this.state = {
			isLoading: true
		}
	}

	render() {
		if (this.state.isLoading) {
			return null;
		}
		return (
			<AppNavigator />
		)
	}

	componentDidMount() {
		userStore.loadData(() => {
			this.setState({
				isLoading: false
			})
		})
	}

}