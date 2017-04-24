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
			<Image source={require('../assets/bg/qing/1.jpg')}
				   style={{width,height,alignSelf: "flex-end"}}>
				<Image source={require('../assets/bg/container.gif')}
					   style={{width,height,alignSelf: "flex-end"}}>
					{children}
				</Image>
			</Image>
		)
	}

}