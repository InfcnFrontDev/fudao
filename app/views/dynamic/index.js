import React, {Component} from "react";
import {StyleSheet, View, Text} from "react-native";
import NavBarView from "../../components/NavBarView";
import Icon from "react-native-vector-icons/FontAwesome";

/**
 * 动态
 */
class Dynamic extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<NavBarView {...this.props}>
				<Text>Dynamic</Text>
				<Icon name="qq" size={30} color="#52C0FE"/>
			</NavBarView>
		)
	}
}

export default (Dynamic);