import React, {PureComponent} from "react";
import {Text} from "native-base";
import {View, Image, TouchableOpacity, TouchableHighlight, Dimensions, Modal} from "react-native";
import {theme, urls, toast} from "../../utils/index";
import Video from "react-native-video";
/**
 * 播放器
 */


class VideoBfq extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			btn: false,
			cc: require('../../assets/stop.png')
		}
	}

	render() {
		let {data}=this.state;
		if (!data) {
			return null
		}

		data.img = '/qingxu/inSpring.mp3'
		return (
			<Modal
				transparent
				visible={this.state.show}
				onRequestClose={() => {
				}}
			>
				<View style={styles.bigBox}>
					<View style={styles.View}>
						<Image source={require('../../assets/videoBj1.png')} style={styles.bj}>
							<View style={{
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
								backgroundColor: 'red'
							}}>
								<Text style={styles.title}>{data.mitigation_method}</Text>
								<Text style={styles.content}>{data.method_detail}</Text>
								<View style={styles.btn}>
									<TouchableOpacity onPress={this._btn.bind(this)}>
										<View style={{width: 50, height: 50, backgroundColor: '#555'}}>
											<Image source={this.state.cc}></Image>
										</View>
									</TouchableOpacity>
								</View>

								<Text>{data.basis}</Text>
							</View>
							<Video
								source={{uri: urls.getImage('/high_quality_population/' + data.img)}} // 视频的URL地址，或者本地地址，都可以.
								rate={1.0}                   // 控制暂停/播放，0 代表暂停paused, 1代表播放normal.
								volume={1.0}                 // 声音的放大倍数，0 代表没有声音，就是静音muted, 1 代表正常音量 normal，更大的数字表示放大的倍数
								muted={false}                // true代表静音，默认为false.
								paused={true}               // true代表暂停，默认为false
								resizeMode="cover"           // 视频的自适应伸缩铺放行为，
								repeat={true}                // 是否重复播放
								playInBackground={false}     // 当app转到后台运行的时候，播放是否暂停
								playWhenInactive={false}     // [iOS] Video continues to play when control or notification center are shown. 仅适用于IOS
								onLoadStart={this.loadStart} // 当视频开始加载时的回调函数
								onLoad={this.setDuration}    // 当视频加载完毕时的回调函数
								onProgress={this.setTime}    //  进度控制，每250ms调用一次，以获取视频播放的进度
								onEnd={this.onEnd}           // 当视频播放完毕后的回调函数
								onError={this.videoError}    // 当视频不能加载，或出错后的回调函数
								style={styles.backgroundVideo}
							/>
						</Image>
					</View>
				</View>
			</Modal>
		)
	}

	show(data) {
		this.setState({
			show: true,
			data: data
		})
	}

	_btn() {
		toast.show("12")
		let {btn}=this.state;
		if (btn) {
			this.setState({
				cc: require('../../assets/play.png')
			})

		} else {
			this.setState({
				cc: require('../../assets/stop.png')
			})
		}
	}
}

const styles = {
	bigBox: {
		width: theme.deviceWidth,
		height: theme.deviceHeight,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.5)',
	},
	View: {
		width: theme.deviceWidth * 0.8,
		height: theme.deviceHeight * 0.8,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 30,
		backgroundColor: '#fff',
		borderRadius: 10
	},
	backgroundVideo: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	},
	bj: {
		resizeMode: 'contain'
	},
	left: {
		width: 100,
	},
	title: {
		textAlign: 'center',
		fontSize: theme.DefaultFontSize + 6,
		marginTop: 30,
		marginBottom: 30
	},
	content: {
		textAlign: 'center',
		fontSize: theme.DefaultFontSize + 2,
		lineHeight: 28,
	},
	btn: {
		marginTop: 30,
		marginBottom: 30
	}
};
export default (VideoBfq);


