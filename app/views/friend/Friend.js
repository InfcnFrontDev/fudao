import React, {PureComponent} from "react";
import {ScrollView, View, ToastAndroid} from "react-native";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Container, Content, Header, List, PullView} from "../../components/index";
import {Left, Body, Right, ListItem, Button, Icon, Text} from "native-base";
import FriendList from "./components/FriendList";
import friendStore from "../../mobx/friendStore";
/*import {fetchMyFriendList} from "../../actions/friend";
import {toast} from "../../utils/index";*/

/**
 * 好友列表
 */
export default class Friend extends PureComponent {

	render() {
		const {isFetching, MyFriendList} = friendStore;
		//let {isFetching, friendList} = this.props;
		return (
			<Container>
				<Header {...this.props} right={
					<Right>
						<Button transparent onPress={()=>Actions.searchUser()}><Icon name="add"/></Button>
					</Right>
				}/>
				<Content gray delay>
					<PullView isRefreshing={isFetching} onRefresh={this._onRefresh.bind(this)}>
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
						<FriendList list={MyFriendList}/>
					</PullView>
				</Content>
			</Container>
		)
	}

	/*componentDidMount() {
		let {dispatch, loginUser, friendList} = this.props;
		//dispatch(fetchMyFriendList(loginUser.appid));
	}*/

	_onRefresh() {
		let {loginUser, dispatch} = this.props;
		dispatch(fetchMyFriendList(loginUser.appid, (success) => {
			if (success) {
				toast.show('刷新成功');
			} else {
				toast.show('刷新失败');
			}
		}));
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
