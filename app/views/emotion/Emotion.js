import React, {PureComponent} from "react";
import {Image, DeviceEventEmitter} from "react-native";
import {connect} from "react-redux";
import {Right, View, Text} from "native-base";
import {Container, Content, Header, Modal} from "../../components/index";
import {calm} from "./components/EmotionData";
import {updateMyEmotion} from "../../actions/emotion";
import EmotionList from "./components/EmotionList";
import ImageText from "../components/ImageText";
import {request, urls, toast} from "../../utils/";

/**
 * 情绪
 */
class Emotion extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			modalView: null,
		}
	}

	render() {
		let {myEmotion} = this.props;
		let {modalView} = this.state;
		// 默认情绪为‘平静’
		if (!myEmotion) {
			myEmotion = calm[0];
		}
		return (
			<Container>
				<Header {...this.props} right={
					<Right>
						<View style={styles.selectedEmotion}>
							<Image source={myEmotion.img} style={styles.selectedEmotionImg}/>
							<Text style={styles.selectedEmotionTitle}>{myEmotion.title}</Text>
						</View>
					</Right>
				}/>
				<Content delay>
					<EmotionList onItemPress={this._onItemPress.bind(this)}/>
					<Modal ref={(e)=>this._modal = e}>
						{modalView}
					</Modal>
				</Content>
			</Container>
		)
	}

	/**
	 * 一小时后情绪修改为平静， 进入页面时处理
	 */
	componentWillMount() {
		let {loginUser, myEmotion, updateTime} = this.props;
		if (myEmotion) {
			let currentTime = new Date().getTime();
			if (currentTime - updateTime > 1000 * 60 * 60) {
				this.props.dispatch(updateMyEmotion(calm[0]));
			}
		}
	}

	/**
	 * 单击每个情绪时，修改右上角的当前情绪，并且弹出 情绪干预。
	 * @param item 情绪
	 */
	_onItemPress(item) {
		// 更新我的情绪
		this.props.dispatch(updateMyEmotion(item));

		request.getJson(urls.apis.NOW_EMOTION, {
			name: item.title,
			renqun: 'high_quality_population',
		}).then(((data) => {
			if (data.success && data.obj) {
				this.showModal(data.obj);
			} else {
				toast.show('这种心情，我没办法了');
			}
		}).bind(this))
	}

	showModal(data) {
		let modalView = (null),
			img = data.img;
		if (img) {
			let ext = img.substring(img.indexOf(".") + 1);
			if (ext == 'mp3' || ext == 'wav' || ext == 'm4a') {
				// imgB = (
				// 	<VideoBfq ref={(e)=>this._modal = e}></VideoBfq>
				// )
			} else {
				modalView = (
					<ImageText title={data.mitigation_method} content={data.method_detail} image={data.img}/>
				)
			}
		}

		this.setState({
			modalView
		})
		this._modal.show();
	}
}


const styles = {
	selectedEmotion: {
		flexDirection: 'column',
		marginTop: 0,
		alignItems: 'center',
		justifyContent: 'center',
	},
	selectedEmotionImg: {
		width: 36,
		height: 36,
		marginRight: 3,
	},
	selectedEmotionTitle: {
		color: '#fff',
		fontSize: 12,
	}
};

const mapStateToProps = state => ({
	loginUser: state.user.loginUser,
	...state.emotion
});
export default connect(mapStateToProps)(Emotion);
