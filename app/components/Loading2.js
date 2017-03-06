import React from "react";
import {StyleSheet, View, Text, Image} from "react-native";

export default class Loading extends React.Component {
	render() {
		return (
			<View style={styles.loading}>
				<Image source={require('../assets/loading.gif')} style={{width: 40,height:40}}/>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	loading: {
		flex: 1,
		backgroundColor: '#FFFFFF',
		justifyContent: 'center',
		alignItems: 'center',
	}
})