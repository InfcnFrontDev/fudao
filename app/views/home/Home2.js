import React, {PureComponent} from "react";
import {Modal, TouchableHighlight} from "react-native";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Text, View} from "native-base";
import {Container, Content, Header, HeaderIcon} from "../../components/index";
import MyEnter from "./components/MyEnter.js";
import Headline from "./components/Headline.js";


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
				<Header menu {...this.props} right={
					<View style={{flexDirection: 'row'}}>
						<HeaderIcon onPress={()=>Actions.search()} name="search"/>
						<HeaderIcon onPress={()=> this._setModalVisible()} name="ios-chatboxes"/>
					</View>
				}/>

				<Content style={styles.content}>
					<Headline />
					<MyEnter />
					<View>
						<Text>
							<Text style={styles.title}>Current position: </Text>
							{JSON.stringify(this.props.lastPosition)}
						</Text>
					</View>
					<Modal
						animationType={"slide"}
						transparent={false}
						visible={this.state.modalVisible}
						onRequestClose={() => alert("Modal has been closed.")}>
						<View style={{marginTop: 22}}>
							<View>
								<Text>Hello World!</Text>
								<TouchableHighlight onPress={() => this.setModalVisible(!this.state.modalVisible)}>
									<Text>Hide Modal</Text>
								</TouchableHighlight>
							</View>
						</View>
					</Modal>
					<TouchableHighlight onPress={() => this.setModalVisible(true)}>
						<Text>Show Modal</Text>
					</TouchableHighlight>
				</Content>
			</Container>
		)
	}

	setModalVisible(visible) {
		this.setState({modalVisible: visible});
	}
}

const styles = {
	content: {
		backgroundColor: '#fff'
	},
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
