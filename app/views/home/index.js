//noinspection JSAnnotator
import React, {Component} from "react";
import {StyleSheet, View, Text} from "react-native";
import NavBarView from "../../components/NavBarView";
import CommitButton from "../../components/CommitButton";

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
				<CommitButton />
			</NavBarView>
		)
	}
}

export default (Home);