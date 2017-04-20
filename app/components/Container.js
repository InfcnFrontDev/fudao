import React, {PureComponent} from "react";
import {StyleSheet, View, Image} from "react-native";

class Container extends PureComponent {

	render() {
		let {children} = this.props;
		return (
			<View style={styles.container}>
				<Image source={require('../assets/videoBj1.png')}
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
	image: {}
})

export default (Container)