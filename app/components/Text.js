import React, {PureComponent} from "react";
import {Text} from "native-base";
import _ from "underscore";

export default class InfcnText extends PureComponent {

	render() {
		let {...props} = this.props;

		if (props.style && _.isArray(props.style)) {
			let style = {};
			props.style.forEach((s) => style = Object.assign({}, style, s));
			props.style = style;
		}

		return (
			<Text {...props}>
				{props.children}
			</Text>
		)
	}
}