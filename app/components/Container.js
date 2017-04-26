import React, {PureComponent} from "react";
import {StyleSheet, View, Image} from "react-native";

export default  class Container extends PureComponent {

	render() {
		let {children, isTabPanel} = this.props,
			width = theme.deviceWidth,
			height = theme.deviceHeight - 20;

		if (isTabPanel) {
			height -= theme.navTabBarHeight;
		}

		return (
			<View style={styles.container}>
				<Image source={require('../assets/bg/container.jpg')}
					   style={{width,height,alignSelf: "flex-end"}}>
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
		width:theme.deviceWidth+5,
		height:theme.deviceHeight,
	}
});
