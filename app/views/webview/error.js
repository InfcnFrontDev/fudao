import React, {PureComponent} from "react";
import {Image} from "react-native";
import {View, Text} from "native-base";
import styles from "./styles";

class Error extends PureComponent {

	render() {
		return (
			<View style={styles.errorView}>
				<Image source={require('../../assets/error.png')}/>
				<Text>网络不给力，请稍后再重试。</Text>
			</View>
		)
	}
}

export default (Error);