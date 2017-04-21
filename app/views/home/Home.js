import React, {PureComponent} from "react";
import {observer} from "mobx-react/native";
import {TouchableHighlight, Dimensions, Image} from "react-native";
import {Actions} from "react-native-router-flux";
import {Right, Text, View, Button, Icon} from "native-base";
import {Container, Content, WebView} from "../../components/index";
import MyEnter from "./components/MyEnter.js";
import userStore from "../../mobx/userStore";
import DetailsModal from "./components/DetailsModal";


/**
 * 主页
 */
@observer
export default class Home extends PureComponent {

	state = {
		modalVisible: false,
		wendu: '',
		weather: '',
		img: 'http://api.k780.com:88/upload/weather/d1/2.png'
	};


	render() {
		let {loginUser} = userStore;
		return (
			<Container>
				<Content>
					<WebView
						onMessage={(event)=>this.openDetailsBox(event.nativeEvent.data)}
						uri={urls.pages.HOEM + '?userId=867200022156895,86720002215690393791782&renqun=high_quality_population&location=1&daytype=2&seasonId=1'}
					/>
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
								{/*					<Text style={styles.font}>{this.state.weather}</Text>
								 <Image style={{width:20,height:20}} source={{uri:'http://api.k780.com:88/upload/weather/d1/'+this.state.img+'.png'}}/>*/}
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
									  style={{color: "#fff",  position: 'absolute', right: 10}}/>
							</Button>

							<Button transparent onPress={()=> Actions.message()}>
								<Icon name="ios-chatboxes" style={{color: "#fff"}}/>
								<View
									style={{backgroundColor:'#f00',width:15,height:15,borderRadius:15,paddingTop:1,position:'absolute',right:10,top:0}}>
									<Text style={{color:'#fff',fontSize:10,textAlign:'center'}}>10</Text>
								</View>
							</Button>
						</Right>
					</View>
					<View style={{height:40,borderRadius:40,backgroundColor:'rgba(225,225,225,.0)',position: 'absolute',top:60,left:10,alignItems:'center',flexDirection:'row'}}>
						<Button onPress={this.abc()}>
							<Image source={require('../../assets/home/qiehuan.png')} style={{width:30,height:30}}/>
							<Text style={{color:'#b7b7b7',fontSize:14}}>切换到通用版</Text>
						</Button>

					</View>
					<View style={{width:40,height:40,borderRadius:40,backgroundColor:'rgba(225,225,225,.0)',position: 'absolute',top:300,alignItems:'center',flexDirection:'row'}}>
						<Image source={require('../../assets/home/qingxu.png')} style={styles.image}/>
					 </View>
					 <View style={{width:40,height:40,borderRadius:40,backgroundColor:'rgba(225,225,225,.0)',position: 'absolute',top:300,right:0,alignItems:'center',flexDirection:'row'}}>
						 <Image source={require('../../assets/home/cengliangchang.png')} style={styles.image}/>
					 </View>
					<DetailsModal ref={(e)=>this._groupSelectModal = e}></DetailsModal>
					<View style={{width: Dimensions.get('window').width, height: 102, position: 'absolute', bottom: 0}}>
						<MyEnter />
					</View>
				</Content>
			</Container>
		)
	}
	abc(){
		this.webview.postMessage('"Hello" from React Native!');
	}
	openDetailsBox(data){
		if(data==1)
		this._groupSelectModal.show(data);
	}


	setModalVisible(visible) {
		this.setState({modalVisible: visible});
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
	image:{
		width:40,
		height:40
	}
};
