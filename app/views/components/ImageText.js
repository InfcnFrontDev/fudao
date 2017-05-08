import React, {PureComponent} from "react";
import {Modal, View, Image, TouchableHighlight} from "react-native";
import {Text} from "native-base";


/**
 * 图片展示组件
 */
class ImageText extends PureComponent {

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>121212</Text>
				<Text style={styles.content}>12121212</Text>
				<View>
					{/*<Image source={{uri: urls.getImage('/high_quality_population'+image)}} resizeMode='cover' style={styles.image}/>*/}
				</View>
			</View>
		)
	}
}

const styles = {
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 30,
		borderRadius: 10
	},
	title: {
		textAlign: 'center',
		fontSize: theme.DefaultFontSize + 6,
		marginBottom: 30,
	},
	content: {
		textAlign: 'center',
		fontSize: theme.DefaultFontSize + 2,
		marginLeft: 30,
		marginRight: 30,
		lineHeight: 28,
	},
	image: {
		marginTop: 20,
		width: 250,
		height: 200,
		justifyContent: 'center',
	},
};

ImageText.propsTypes = {
	title: React.PropTypes.string,
	content: React.PropTypes.string,
	image: React.PropTypes.string,
}

export default (ImageText);

