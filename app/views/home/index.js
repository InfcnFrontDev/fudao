import React, {Component} from "react";
import {StyleSheet, View, Text} from "react-native";
import NavBarView from "../../components/NavBarView";

/**
 * 主页
 */
class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<NavBarView {...this.props}>
				<Text>Home</Text>
			</NavBarView>
		)
	}
}

export default (Home);