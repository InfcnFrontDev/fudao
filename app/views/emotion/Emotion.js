import React, {PureComponent} from "react";
import {Image, DeviceEventEmitter, Text} from "react-native";
import {Right, View} from "native-base";
import {Container, Content, Header} from "../../components/index";
import EmotionList from "./components/EmotionList";
import EmotionFactorModal from "./components/EmotionFactorModal";
import EmotionSolveModal from "./components/EmotionSolveModal";
import {calm} from "./components/EmotionData";
import {observer} from "mobx-react/native";
import EmotionStore from "../../mobx/emotionStore";


/**
 * 情绪
 */
@observer
export default class Emotion extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			modalView: null,
			EmoModal: null,
			FactorModal: null,
			showMol1: null,
			data: null,
			img: null,

			showMol1: false,
			showMol2: false,
		}
	}

	/**
	 * 一小时后情绪修改为平静， 进入页面时处理
	 */
	componentWillMount() {
		// let {myEmotion,updateTime}=EmotionStore;
		// if (myEmotion) {
		// 	let currentTime = new Date().getTime();
		// 	if (currentTime - updateTime > 1000 * 60 * 60) {
		// 		EmotionStore.updateMyEmotion(calm[0]);
		// 	}
		// 	this.setState({
		// 		myEmotion:myEmotion
		// 	})
		// }
	}

	render() {
		let {factorData} = this.state;
		let {showMol1, showMol2, data, img}=EmotionStore;
		let myEmotion = EmotionStore.myEmotion;
		if (!myEmotion) {
			myEmotion = calm[0]
		}
		let text = null;
		if (showMol2) {

		} else {
			text = (
				<View tyle={styles.titleBox}>
					<Text style={styles.titleDoc}>不好的情绪影响一天的生活，</Text>
					<Text style={styles.titleDoc}>一起调节一下吧！</Text>
				</View>
			)
		}

		// 默认情绪为‘平静’
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
				<Content delay padder>
					<View style={styles.topBox}>
						<Image style={styles.puImg} source={require('../../assets/emotion/pugongying.png')}></Image>
						{text}
					</View>
					<EmotionList onItemPress={this._onItemPress.bind(this)}/>

					<EmotionFactorModal ref={(e)=>this._factorModal = e}
										onSubmit={this._emotionFactorModal_onSubmit.bind(this)}/>

					<EmotionSolveModal ref={(e)=>this._solveModal = e}/>
				</Content>
			</Container>
		)
	}

	_emotionFactorModal_onSubmit(emotion, selectedGrade, selectedReasons) {
		console.log(emotion, selectedGrade, selectedReasons)

	}

	/**
	 * 单击每个情绪时，修改右上角的当前情绪，并且弹出 情绪干预。
	 * @param item 情绪
	 */
	async _onItemPress(items) {
		// 更新我的情绪
		let updateTime = new Date().getTime();
		EmotionStore.updateMyEmotion(items);
		EmotionStore.updateMyTime(updateTime);
		let goods = "goods";
		let bads = "bads";
		try {
			if (items.title == "愉悦" || items.title == "兴奋" || items.title == "兴趣" || items.title == "满足" || items.title == "平静" || items.title == "平淡") {
				const result = await this._fetchEmotionIntervene(items.title, item.grade)
				this._solveModal.show({
					title: items.title,
					img: items.img,
					macroscopic: result.macroscopic,
					grade: result.grade,
					reasons: result.reasons,
				});
			} else {
				const result = await this._fetchEmotionFactor(items.title, '阴')
				this._factorModal.show({
					title: items.title,
					img: items.img,
					macroscopic: result.macroscopic,
					grade: result.grade,
					reasons: result.reasons,
				});
			}
		} catch (error) {
		}
	}

	_fetchEmotionFactor(emotion, weather) {
		return new Promise((resolve, reject) => {
			request.getJson(urls.apis.EMOTION_GETEMOTIONFACTOR, {
				emotion,
				weather
			}).then((data) => {
				if (data.ok) {
					resolve(data.obj)
				} else {
					reject(data.message)
				}
			}, (error) => {
				reject(error)
			})
		})
	}


	_fetchEmotionIntervene(emotion, grade, factors) {
		return new Promise((resolve, reject) => {
			request.getJson(urls.apis.EMOTION_GETEMOTIONINTERVENE, {
				emotion, grade, factors
			}).then((data) => {
				if (data.ok) {
					resolve(data.obj)
				} else {
					reject(data.message)
				}
			}, (error) => {
				reject(error)
			})
		})
	}


}

const styles = {
	topBox: {
		height: 120,
		flexDirection: "row",
		justifyContent: 'center',
		width: theme.deviceWidth - 30,
		alignItems: 'center'
	},
	puImg: {
		width: theme.deviceWidth * 0.4,
		height: 120,
		marginTop: 10,
	},
	titleBox: {
		width: theme.deviceWidth * 0.4,
		justifyContent: 'center'
	},
	titleDoc: {
		color: '#fff',
		textAlign: 'center',
	},
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
	},

};
