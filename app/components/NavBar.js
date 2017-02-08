import React, {
	Component
} from 'react'

import {
	View,
	Text,
	TouchableOpacity,
	Platform
} from 'react-native'

import NavigationBar from 'react-native-navbar'
import global from '../utils/global'


export default class NavBar extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	renderTitle() {
		let {title} = this.props;
		return (
			<View style={styles.title}>
				<Text style={styles.titleText}>{title || global.appName}</Text>
			</View>
		)
	}

	render() {
		return (
			<NavigationBar
				style={styles.navbar}
				tintColor={'#f7f7f8'}
				leftButton={this.props.leftButton}
				rightButton={this.props.rightButton}
				title={this.renderTitle()}
			/>
		)
	}
}

const styles = {
	navbar: {
		alignItems: 'center',
		borderColor: '#e1e1e1',
		borderBottomWidth: 1
	},
	title: {
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 5
	},
	titleText: {
		fontSize: 18
	}
}