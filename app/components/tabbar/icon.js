import React, {Component} from "react";
import {StyleSheet, View} from "react-native";
import {Left, Right, Body, Icon, Text} from "native-base";
import {theme} from "../../utils/"

class TabBarIcon extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let {selected, title, iconName, selectedIconName} = this.props,
			colorStyle = {color: theme.tabBarTextColor};

		if (selected) {
			iconName = selectedIconName;
			colorStyle = {color: theme.tabBarActiveTextColor};
		}
		return (
			<View style={styles.tabbarItem}>
				<Icon name={iconName} size={25} style={colorStyle}/>
				<Text style={colorStyle}>{title}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	tabbarItem: {
		alignItems: 'center',
		justifyContent: 'center'

	},
})

export default (TabBarIcon)