import React, {PureComponent} from "react";
import {ScrollView, View, RefreshControl} from "react-native";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {Container, Left, Right, Body} from "native-base";
import Header from "../../components/header/BaseHeader";
import Content from "../../components/Content";
import Loading from "../../components/Loading";
import * as Actions from "../../actions/friends";
import FriendList from "./components/FriendList";
import {config} from "../../utils/index";
import PullView from "../../components/PullView";
// import {PullView} from "react-native-pull";

/**
 * 我的好友
 */
class MyFriends extends PureComponent {

	state = {
		isLoading: true
	}

	componentWillMount() {
		this.props.fetchMyFriendsList('86516602126601339963921');
	}

	_onPullRelease(resolve) {

		this.props.fetchMyFriendsList('86516602126601339963921');

		setTimeout(() => {
			resolve();
		}, 5000);
	}

	render() {
		let {isLoading} = this.state;
		let {isFetching, isRefreshing, friendList} = this.props.friends;
		return (
			<Container>
				<Header {...this.props}/>
				<Content>
					{(isLoading || isFetching) ? <Loading/> :
						<PullView onPullRelease={this._onPullRelease.bind(this)}>
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
}

const styles = {}

const mapStateToProps = state => ({
	account: state.account,
	friends: state.friends,
});
const mapDispatchToProps = dispatch => ({
	...bindActionCreators(Actions, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(MyFriends);
