import React, {PureComponent} from "react";
import {View, Image, DeviceEventEmitter,Modal} from "react-native";
import {Icon, Button, ListItem, Text} from "native-base";
import {connect} from "react-redux";
import {Container, Header, Content} from "../../components/index";
import {theme,toast} from "../../utils/index";
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
/**
 * 我的能量场 > 问题调查
 */
const questions=[
		{
			answerA: "没有",
			answerB: "偶尔",
			answerC: "有时",
			answerD: "经常",
			answerE: "总是",
			asnwerAScore: 5,
			asnwerBScore: 4,
			asnwerCScore: 3,
			asnwerDScore: 2,
			asnwerEScore: 1,
			id: "d7e3874d-362e-47e4-a003-080321b849d1",
			num: 44,
			question: "便秘",
			rows: 10,
			type: 1
		},
		 {
			answerA: "没有1",
			answerB: "偶尔1",
			answerC: "有时1",
			answerD: "经常1",
			answerE: "总是1",
			asnwerAScore: 5,
			asnwerBScore: 4,
			asnwerCScore: 3,
			asnwerDScore: 2,
			asnwerEScore: 1,
			id: "f8ab672c-3f81-4e85-83cb-2d92f4b44572",
			num: 45,
			question: "盗汗或多汗",
			rows: 10,
			type: 1
		},
		{
			answerA: "没有",
			answerB: "偶尔",
			answerC: "有时",
			answerD: "经常",
			answerE: "总是",
			asnwerAScore: 5,
			asnwerBScore: 4,
			asnwerCScore: 3,
			asnwerDScore: 2,
			asnwerEScore: 1,
			id: "33f26b4b-43f6-415f-96d4-15424db22cdf",
			num: 46,
			question: "恶心或反酸",
			rows: 10,
			type: 1
		},
		{
			answerA: "没有",
			answerB: "偶尔",
			answerC: "有时",
			answerD: "经常",
			answerE: "总是",
			asnwerAScore: 5,
			asnwerBScore: 4,
			asnwerCScore: 3,
			asnwerDScore: 2,
			asnwerEScore: 1,
			id: "30dec745-5a2a-4ec1-bd83-0d391a56b345",
			num: 47,
			question: "腹泻或腹痛",
			rows: 10,
			type: 1
		},
		{
			answerA: "没有",
			answerB: "偶尔",
			answerC: "有时",
			answerD: "经常",
			answerE: "总是",
			asnwerAScore: 5,
			asnwerBScore: 4,
			asnwerCScore: 3,
			asnwerDScore: 2,
			asnwerEScore: 1,
			id: "1d11c218-9679-4d01-bda2-279d22cfa07c",
			num: 48,
			question: "明显的关节痛",
			rows: 10,
			type: 1
		},
		{
			answerA: "没有",
			answerB: "偶尔",
			answerC: "有时",
			answerD: "经常",
			answerE: "总是",
			asnwerAScore: 5,
			asnwerBScore: 4,
			asnwerCScore: 3,
			asnwerDScore: 2,
			asnwerEScore: 1,
			id: "63d7981c-b9c5-4366-95c7-8cd9b39f9223",
			num: 49,
			question: "明显的咳嗽、咳痰",
			rows: 10,
			type: 1
		}];

