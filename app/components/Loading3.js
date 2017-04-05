import React from "react";
import {Modal, StyleSheet, View, Text, Image, ActivityIndicator} from "react-native";

export default class Loading extends React.Component {

	state = {
		isShow: false,
		text: '正在加载...'
	};

	render() {
		let {isShow, text} = this.state;
		return (
			<Modal
				transparent
				visible={isShow}
				onRequestClose={() => this.hide()}
			>
				<View style={styles.container}>
					<View style={styles.loading}>
						<ActivityIndicator color={'#FFFFFF'}/>
						<Text style={styles.loadingTitle}>{text}</Text>
					</View>
				</View>
			</Modal>
		)
	}

	show() {
		this.setState({
			isShow: true,
		})
	}

	hide() {
		this.setState({
			isShow: false,
		})
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		// backgroundColor: '#EDEDED',
		// opacity: 1,
	},
	loading: {
		backgroundColor: '#393939',
		height: 80,
		width: 100,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	loadingTitle: {
		marginTop: 10,
		fontSize: 14,
		color: '#FFFFFF'
	}
})


Loading.propTypes = {
	text: React.PropTypes.string,
	isShow: React.PropTypes.bool,
}

Loading.defaultProps = {
	text: '正在加载...',
	isShow: false,
}