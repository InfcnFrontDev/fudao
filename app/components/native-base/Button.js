import React, {PureComponent} from "react";
import {StyleSheet, View} from "react-native";
import {Button} from "native-base";

export default class InfcnButton extends PureComponent {

	render() {
		return (
			<Button {...this.props}>
				{children}
			</Button>
		)
	}
}