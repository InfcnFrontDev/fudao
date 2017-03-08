import React from "react";
import {StyleSheet, View, Text, Image, ActivityIndicator} from "react-native";
import {theme} from "../utils/index";

export default class Loading extends React.Component {
	render() {
		let {text} = this.props;
		return (
			<View style={styles.container}>
				<View style={styles.loading}>
					<ActivityIndicator/><Text style={styles.loadingTitle}>{text}</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: theme.deviceWidth,
		height: theme.deviceHeight - 50,
		justifyContent: 'center',
		alignItems: 'center'
	},
	loading: {
		backgroundColor: '#373737',
		height: 80,
		width: 100,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		opacity: 0.8,
	},
	loadingTitle: {
		marginTop: 10,
		fontSize: 14,
		color: '#FFFFFF'
	}
})


Loading.propTypes = {
	text: React.PropTypes.string,
}

Loading.defaultProps = {
	text: '正在加载...'
}