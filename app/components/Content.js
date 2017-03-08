import React, {PureComponent} from "react";
import {StyleSheet, View} from "react-native";
import {theme} from "../utils/index";

export default class Content extends PureComponent {
	render() {
		let {children, gray, white} = this.props,
			contentStyle = {flex: 1};

		if (gray) {
			contentStyle.backgroundColor = theme.contentBgColor;
		}

		return (
			<View style={contentStyle}>
				{children}
			</View>
		)
	}
}

Content.propTypes = {
	gray: React.PropTypes.bool,
}
Content.defaultProps = {
	gray: false,
}
