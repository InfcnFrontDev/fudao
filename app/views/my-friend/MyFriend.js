import React, {PureComponent} from "react";
import {ScrollView, View, ToastAndroid} from "react-native";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Container, Left, Right, Body} from "native-base";
import Header from "../../components/header/BaseHeader";
import Content from "../../components/Content";
import Loading from "../../components/Loading";
import PullView from "../../components/PullView";
import FriendList from "./components/FriendList";
import * as Actions from "../../actions/friend";
import {config} from "../../utils/index";

/**
 * 我的好友
 */
class MyFriend extends PureComponent {

	state = {
		isLoading: true
	}

	componentWillMount() {
		let {userInfo, fetchMyFriendsList} = this.props;
		fetchMyFriendsList(userInfo.id)
	}

	render() {
		let {isLoading} = this.state;
		let {isFetching, friendList} = this.props.friend;
		return (
			<Container>
				<Header {...this.props}/>
				<Content>
					{(isLoading) ? <Loading/> :
						<PullView isRefreshing={isFetching} onRefresh={this._onRefresh.bind(this)}>
							<FriendList list={friendList}/>
						</PullView>
					}
				</Content>
			</Container>
		)
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({isLoading: false});
		}, config.loadingDelayTime);
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
