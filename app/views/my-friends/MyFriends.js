import React, {PureComponent} from "react";
import {View} from "react-native";
import {connect} from "react-redux";
import {Container, Left, Right, Body} from "native-base";
import Header from "../../components/header/BaseHeader";
import Content from "../../components/Content";
import Loading from "../../components/Loading";
import {fetchMyFriendsList} from "../../actions/friends";
import FriendList from "./components/FriendList";
import {config} from "../../utils/index";
import {PullView} from "react-native-pullview";

/**
 * 我的好友
 */
class MyFriends extends PureComponent {

	state = {
		isLoading: true
	}

	componentWillMount() {
		this.props.dispatch(fetchMyFriendsList('86516602126601339963921'));
	}

	onPullRelease(resolve) {

		this.props.dispatch(fetchMyFriendsList('86516602126601339963921'));

		setTimeout(() => {
			//resolve();
		}, 2000);
	}

	render() {
		let {isLoading} = this.state;
		let {isFetching, friendList} = this.props.friends;
		return (
			<Container>
				<Header {...this.props}/>
				<Content>
					{(isLoading || isFetching) ? <Loading/> :
						<PullView onPullRelease={this.onPullRelease.bind(this)}>
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
export default connect(mapStateToProps)(MyFriends);
