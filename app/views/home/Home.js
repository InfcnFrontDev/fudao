import React, {PureComponent} from "react";
import {TouchableHighlight, Dimensions,Image} from "react-native";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Right, Item, Text, View, Button, Icon,Badge} from "native-base";
import {Container, Content, Header, WebView, Modal} from "../../components/index";
import MyEnter from "./components/MyEnter.js";
import Headline from "./components/Headline.js";
import {urls, toast,request} from "../../utils/index"


/**
 * 主页
 */
class Home extends PureComponent {

	state = {
		modalVisible: false,
		wendu:'',
		weather:'',
		img:'http://api.k780.com:88/upload/weather/d1/2.png'


	}


	render() {
		let {loginUser} = this.props;

		request.getJson(urls.apis.WEATHER,{city:'北京'}).then((data)=>{
			let a=data.result.weatid-1;


			this.setState({
				wendu:data.result.temperature,
				weather:data.result.weather,
				img:parseInt(data.result.weatid)-1


			})
		})




		return (
			<Container>
				<Content>
					<WebView uri={urls.pages.HOEM + '?userId=867200022156895,86720002215690393791782&renqun=high_quality_population&location=1&daytype=2&seasonId=1'}/>
					<View menu {...this.props} style={{
						width: Dimensions.get('window').width,
						height: 60,
						position: 'absolute',
						top: 0,
						right: 0,
						backgroundColor: 'rgba(225,225,225,0.2)',
						flexDirection: 'row'
					}}>
						<View style={{flexDirection: 'column', justifyContent: 'center'}}>
							<Button transparent onPress={()=> Actions.sideBar()}>
								<Icon name="menu" style={{color: "#fff"}}/>
							</Button>
						</View>
						<View style={{flexDirection: 'column', justifyContent: 'center',width:80}}>
							<Text style={styles.font}>北京.海淀</Text>
							<View style={{flexDirection: 'row',justifyContent:'center'}}>
								<Text style={styles.font}>{this.state.weather}</Text>
								<Image style={{width:20,height:20}} source={{uri:'http://api.k780.com:88/upload/weather/d1/'+this.state.img+'.png'}}/>
							</View>



							<Text style={styles.font}>{this.state.wendu}</Text>
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
									  style={{color: "#fff", alignSelf: 'flex-end', position: 'absolute', right: 10}}/>
							</Button>

							<Button transparent onPress={()=> Actions.message()}>
								<Icon name="ios-chatboxes" style={{color: "#fff"}}/>
								<View style={{backgroundColor:'#f00',width:16,height:16,borderRadius:16,paddingTop:1,position:'absolute',right:10,top:0}}>
									<Text style={{color:'#fff',fontSize:10,textAlign:'center'}}>1</Text>
								</View>
							</Button>
						</Right>
					</View>

					<View style={{width: Dimensions.get('window').width, height: 122, position: 'absolute', bottom: 0}}>
						<MyEnter />
					</View>
				</Content>
			</Container>
		)
	}

	setModalVisible(visible) {
		this.setState({modalVisible: visible});
	}
}

const styles = {
	container: {
		flex: 1,
		backgroundColor: '#ECECF0',
	},
	font: {
		fontSize: 12,
		flexDirection: 'column',
		justifyContent: 'center',
		textAlign: 'center',
		color: '#fff',
	},
	// modal的样式
	modalStyle: {
		// backgroundColor:'#ccc',
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
	},
	// modal上子View的样式
	subView: {
		marginLeft: 60,
		marginRight: 60,
		backgroundColor: '#fff',
		alignSelf: 'stretch',
		justifyContent: 'center',
		borderRadius: 10,
		borderWidth: 0.5,
		borderColor: '#ccc',
	},
	// 标题
	titleText: {
		marginTop: 10,
		marginBottom: 5,
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	// 内容
	contentText: {
		margin: 8,
		fontSize: 14,
		textAlign: 'center',
	},
	// 水平的分割线
	horizontalLine: {
		marginTop: 5,
		height: 0.5,
		backgroundColor: '#ccc',
	},
	// 按钮
	buttonView: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	buttonStyle: {
		flex: 1,
		height: 44,
		alignItems: 'center',
		justifyContent: 'center',
	},
	// 竖直的分割线
	verticalLine: {
		width: 0.5,
		height: 44,
		backgroundColor: '#ccc',
	},
	buttonText: {
		fontSize: 16,
		color: '#3393F2',
		textAlign: 'center',
	},
};

const mapStateToProps = state => ({
	...state.user,
	...state.position,
	loginUser: state.user.loginUser
});
export default connect(mapStateToProps)(Home);
