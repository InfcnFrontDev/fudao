import React, {PureComponent} from "react";
import {Modal, View, Image, TouchableHighlight} from "react-native";
import {Text} from "native-base";
import {theme, urls} from "../../../utils/index";
import Video from "react-native-video";

/**
 * 情绪干预， 弹出
 */
class EmotionSolve extends PureComponent {

	state = {
		show: false,
		data: null
	};

	render() {
		let {data} = this.state;
		if (!data)
			return null;

		return (
			<Modal
				animationType={'slide'}
				transparent
				visible={this.state.show}
				onRequestClose={() => this.hide()}
			>
				<TouchableHighlight onPress={() => this.hide()} style={{flex: 1}}>
					<View style={styles.container}>
						<View style={styles.View}>
							<Text style={styles.title}>{data.mitigation_method}</Text>
							<Text style={styles.content}>{data.method_detail}</Text>
							<View>
								{data.img && this.renderImg(data.img)}
							</View>
						</View>
					</View>
				</TouchableHighlight>
			</Modal>
		)
	}

	renderImg(img) {
		let ext = img.substring(img.indexOf(".") + 1);
		if (ext == 'mp3' || ext == 'wav' || ext == 'm4a') {
			return (
				<Video source={{uri: urls.getImage("/high_quality_population" + img)}} // 视频的URL地址，或者本地地址，都可以.
					   rate={1.0}                   // 控制暂停/播放，0 代表暂停paused, 1代表播放normal.
					   volume={1.0}                 // 声音的放大倍数，0 代表没有声音，就是静音muted, 1 代表正常音量 normal，更大的数字表示放大的倍数
					   muted={false}                // true代表静音，默认为false.
					   paused={false}               // true代表暂停，默认为false
					   resizeMode="cover"           // 视频的自适应伸缩铺放行为，
					   repeat={true}                // 是否重复播放
					   playInBackground={false}     // 当app转到后台运行的时候，播放是否暂停
					   playWhenInactive={false}     // [iOS] Video continues to play when control or notification center are shown. 仅适用于IOS
					   onLoadStart={this.loadStart} // 当视频开始加载时的回调函数
					   onLoad={this.setDuration}    // 当视频加载完毕时的回调函数
					   onProgress={this.setTime}    //  进度控制，每250ms调用一次，以获取视频播放的进度
					   onEnd={this.onEnd}           // 当视频播放完毕后的回调函数
					   onError={this.videoError}    // 当视频不能加载，或出错后的回调函数
					   style={styles.backgroundVideo}/>
			)
		} else {
			return (
				<Image source={{uri: urls.getImage("/high_quality_population" + img)}} resizeMode='cover'
					   style={styles.image}/>
			)
		}
	}


	show(data) {
		this.setState({
			show: true,
			data
		})
	}

	hide() {
		this.setState({
			show: false,
			data: null
		})
	}
}

const styles = {
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
	},
	View: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 30,
	},
	title: {
		textAlign: 'center',
		fontSize: theme.DefaultFontSize + 6,
		marginBottom: 60,
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
	backgroundVideo: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	},
};

export default (EmotionSolve);
