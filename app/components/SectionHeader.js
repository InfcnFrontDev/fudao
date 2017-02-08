import React, {Component, PropTypes} from "react";
import {StyleSheet, View, Text, Platform, PixelRatio} from "react-native";
import globalStyles from "../utils/globalStyles";

/**
 * 列表中间的分组条，也可用于分隔条
 */
class SectionHeader extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		let {
				children,
				showTopBorder,
				showBottomBorder,
				style,
				textStyle
			} = this.props,
			viewStyles = [styles.sectionHeaderView];

		if (children) {
			viewStyles.push(styles.hasChildren)
		}
		if (showTopBorder) {
			viewStyles.push(globalStyles.topBorder)
		}
		if (showBottomBorder) {
			viewStyles.push(globalStyles.bottomBorder)
		}

		viewStyles.push(style);

		return (
			<View style={viewStyles}>
				<Text style={[styles.sectionHeaderText, textStyle]}>
					{this.props.children}
				</Text>
			</View>
		)
	}
}

SectionHeader.propTypes = {
	showTopBorder: PropTypes.bool,
	showBottomBorder: PropTypes.bool,
	style: PropTypes.object,
	textStyle: PropTypes.object
}

const styles = StyleSheet.create({
	sectionHeaderView: {
		paddingTop: 3,
		paddingBottom: 3,
		paddingLeft: 15,
		justifyContent: 'center'
	},
	sectionHeaderText: {
		color: '#8e8e93'
	},
	hasChildren: {
		paddingTop: 5,
		paddingBottom: 5,
	}
});

export default SectionHeader