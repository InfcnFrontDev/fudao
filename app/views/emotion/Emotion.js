import React, {PureComponent} from "react";
import {Image,View, DeviceEventEmitter} from "react-native";
import {Right,Text} from "native-base";
import {Container, Content, Header} from "../../components/index";
import EmotionList from "./components/EmotionList";
import EmotionFactorModal from "./components/EmotionFactorModal";
import EmotionSolveModal from "./components/EmotionSolveModal";
import {calm} from "./components/EmotionData";
import {observer} from "mobx-react/native";
import EmotionStore from "../../mobx/emotionStore";
import weatherStore from "../../mobx/weatherStore";

/**
 * 情绪
 */
@observer
export default class Emotion extends PureComponent {
	constructor(props) {
		super(props);
	}

	/**
	 * 一小时后情绪修改为平静， 进入页面时处理
	 */
	componentWillMount() {
		let {myEmotion,updateTime}=EmotionStore;
		if (myEmotion) {
			let currentTime = new Date().getTime();
			if (currentTime - updateTime > 1000 * 60*60) {
				EmotionStore.myEmotion=calm[0]
			}
		}
	}
	render() {
		let myEmotion = EmotionStore.myEmotion;
		if (!myEmotion) {
			myEmotion = calm[0]
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
						<Image style={styles.puImg} source={require('../../assets/emotion/pugongying.png')}/>
						<View tyle={styles.titleBox}>
							<Text style={styles.titleDoc}>不好的情绪影响一天的生活，</Text>
							<Text style={styles.titleDoc}>一起调节一下吧！</Text>
						</View>
					</View>
					<EmotionList onItemPress={this._onItemPress.bind(this)}/>

					<EmotionFactorModal ref={(e)=>this._factorModal = e}
										onSubmit={this._emotionFactorModal_onSubmit.bind(this)}/>

					<EmotionSolveModal ref={(e)=>this._solveModal = e}/>
				</Content>
			</Container>
		)
	}

	async _emotionFactorModal_onSubmit(emotion, selectedGrade, selectedReasons) {
		const result = await this._fetchEmotionIntervene(emotion.title, selectedGrade, selectedReasons);
		this._solveModal.show({
			title: emotion.title,
			img: emotion.img,
			...result
		});
	}

	/**
	 * 单击每个情绪时，修改右上角的当前情绪，并且弹出 情绪干预。
	 * @param item 情绪
	 */
	async _onItemPress(item) {
		// 更新我的情绪

		let updateTime = new Date().getTime();
		EmotionStore.updateMyEmotion(item,updateTime);

		// 解决总是先弹第一个框
		this._factorModal.hide();

		try {
			if (item.grade) {
				const result = await this._fetchEmotionIntervene(item.title, item.grade, []);
				this._solveModal.show({
					title: item.title,
					img: item.img,
					...result
				});
			} else {
				let weather=weatherStore.currentWeather.weather;
				const result = await this._fetchEmotionFactor(item.title, weather);
				this._factorModal.show({
					title: item.title,
					img: item.img,
					...result
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
		color: '#eef0f1',
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
