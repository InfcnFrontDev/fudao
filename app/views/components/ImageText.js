import React, {PureComponent} from "react";
import {Modal, View, Image, TouchableHighlight} from "react-native";
import {Text} from "native-base";
import {theme, urls} from "../../utils/index";


/**
 * 图片展示组件
 */
class ImageText extends PureComponent {

	render() {
		let {title, content, image} = this.props;
		return (
			<View style={styles.container}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.content}>{content}</Text>
				<View>
					<Image source={{uri: urls.getImage(image)}} resizeMode='cover' style={styles.image}/>
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

