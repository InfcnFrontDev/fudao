import React, {PureComponent} from "react";
import {StyleSheet, View} from "react-native";
import {theme} from "../utils/index";

export default class Content extends PureComponent {
	render() {
		let {children, gray, padder} = this.props,
			contentStyle = {flex: 1};

		if (gray) {
			contentStyle.backgroundColor = theme.contentBgColor;
		}
		if (padder) {
			contentStyle.padding = 15;
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
	padder: React.PropTypes.bool,
}
Content.defaultProps = {
	gray: false,
	padder: false,
}
