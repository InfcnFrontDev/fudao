import React, {PureComponent} from "react";
import {StyleSheet, View, Image} from "react-native";

class Container extends PureComponent {

	render() {
		let {children} = this.props;
		return (
			<View style={styles.container}>
				<Image source={require('../assets/bg/container.jpg')}
					   style={styles.image}>
					{children}
				</Image>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	image: {
		width: theme.deviceWidth,
		height: theme.deviceHeight - theme.navTabBarHeight,
		alignSelf: "flex-end",
	}
})

export default (Container)