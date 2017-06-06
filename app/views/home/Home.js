import React, {PureComponent} from "react";
import {observer} from "mobx-react/native";
import {TouchableHighlight, Dimensions, Image, WebView, Alert} from "react-native";
import {Actions} from "react-native-router-flux";
import {Right, Text, View, Button, Icon} from "native-base";
import {Container, Content} from "../../components/index";
import MyEnter from "./components/MyEnter.js";
import userStore from "../../mobx/userStore";
import DetailsModal from "./components/DetailsModal";
import TimeModal from "./components/TimeModal";
import YunDongModal from "./components/YunDongModal";
import weatherStore from "../../mobx/weatherStore";
import positionStore from "../../mobx/positionStore";


/**
 * 主页
 */
@observer
export default class Home extends PureComponent {

	state = {
		modalVisible: false,
		wendu: '',
		weather: '',
		img: '1',
		status: true
	};

	render() {
		let {loginUser} = userStore;
		let {currentPosition} = positionStore;
		let {currentWeather} = weatherStore;

		let imgStr = 'http://api.k780.com:88/upload/weather/d1/' + (currentWeather.weatid - 1) + '.png'
		let leftBtnStyle = Object.assign({}, styles.floatBtn, styles.leftBtn),
			rightBtnStyle = Object.assign({}, styles.floatBtn, styles.rightBtn);
		return (
			<Container isTabPanel>
				<View menu {...this.props} style={{
					width: Dimensions.get('window').width,
					height: 60,
					backgroundColor: 'rgba(225,225,225,0.2)',
					flexDirection: 'row',
				}}>
					<View style={{flexDirection: 'column', justifyContent: 'center'}}>
						<Button transparent onPress={()=> Actions.sideBar()}>
							<Icon name="menu" style={{color: "#fff"}}/>
						</Button>
					</View>
					<View style={{flexDirection: 'column', justifyContent: 'center',width:80}}>
						<Text style={styles.font}>{currentPosition.city}</Text>
						<View style={{flexDirection: 'row',justifyContent:'center'}}>
							<Text style={styles.font}>{currentWeather.weather}</Text>
							<Image style={{width:20,height:20}} source={{uri:imgStr}}/>
						</View>
						<Text style={styles.font}>{currentWeather.temperature}</Text>
					</View>
					<Right style={{flexDirection: 'row'}}>

						<Button style={{
							height: 26,
							borderRadius: 30,
							backgroundColor: 'rgba(125,130,144,0.3)',
							marginBottom: 10,
							flexDirection: 'column',
							width: Dimensions.get('window').width / 2 - 30,
							flex: 0
						}}
								transparent
								onPress={()=>Actions.search()}>
							<Icon name="search"
								  style={{color: "#fff",  position: 'absolute', right: 10}}/>
						</Button>
						<Button transparent onPress={()=> Actions.feedback()}>
							<Icon name="ios-chatboxes" style={{color: "#fff"}}/>
						</Button>
					</Right>
				</View>
				<Content>

					<WebView
						source={{uri:urls.pages.HOME + '?status='+this.state.status+'&token='+userStore.token}}
						onMessage={(event)=>this.openDetailsBox(event.nativeEvent.data)}
						style={{backgroundColor:'rgba(0,0,0,.0)'}}
					/>

					<View
						style={{height:40,borderRadius:40,backgroundColor:'rgba(225,225,225,.0)',position: 'absolute',top:0,left:0,alignItems:'center',flexDirection:'row'}}>
						<Button transparent style={{backgroundColor:'rgba(225,225,225,.0)'}}
								onPress={()=>this.changeStatus()}>
							<Image source={require('../../assets/home/qiehuan.png')} style={{width:20,height:20}}/>
							<Text style={{color:'#b7b7b7',fontSize:14}}>{this.state.status ? '切换到个人版' : '切换到通用版'}</Text>
						</Button>

					</View>

					<Button transparent style={leftBtnStyle} onPress={()=> Actions.emotion()}>
						<Image source={require('../../assets/home/qingxu.png')} style={styles.image}/>
					</Button>
					<Button transparent style={rightBtnStyle} onPress={()=> Actions.energy()}>
						<Image source={require('../../assets/home/cengliangchang.png')} style={styles.image}/>
					</Button>
					<DetailsModal ref={(e)=>this._groupSelectModal = e}/>
					<TimeModal ref={(e)=>this._TimeModal = e}/>
					<YunDongModal ref={(e)=>this._YunDongModal = e}/>

				</Content>
				<View style={{width: Dimensions.get('window').width, height: 107,}}>
					<MyEnter />
				</View>
			</Container>
		)
	}

	changeStatus() {
		this.setState({
			status: !this.state.status
		})
	}

	openDetailsBox(data) {
		//alert(data.substring(0,4));
		if (data == '修改时间') {
			this._TimeModal.show(data);
		} else if (data.substring(0, 4) == '获取运动') {
			this._YunDongModal.show(data.substring(4, data.length));
		} else {
			this._groupSelectModal.show(data);
		}

	}

	setModalVisible(visible) {
		this.setState({modalVisible: visible});
	}

	componentDidMount() {

		// 获取当前位置
		positionStore.fetchCurrentPosition((position) => {
			weatherStore.fetchCurrentWeather(position.city);
		});
	}
}

const styles = {
	font: {
		fontSize: 12,
		flexDirection: 'column',
		justifyContent: 'center',
		textAlign: 'center',
		color: '#fff',
	},
	floatBtn:{
		width: 35,
		height: 35,
		position: 'absolute',
		backgroundColor:'rgba(0,0,0,.0)',
		alignItems: 'center',
		justifyContent: 'center'
	},
	rightBtn:{
		right:0,
		top: 60
	},
	leftBtn:{
		left:0,
		top: 300
	},
	image:{
		width:35,
		height:35
	},
	back:{
		marginRight:20
	},
};
