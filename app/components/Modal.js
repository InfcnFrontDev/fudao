import React, {PureComponent} from "react";
import {Modal, View, Image, TouchableNativeFeedback} from "react-native";

/**
 * 我的能量场 > 资料填写
 */
class Modal_ extends PureComponent {

	constructor(props) {
		super(props);
		this.state = {
			visible: props.visible,
		}
	}

	render() {
		let {visible} = this.state;
		let {children} = this.props;
		return (
			<Modal
				animationType={'fade'}
				transparent={true}
				visible={visible}
				onRequestClose={() => this.hide()}
			>
				<TouchableNativeFeedback onPress={() => this.hide()}>
					<View style={styles.opacityView}/>
				</TouchableNativeFeedback>
				<View style={styles.content}>
					{children}
				</View>
			</Modal>
		)
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.visible != this.state.visible) {
			this.setState({
				visible: nextProps.visible
			})
		}
	}

	/**
	 * 打开对话框
	 */
	show() {
		this.setState({
			visible: true,
		})
	}

	/**
	 * 关闭对话框
	 */
	hide() {
		this.setState({
			visible: false
		})
	}
}


const styles = {
	opacityView: {
		flex: 1,
		backgroundColor: '#6c6c6c',
		opacity: 0.5,
	},
	content: {
		position: "absolute",
		backgroundColor: '#FFFFFF',
		top: 30,
		bottom: 30,
		left: 20,
		right: 20,
		opacity: 1,
		flex: 1,
	},
};

Modal_.propTypes = {
	visible: React.PropTypes.bool,
};
Modal_.defaultProps = {
	visible: false,
}

export default  (Modal_);
