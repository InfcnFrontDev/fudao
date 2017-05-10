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
			EmoModal:null,
			FactorModal:null,
		}
	}
	/**
	 * 一小时后情绪修改为平静， 进入页面时处理
	 */
	componentWillMount() {
		let {myEmotion,updateTime}=EmotionStore;
		if (myEmotion) {
			let currentTime = new Date().getTime();
			if (currentTime - updateTime > 1000 * 60 * 60) {
				EmotionStore.updateMyEmotion(calm[0]);
			}
			this.setState({
				myEmotion:myEmotion
			})
		}
	}
	render() {
		let {EmoModal} = this.state;
		let myEmotion=EmotionStore.myEmotion;
		if(!myEmotion){
			myEmotion=calm[0]
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
		let updateTime = new Date().getTime();
		EmotionStore.updateMyEmotion(items);
		EmotionStore.updateMyTime(updateTime);
		tools.showToast("点击")
			let goods="goods";
			let bads="bads";
			if(items.title=="愉悦"||items.title=="兴奋"||items.title=="兴趣"||items.title=="满足"||items.title=="平静"||items.title=="平淡"){
				tools.showToast(items.title);
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
						EmotionStore.getEmotionIntervene({emotion: items,grade:fenji,word:goods,img:items.img},this.showModal)
					 } else {
				 		tools.showToast('这种心情，我没办法了');
					}
				 },(error)=>{

				})

			}else{
			let data={
			 "obj": {
			 "emotion": "沮丧",
			 "reasons": [
			 "有长期不明原因的疲劳感",
			 "患有季节性疾患",
			 "肥胖给自己的生活带来烦扰",
			 "记忆力较差",
			 "最近总是担心自己生了大病",
			 "睡眠不规律",
			 "每周晚间12点后入睡的次数2次及以上",
			 "睡眠时长小于7小时",
			 "醒后感觉精力不能恢复",
			 "最近失眠",
			 "近期食欲不好",
			 "最近的体检报告中有不合格的项目",
			 "对目的居住条件不满意",
			 "对目前的财务收入状况不满意",
			 "财务管理方式为基金或股票",
			 "平时几乎不进行任何休闲娱乐活动",
			 "平时经常感觉无所事事",
			 "不喜欢现在的工作氛围",
			 "现在工作不能实现自己的价值",
			 "认为组织激励机制是不公平的",
			 "对自己的外貌不满意",
			 "对自己的身材不满意",
			 "对自己的体重不满意",
			 "感觉自己受到不公平的待遇",
			 "经常责怪自己",
			 "感觉自己不如别人",
			 "感觉别人拥有自己没有的",
			 "认为自己还未做出足够的努力",
			 "很难接纳自己的缺点",
			 "担心别人指出自己的缺点或过错",
			 "通常情况下感觉自己没有受到尊重",
			 "与配偶/伴侣经常吵架",
			 "遇到困难时没有可以倾诉的朋友",
			 "近期发生令人担忧的生活事件"
			 ],
			 "grade": [
			 {
			 "name": "一级",
			 "title": "沮丧"
			 },
			 {
			 "name": "二级",
			 "title": "悲伤"
			 },
			 {
			 "name": "三级",
			 "title": "悲痛"
			 }
			 ],
			 "macroscopic": [
			 {
			 "img": "/emotion/macro/rizhao.png",
			 "name": "阴"
			 }
			 ]
			 },
			 "ok": true
			 }
			 if(data.obj){
                 this.showModal(data.obj,bads,items.img);
             }

				/*request.getJson(urls.apis.EMOTION_GETEMOTIONFACTOR, {
				 	emotion:items.title,
					weather:"阴"
				 }).then((data) => {
				 	if (data.ok) {
						this.showModal(data.obj,bads,items.img);
					 } else {
				 		toast.show('这种心情，我没办法了');
				 	}
				 },(error)=>{

				})*/
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
			);
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
