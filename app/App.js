import React, {PureComponent} from "react";
import {observer} from "mobx-react/native";
import GlobalContants from "./common/globalContants";
import AppNavigator from "./AppNavigator";
import userStore from "./mobx/userStore";
import {enableLogging} from 'mobx-logger';

// mobx loggin
enableLogging({
	predicate: () => __DEV__ && Boolean(window.navigator.userAgent),
	action: true,
	reaction: true,
	transaction: true,
	compute: true
});

// global
console.log(GlobalContants);

/**
 * App
 */
@observer
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
		console.log(global);
	}

}