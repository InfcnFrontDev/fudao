import React, {PureComponent} from "react";
import {Modal, TouchableHighlight, View, Text} from "react-native";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Container, Content, Header, HeaderIcon} from "../../components/index";
import {Right} from "native-base";


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
					<Right>
						<HeaderIcon onPress={()=>Actions.search()} name="search"/>
						<HeaderIcon onPress={()=> this._setModalVisible()} name="ios-chatboxes"/>
					</Right>
				}/>

				<Content>
					<Modal
						animationType={"fade"}
						transparent={true}
						visible={this.state.modalVisible}
						onRequestClose={() => {
						}}
					>
						<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 20,
	},
};

const mapStateToProps = state => ({
	...state.user,
	...state.position,
});
export default connect(mapStateToProps)(Home);
