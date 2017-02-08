import React, {
	Component,
	PropTypes
} from 'react'

import {
	View,
	Text,
	Image,
	TouchableHighlight,
	StyleSheet,
	PixelRatio
} from 'react-native'

import global from '../utils/global'
import iconfont from '../utils/iconfont'
import globalStyles from '../utils/globalStyles'

export default class ItemCell extends Component {

	render() {
		let touchableProps = {
			accessible: this.props.accessible,
			delayLongPress: this.props.delayLongPress,
			delayPressIn: this.props.delayPressIn,
			delayPressOut: this.props.delayPressOut,
			onLongPress: this.props.onLongPress,
			onPress: this.props.onPress,
			onPressIn: this.props.onPressIn,
			onPressOut: this.props.onPressOut,
		}
		return (
			<TouchableHighlight
				{...touchableProps}
				underlayColor={globalStyles.underlayColor}
				style={[styles.container, this.props.containerStyle]}
			>
				<View style={styles.viewContainer}>
					<View style={styles.leftContainer}>
					</View>
					<View style={[styles.flexContainer, this.props.showBottomBorder ? globalStyles.bottomBorder : {}]}>
						<View style={styles.textContainer}>
							{this.renderImage() }
							{this.renderIcon() }
							{this.renderText()}
							{this.renderSubText()}
							{this.renderDisclosureIndicator() }
						</View>
					</View>
				</View>
			</TouchableHighlight>
		)
	}


	renderImage() {
		let {image, imageContainerStyle, imageStyle} = this.props;
		if (image) {
			return (
				<View style={[styles.imageContainer, imageContainerStyle]}>
					<Image style={[styles.image, imageStyle]} source={image} resizeMode='cover'/>
				</View>
			)
		}
	}

	renderIcon() {
		let {icon, iconContainerStyle, iconStyle} = this.props;
		if (icon) {
			return (
				<View style={[styles.iconContainer, iconContainerStyle]}>
					<Text style={[styles.icon, iconStyle]} source={icon} resizeMode='cover'>
						{icon}
					</Text>
				</View>
			)
		}
	}

	renderText() {
		if (this.props.text) {
			return (
				<Text style={styles.text}>{this.props.text}</Text>
			)
		}
	}

	renderSubText() {
		if (this.props.subText) {
			return (
				<Text style={styles.subText}>{this.props.subText}</Text>
			)
		}
	}

	renderDisclosureIndicator() {
		if (this.props.showDisclosureIndicator) {
			return (
				<Text style={styles.chevron}>{iconfont.right}</Text>
			)
		}
	}
}

ItemCell.propTypes = {
	...TouchableHighlight.propTypes,
	text: PropTypes.string.isRequired,
	showDisclosureIndicator: PropTypes.bool,
	showMiddleBorder: PropTypes.bool,
	icon: PropTypes.string,
	iconStyle: PropTypes.object,
	image: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.shape({
			uri: PropTypes.string,
		}),
	]),
	imageStyle: PropTypes.object,
	containerStyle: PropTypes.object
}

const styles = StyleSheet.create({
	viewContainer: {
		flexDirection: 'row',
		backgroundColor: 'white',
		alignItems: 'center'
	},
	leftContainer: {
		width: 15,
		marginTop: 5,
		marginBottom: 5
	},
	flexContainer: {
		flexGrow: 1
	},
	paddingView: {
		width: 15,
		backgroundColor: 'white',
	},
	textContainer: {
		flexGrow: 1,
		flexDirection: 'row',
		marginTop: 10,
		marginBottom: 10,
		alignItems: 'center',
	},
	text: {
		flexGrow: 1,
		fontSize: 16,
		alignSelf: 'center',
	},
	subText: {
		marginRight: 5,
		fontSize: 14,
		color: '#8e8e93'
	},
	chevron: {
		...globalStyles.iconfont,
		fontSize: 16,
		color: '#8e8e93',
		marginRight: 5
	},
	imageContainer: {
		alignItems: 'center',
		width: 30,
		height: 30,
		justifyContent: 'center',
		marginRight: 10
	},
	image: {
		width: 24,
		height: 24
	},
	iconContainer: {
		alignItems: 'center',
		width: 30,
		height: 30,
		justifyContent: 'center',
		marginRight: 10
	},
	icon: {
		...globalStyles.iconfont,
		fontSize: 24
	}
})