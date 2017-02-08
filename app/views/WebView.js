import React, {
	Component,
	PropTypes
} from 'react'

import {
	WebView,
	StyleSheet,
	View
} from 'react-native'

import globalStyles from '../utils/globalStyles'
import NavBar from '../components/NavBar'

export default class WebViewView extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<View style={styles.container}>
				<NavBar route={this.props.route} navigator={this.props.navigator}/>
				<WebView
					automaticallyAdjustContentInsets={false}
					source={{uri: this.props.url}}
					javaScriptEnabled={true}
					domStorageEnabled={true}
					decelerationRate='normal'
					startInLoadingState={true}
					scalesPageToFit={true}
				/>
			</View>
		)
	}
}

WebViewView.propTypes = {
	url: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
	container: {
		...globalStyles.container,
		flexGrow: 1
	}
})