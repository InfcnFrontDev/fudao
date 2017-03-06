import React from "react";
import {StyleSheet, View, Text, Image} from "react-native";
import {theme} from "../utils/index";

export default class Loading extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.loading}>
					<Image source={require('../assets/loading.gif')} style={{width: 40,height:40}}/>
					<Text style={styles.loadingTitle}>加载中...</Text>
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
		backgroundColor: '#FFFFFF',
		height: 80,
		width: 100,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#eaeaea'
	},
	loadingTitle: {
		marginTop: 10,
		fontSize: 14,
		color: '#000'
	}
})