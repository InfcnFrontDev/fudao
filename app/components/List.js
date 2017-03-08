import React, {PureComponent} from "react";
import {StyleSheet, View} from "react-native";
import {theme} from "../utils/index";

export default class List extends PureComponent {

	render() {
		let {children} = this.props;
		return (
			<View style={styles.list}>
				{children}
			</View>
		)
	}

}


const styles = StyleSheet.create({
	list: {
		backgroundColor: '#FFFFFF',
		borderTopWidth: theme.borderWidth,
		borderBottomWidth: theme.borderWidth,
		borderColor: '#cbd2d9',
	}
})