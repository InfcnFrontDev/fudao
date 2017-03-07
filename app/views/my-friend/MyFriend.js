import React, {PureComponent} from "react";
import {ScrollView, View, ToastAndroid} from "react-native";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Container, Content, PullView} from "../../components/index";
import Header from "../../components/header/BaseHeader";
import FriendList from "./components/FriendList";
import * as Actions from "../../actions/friend";

/**
 * 我的好友
 */
class MyFriend extends PureComponent {

	render() {
		let {isFetching, friendList} = this.props.friend;
		return (
			<Container>
				<Header {...this.props}/>
				<Content>
					<PullView isRefreshing={isFetching} onRefresh={this._onRefresh.bind(this)}>
						<FriendList list={friendList}/>
					</PullView>
				</Content>
			</Container>
		)
	}

	componentDidMount() {
		let {userInfo, fetchMyFriendsList, friend} = this.props;
		if (friend.friendList.length == 0) {
			fetchMyFriendsList(userInfo.id);
		}
	}

	_onRefresh() {
		let {userInfo, fetchMyFriendsList} = this.props;
		fetchMyFriendsList(userInfo.id, () => {
			ToastAndroid.show('刷新成功', ToastAndroid.SHORT);
		});
	}
}

const styles = {}

const mapStateToProps = state => ({
	userInfo: state.user.userInfo,
	friend: state.friend,
});
const mapDispatchToProps = dispatch => ({
	...bindActionCreators(Actions, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(MyFriend);
