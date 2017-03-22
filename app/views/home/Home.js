import React, {PureComponent} from "react";
import {Modal, TouchableHighlight,Dimensions} from "react-native";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Right, Text, View, Button, Icon} from "native-base";
import {Container, Content, Header,WebView} from "../../components/index";
import MyEnter from "./components/MyEnter.js";
import Headline from "./components/Headline.js";
import {urls} from "../../utils/index"


/**
 * 主页
 */
class Home extends PureComponent {

	state = {
		modalVisible: false
	}

	render() {
		return (
			<Container>
				

				<Content>

					
					<WebView uri={urls.pages.HOEM}>

					</WebView>
					<View style={{width:Dimensions.get('window').width,
					height:80,
					position:'absolute',
					top:0,
					right:0
				}}>
						<Header style={{backgroundColor:'rgba(225,225,225,0.3)',color:'#000'}} menu {...this.props} right={
							<Right>
								<Button transparent onPress={()=>Actions.search()}><Icon name="search"/></Button>
								<Button transparent onPress={()=> this._setModalVisible()}><Icon name="ios-chatboxes"/></Button>
							</Right>
						}/>
					</View>
					<View style={{width:Dimensions.get('window').width,height:122,position:'absolute',bottom:0}}>
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
});
export default connect(mapStateToProps)(Home);
