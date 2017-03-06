import React, {PureComponent} from "react";
import {StyleSheet, View} from "react-native";
import {theme} from "../utils/index";

export default class Content extends PureComponent {
	render() {
		let {children} = this.props;
		return (
			<View style={styles.content}>
				{children}
			</View>
		)
	}
}


const styles = StyleSheet.create({
	content: {
		backgroundColor: theme.contentBgColor,
		flex: 1,
	}
})