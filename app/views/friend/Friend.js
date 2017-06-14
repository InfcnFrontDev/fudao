import React, {PureComponent} from "react";
import {ScrollView, View, ToastAndroid} from "react-native";
import {observer} from "mobx-react/native";
import {Actions} from "react-native-router-flux";
import {Container, Content, Header, List, PullView,Loading} from "../../components/index";
import {Left, Body, Right, ListItem, Button, Icon, Text} from "native-base";
import FriendList from "./components/FriendList";
import friendStore from "../../mobx/friendStore";

/*import {fetchMyFriendList} from "../../actions/friend";
import {toast} from "../../utils/index";*/

/**
 * 好友列表
 */
@observer
export default class Friend extends PureComponent {

	componentDidMount() {
		friendStore.fetchMyFriendList();
	}

	render() {
		const {isFetching, MyFriendList} = friendStore;
		return (
			<Container>
				<Header {...this.props} right={
					<Right>
						<Button transparent onPress={()=>Actions.barcodescanner()}><Icon name="add"/></Button>
					</Right>
				}/>
				<Content gray delay>

					<PullView isRefreshing={false} onRefresh={this._onRefresh.bind(this)}>
						<List>
							<ListItem icon last style={{height: 55}} onPress={() => Actions.newFriend()}>
								<Left>
									<View style={styles.iconView}>
										<Icon name="person-add" style={styles.icon}/>
									</View>
								</Left>
								<Body>
								<Text>新朋友</Text>
								</Body>
								<Right>
								</Right>
							</ListItem>
						</List>
						<List>
							<ListItem icon last style={{height: 55}} onPress={() => Actions.qrcode()}>
								<Body>
								<Text>我的二维码</Text>
								</Body>
								<Right style={{justifyContent:'center'}}>
									<Icon name="ios-arrow-forward"/>
								</Right>
							</ListItem>
						</List>
						<FriendList list={MyFriendList}/>
					</PullView>


			</Content>
			</Container>
		)
	}



	_onRefresh() {
		friendStore.fetchMyFriendList();
		ToastAndroid.show('刷新成功', ToastAndroid.SHORT);
	}

}

const styles = {
	iconView: {
		backgroundColor: '#F99D3A',
		marginLeft: 0,
		width: 40,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center'
	},
	icon: {
		fontSize: 24,
		color: '#FFFFFF'
	}
}

const mapStateToProps = state => ({
	loginUser: state.user.loginUser,
	...state.friend,
});
