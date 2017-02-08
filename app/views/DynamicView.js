import React, {
	Component
} from 'react'

import {
	StyleSheet,
	View,
	Image,
	TouchableHighlight,
	Platform,
	Text
} from 'react-native'

import moment from 'moment'
import GiftedListView from 'react-native-gifted-listview'
import ParsedText from 'react-native-parsed-text'
import {ajax} from '../network/index'
import globalStyles from '../utils/globalStyles'
import util from '../utils/util'

import NavBarView from '../components/NavBarView'

export default class HomeView extends Component {
	constructor(props) {
		super(props)
		this.state = {
			timeline: []
		}
	}

	render() {
		let color = Platform.OS === 'android' ? globalStyles.androidSpinnerColor : 'gray'
		return (
			<NavBarView {...this.props}>
				<GiftedListView
					enableEmptySections={true}
					customStyles={customStyles}
					rowView={this._renderRowView.bind(this)}
					onFetch={this._onFetch.bind(this)}
					firstLoader={true}
					pagination={true}
					refreshable={true}
					withSections={false}
					spinnerColor={color}
				/>
			</NavBarView>
		)
	}

	_onFetch(page = 1, callback, options) {
		if (page === 1 && options.firstLoad) {
			ajax({
				url: 'timeline.json'
			}).then(res => {
				if (!res.err_code) {
					this.setState({
						timeline: res.data,
					})
					callback(this.state.timeline)
				}
			})
		} else if (page === 1 && !options.firstLoad) {
			ajax({
				url: 'refresh_timeline.json'
			}).then(res => {
				if (!res.err_code) {
					let oldTimeline = this.state.timeline
					this.setState({
						timeline: res.data.concat(oldTimeline)
					})
					callback(this.state.timeline)
				}
			})
		} else {
			ajax({
				url: 'more_timeline.json'
			}).then(res => {
				if (!res.err_code) {
					callback(res.data, {
						allLoaded: true
					})
				}
			})
		}
	}

	_renderRowView(info) {
		return (
			<TouchableHighlight underlayColor='transparent' onPress={this._gotoDetails.bind(this, info)}>
				<View style={styles.tweetContainer}>
					<View style={styles.topContainer}>
						<Image source={{uri: util.getAvatarUrl(info.icon)}} style={styles.icon}/>
						<View>
							<View style={styles.userContainer}>
								<Text style={styles.name}>{info.text}</Text>
								<Text
									style={styles.time}>{'#' + info.id + ' '} {moment(info.created_at * 1000).fromNow()}</Text>
							</View>
						</View>
					</View>
					<View style={styles.middleContainer}>
						<ParsedText
							parse={
								[{type: 'url', style: customStyles.url, onPress: this._handleUrlPress.bind(this)}]}
						>{info.text}</ParsedText>
						{this._renderMsgImage(info)}
					</View>
					<View style={styles.bottomContainer}>
						<TouchableHighlight style={styles.bottomTool}>
							<Text style={styles.bottomToolText}>Forward</Text>
						</TouchableHighlight>
						<TouchableHighlight style={styles.bottomTool}>
							<Text style={styles.bottomToolText}>Comment</Text>
						</TouchableHighlight>
						<TouchableHighlight style={styles.bottomTool}>
							<Text style={styles.bottomToolText}>Like</Text>
						</TouchableHighlight>
					</View>
				</View>
			</TouchableHighlight>
		)
	}

	_renderMsgImage(info) {
		if (info.original_pic) {
			return (
				<TouchableHighlight onPress={this._openPhotoBrowser.bind(this, info)}>
					<Image source={{uri: info.original_pic}}
						   style={[styles.msgImage, {resizeMode: Image.resizeMode.cover}]}/>
				</TouchableHighlight>
			)
		}
	}

	_handleUrlPress(url) {
		this.props.navigator.push({
			title: 'WebView',
			id: 'webview',
			params: {
				url: url
			}
		})
	}

	_gotoDetails(tweet) {
		this.props.navigator.push({
			title: 'Tweet',
			id: 'tweetDetails',
			params: {
				tweet: tweet
			}
		})
	}

	_openPhotoBrowser(info) {
		this.props.navigator.push({
			id: 'photoBrowser',
			params: {
				mediaList: [{
					photo: info.original_pic,
					caption: info.text
				}]
			}
		})
	}
}

const customStyles = {
	paginationView: {
		...globalStyles.container
	},
	url: {
		color: '#007aff'
	}
}

const styles = StyleSheet.create(globalStyles.card)