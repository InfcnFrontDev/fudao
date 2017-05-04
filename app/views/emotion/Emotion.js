import React, {PureComponent} from "react";
import {Image, DeviceEventEmitter,Text} from "react-native";
import {Right, View, } from "native-base";
import {Container, Content, Header, Modal,} from "../../components/index";
import EmotionList from "./components/EmotionList";
import EmotionFactor from "./components/EmotionFactor";
import EmotionModal from "./components/EmotionModal";
import EmotionSolve from "./components/EmotionSolve";
import ImageText from "../components/ImageText";
import VideoText from "../components/VideoText";
import {good, calm, bad} from "./components/EmotionData";

/**
 * 情绪
 */
export default class Emotion extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			modalView: null,
			EmoModal:null,
			FactorModal:null
		}
	}
	render() {
		let {myEmotion} = this.props;
		let {EmoModal} = this.state;
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
				<Content delay padder>
					<View style={styles.topBox}>
						<Image style={styles.puImg} source={require('../../assets/emotion/pugongying.png')}></Image>
						<View tyle={styles.titleBox}>
							<Text style={styles.titleDoc}>不好的情绪影响一天的生活，</Text>
							<Text style={styles.titleDoc}>一起调节一下吧！</Text>
						</View>
					</View>
					<EmotionList onItemPress={this._onItemPress.bind(this)}/>
					{EmoModal}
				</Content>
			</Container>
		)
	}
	/**
	 * 单击每个情绪时，修改右上角的当前情绪，并且弹出 情绪干预。
	 * @param item 情绪
	 */
	_onItemPress(items) {
		// 更新我的情绪
		/*this.props.dispatch(updateMyEmotion(item));*/
			let goods="goods";
			let bads="bads";

			if(items.title=="愉悦"||items.title=="兴奋"||items.title=="兴趣"||items.title=="满足"||items.title=="平静"||items.title=="平淡"){
				request.getJson(urls.apis.EMOTION_GETEMOTIONFACTOR, {
				 	emotion: items.title,
					weather:"晴"
				 }).then((data) => {
				 	let fenji=null;
				 	if (data.ok) {
						if(data.obj.grade.length==1){
						 	fenji="一级";
						 }else if(data.obj.grade.length==2){
						 	fenji="二级";
						 }else if(data.obj.grade.length==3){
						 	fenji="三级";
						 }
						request.getJson(urls.apis.EMOTION_GETEMOTIONINTERVENE, {
							emotion: items.title,
							grade:fenji
						 }).then((data) => {
							this.showModal(data.obj,goods,items.img);
						 })
					 } else {
				 		tools.showToast('这种心情，我没办法了');
					}
				 },(error)=>{

				})

			}else{
				request.getJson(urls.apis.EMOTION_GETEMOTIONFACTOR, {
				 	emotion:items.title,
					weather:"阴"
				 }).then((data) => {
				 	if (data.ok) {
						this.showModal(data.obj,bads,items.img);
					 } else {
				 		toast.show('这种心情，我没办法了');
				 	}
				 },(error)=>{

				})
			}
	}
	showModal(data,id,img) {

		let Emotion=(null);
		/*<EmotionModal ref={(e)=>this._modal = e}>
			{/!*<EmotionSolve data={data}></EmotionSolve>*!/}
		</EmotionModal>*/
		if(id=="bads"){
			Emotion=(
				<Modal ref={(e)=>this._modal = e}>
					<EmotionFactor data={data} emotionImg={img}></EmotionFactor>
				</Modal>
			)
		}else{
			Emotion=(
				<EmotionModal ref={(e)=>this._modal = e}>
					<EmotionSolve data={data} emotionImg={img}></EmotionSolve>
				</EmotionModal>
			)
		}
		this.setState({
			EmoModal:Emotion
		});
		this._modal.show();
	}
}

const styles = {
	topBox:{
		height:120,
		flexDirection:"row",
		justifyContent:'center',
		width: theme.deviceWidth - 30,
		alignItems:'center'
	},
	puImg:{
		width:theme.deviceWidth*0.4,
		height:120,
		marginTop:10,
	},
	titleBox:{
		width:theme.deviceWidth*0.4,
		justifyContent:'center'
	},
	titleDoc:{
		color:'#fff',
		textAlign:'center',
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
