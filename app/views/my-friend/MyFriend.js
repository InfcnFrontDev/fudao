import React, {PureComponent} from "react";
import {ScrollView, View, ToastAndroid} from "react-native";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Container, Content, Header, PullView} from "../../components/index";
import {Button, Icon} from "native-base";
import FriendList from "./components/FriendList";
import {fetchMyFriendsList} from "../../actions/friend";
import {tools} from "../../utils/index";

/**
 * 我的好友
 */
class MyFriend extends PureComponent {

	render() {
		let {isFetching, friendList} = this.props;
		return (
			<Container>
				<Header back {...this.props} rightCmp={
					<Button transparent onPress={() => Actions.searchUser()}>
						<Icon name="add"/>
					</Button>
				}/>
				<Content>
					<PullView isRefreshing={isFetching} onRefresh={this._onRefresh.bind(this)}>
						<FriendList list={friendList}/>
					</PullView>
				</Content>
			</Container>
		)
	}

	componentDidMount() {
		let {dispatch, loginUser, friendList} = this.props;
		if (friendList.length == 0) {
			dispatch(fetchMyFriendsList(loginUser.id));
		}
	}

	_onRefresh() {
		let {loginUser, dispatch} = this.props;
		dispatch(fetchMyFriendsList(loginUser.id, () => {
			tools.toast('刷新成功');
		}));
	}
}

const styles = {}

const mapStateToProps = state => ({
	loginUser: state.userStore.loginUser,
	...state.friendStore,
});
export default connect(mapStateToProps)(MyFriend);
