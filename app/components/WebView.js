import React, {PureComponent} from "react";
import {WebView, View, Image, Text} from "react-native";


/**
 * WebView
 */
export default class InfcnWebView extends PureComponent {

	render() {
		return (
			<WebView
				ref={(e) => this._webview = e}
				source={{...this.props}}
				startInLoadingState={true}
				javaScriptEnabled={true}
				domStorageEnabled={true}
				scalesPageToFit={false}
				renderError={this.renderError.bind(this)}
			/>
		)
	}

	renderError() {
		return (
			<View style={styles.errorView}>
				<Image source={require('../assets/error.png')}/>
				<Text>网络不给力，请稍后再重试。</Text>
			</View>
		)
	}

	shouldComponentUpdate() {
		return false
	}
}

const styles = {
	errorView: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	}
}