class EnergyQuestionnaire extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
			questions:questions,
			index:0,
			btnDown:false,
			btnUp:true,
		}
	}
	render() {
		let {visible,questions,index,btnUp} = this.state;
		return (
			<Container>
				<Header {...this.props} />
				<Content>
					<View style={styles.content}>
						<View  style={styles.header}>
							<Text style={styles.headerText}>{index+1  +'.    '+questions[index].question}</Text>
						</View>
						<View  style={styles.chooseBox}>
							<RadioGroup
								key={index}
								onSelect = {(index,value) => this.onSelect(index, value)}
								 >
								<RadioButton value={questions[index].answerA}>
									<Text>    {questions[index].answerA}</Text>
								</RadioButton>
								<RadioButton value={questions[index].answerB}>
									<Text>    {questions[index].answerB}</Text>
								</RadioButton>
								<RadioButton  value={questions[index].answerC}>
									<Text>    {questions[index].answerC}</Text>
								</RadioButton>
								<RadioButton  value={questions[index].answerD}>
									<Text>    {questions[index].answerD}</Text>
								</RadioButton>
								<RadioButton value={questions[index].answerE}>
									<Text>    {questions[index].answerE}</Text>
								</RadioButton>
							</RadioGroup>
						</View>
						<View  style={styles.upBtn}>
							<Button disabled={this.state.btnUp} style={{paddingLeft:30,paddingRight:30,height:30}} onPress={this._btnUp.bind(this,index)}>
								<Text>上一题</Text>
							</Button>
							<Button disabled={this.state.btnDown} style={{paddingLeft:30,paddingRight:30,height:30}} onPress={this._btnDown.bind(this,index)}>
								<Text>下一题</Text>
							</Button>
						</View>
						<View  style={styles.out}>
							<Button style={{paddingLeft:60,paddingRight:60,height:30}} onPress={this.showModal.bind(this)}>
								<Text>退出</Text>
							</Button>
						</View>
					</View>
				</Content>
				<Modal
					animationType={'fade'}
					transparent={true}
					visible={visible}
					onRequestClose={() => this.hide()}
				>
					<View style={styles.opacityView}>
						<View style={styles.contentModal}>
							<Text style={styles.headerText1}>您尚未完成调查问卷，是否需要保存后退出</Text>
							<View  style={styles.outBtn}>
								<Button style={{paddingLeft:20,paddingRight:20,height:30}} onPress={this._out.bind(this)}>
									<Text>保存退出</Text>
								</Button>
								<Button style={{paddingLeft:30,paddingRight:30,height:30}} onPress={this._cancel.bind(this)}>
									<Text>取消</Text>
								</Button>
							</View>
							</View>
						</View>
				</Modal>
			</Container>
		)
	}
	// 弹框
	showModal(){
		this.setState({
			visible:true,
		})
	}
	_cancel(){
		this.setState({
			visible:false,
		})
	}
	_out(){
		this.setState({
			visible:false,
		});
		//保存数据，并退出问卷调查
		//....
	}
	_btnUp(index){
		let ind=index;
		ind--;
		if(ind!=questions.length-1){
			this.setState({
				btnDown:false
			})
		}
		this.setState({
			index:ind,
		})
		if(ind==0){
			this.setState({
				btnUp:true,
			})
		}else{
			this.setState({
				btnUp:false,
			})
		}

	}
	_btnDown(index){
		let ind=index;
		ind++;
		this.setState({
			index:ind,
		});
		if(ind!=0){
			this.setState({
				btnUp:false
			})
		}
		if(ind==questions.length-1){
			this.setState({
				btnDown:true,
			})
		}else{
			this.setState({
				btnDown:false,
			})
		}
	}
	onSelect(index, value){
		toast.show(JSON.stringify(value))

	}
}


const styles = {
	opacityView: {
		flex: 1,
		backgroundColor:'rgba(0,0,0,0.7)',
		justifyContent:'center',
		alignItems:'center',
	},
	contentModal: {
		backgroundColor: '#fff',
		width:theme.deviceWidth*0.9,
		flexDirection: 'column',
		height:150,
		padding:20,
		borderRadius:5,
	},
	content: {
		flex:1,
		backgroundColor: '#fff',
		flexDirection: 'column',
		padding:30,
	},
	header: {
		paddingLeft: 10,
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 6,
		borderBottomWidth: theme.borderWidth,
		borderBottomColor: theme.listBorderColor,
		flexDirection: 'row',
	},
	headerText: {
		fontSize: theme.DefaultFontSize
	},
	headerText1: {
		marginTop:20,
		fontSize: theme.DefaultFontSize-1,
		textAlign:'center',
	},
	chooseBox: {
		padding:30
	},
	upBtn:{
		flexDirection:'row',
		justifyContent:'space-between'
	},
	out:{
		flex:1,
		position:'absolute',
		bottom:30,
		left:0,
		right:0,
		flexDirection:'row',
		justifyContent:'center',
	},
	outBtn:{
		marginTop:50,
		flexDirection:'row',
		justifyContent:'space-between',
	}
};

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(EnergyQuestionnaire);
