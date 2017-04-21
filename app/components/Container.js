import React, {PureComponent} from "react";
import {StyleSheet, View} from "react-native";

class Container extends PureComponent {

	render() {
		let {children} = this.props;
		return (
			<View style={styles.container}>
				{children}
			</View>
		)
	}
}



const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})

export default (Container)