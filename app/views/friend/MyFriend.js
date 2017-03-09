import React, {PureComponent} from "react";
import {ScrollView, View, ToastAndroid} from "react-native";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Container, Content, Header, List, PullView, HeaderIcon, HeaderButton} from "../../components/index";
import {Left, Body, Right, ListItem, Item,Button, Icon, Text} from "native-base";
import FriendList from "./components/FriendList";
import {fetchMyFriendsList} from "../../actions/friend";
import {toast} from "../../utils/index";

/**
 * 我的好友
 */
class MyFriend extends PureComponent {

	render() {
		let {isFetching, friendList} = this.props;
		return (
			<Container>
				<Header back {...this.props} right={
					<View style={{flexDirection:'row',justifyContent:'flex-start'}}>
						<HeaderIcon iconName="add" onPress={() => Actions.searchUser()}/>
					</View>
				}/>
				<Content>
					<PullView isRefreshing={isFetching} onRefresh={this._onRefresh.bind(this)}>
						<List>
							<ListItem icon last style={{height: 55}}>
								<Left style={{paddingRight: 8}}>
									<View style={styles.iconView}>
										<Icon name="person-add" style={styles.icon}/>
									</View>
								</Left>
								<Body>
								<Text style={{fontSize: 14}}>新朋友</Text>
								</Body>
								<Right>
								</Right>
							</ListItem>
						</List>
						<FriendList list={friendList}/>
					</PullView>
				</Content>
			</Container>
		)
	}

	componentDidMount() {
		let {dispatch, loginUser, friendList} = this.props;
		dispatch(fetchMyFriendsList(loginUser.id));
	}

	_onRefresh() {
		let {loginUser, dispatch} = this.props;
		dispatch(fetchMyFriendsList(loginUser.id, () => {
			toast.show('刷新成功');
		}));
	}
}

const styles = {
	iconView: {
		backgroundColor: '#F99D3A',
		marginLeft: 7,
		width: 36,
		height: 36,
		alignItems: 'center',
		justifyContent: 'center'
	},
	icon: {
		fontSize: 24,
		color: '#FFFFFF'
	}
}

const mapStateToProps = state => ({
	loginUser: state.userStore.loginUser,
	...state.friendStore,
});
export default connect(mapStateToProps)(MyFriend);
