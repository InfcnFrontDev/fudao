import React, {PureComponent} from "react";
import {WebView, View, Image, Text} from "react-native";
import userStore from "../mobx/userStore";


/**
 * WebView
 */
export default class InfcnWebView extends PureComponent {

	render() {
		let {uri} = this.props;
		uri += (_.endsWith(uri, '.html') ? '?' : '&') + 'token=' + userStore.token;
		return (
			<WebView
				ref={(e) => this._webview = e}
				source={{uri}}
				onMessage={this.props.onMessage}
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