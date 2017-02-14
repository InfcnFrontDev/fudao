import React, {Component} from "react";
import {StyleSheet, View, ScrollView, Text, Image} from "react-native";
import NavBar from "./NavBar";

export default class NavView extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<View style={styles.rootView}>
				<NavBar {...this.props}/>
				<View style={styles.contentView}>
					{this.props.children}
				</View>
			</View>
		)
	}
};


const styles = StyleSheet.create({
	rootView: {
		flexGrow: 1
	},
	contentView: {
		flexGrow: 1,
		backgroundColor: '#EAEAEA'
	}
});