import React, {PureComponent} from "react";
import {Button, Text} from "native-base";

export default class InfcnButton extends PureComponent {

	render() {
		let {...props} = this.props;

		if (!props.children) {
			// text
			if (props.text) {
				props.children = (
					<Text>{props.text}</Text>
				)
			}
		}

		return (
			<Button {...props}>
				{props.children}
			</Button>
		)
	}
}