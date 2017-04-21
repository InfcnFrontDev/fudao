import React, {PureComponent} from "react";
import {StyleSheet, View, Image} from "react-native";

class Container extends PureComponent {

	render() {
		let {children} = this.props;
		return (
			<Image source={require('../assets/bg/container.jpg')} style={styles.container}>
				{children}
			</Image>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		width: theme.deviceWidth,
		height: theme.deviceHeight- 20,
		alignSelf: "flex-end",
	}
})

export default (Container)