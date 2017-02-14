import React, {Component} from "react";
import {View, Text, TouchableOpacity, Platform} from "react-native";
import NavigationBar from "react-native-navbar";
import global from "../utils/global";


export default class NavBar extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<NavigationBar
				style={styles.navbar}
				tintColor={'#1874CD'}
				leftButton={this.props.leftButton}
				rightButton={this.props.rightButton}
				title={this._renderTitle()}
			/>
		)
	}

	_renderTitle() {
		let {title} = this.props;
		return (
			<View style={styles.title}>
				<Text style={styles.titleText}>{title || global.appName}</Text>
			</View>
		)
	}
}

const styles = {
	navbar: {
		height: 50
	},
	title: {
		marginBottom: 5
	},
	titleText: {
		fontSize: 18,
		color: '#ffffff'
	}
}