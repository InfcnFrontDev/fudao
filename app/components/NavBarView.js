import React, {Component} from "react";
import {StyleSheet, View, ScrollView, Text, Image} from "react-native";
import globalStyles from "../utils/globalStyles";
import NavBar from "./NavBar";

export default class NavView extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<View style={styles.rootContainer}>
				<NavBar {...this.props}/>
				<View style={styles.mainContainer}>
					{this.props.children}
				</View>
			</View>
		)
	}
};


const styles = StyleSheet.create({
	rootContainer: {
		flexGrow: 1,
		flex: 1
	},
	mainContainer: {
		...globalStyles.container,
		flexGrow: 1,
		flex: 1
	}
});