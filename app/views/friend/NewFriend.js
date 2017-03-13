import React, {PureComponent} from "react";
import {ScrollView, View, ToastAndroid} from "react-native";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Container, Content, Header, List, Separator, PullView} from "../../components/index";
import {Left, Body, Right, ListItem, Thumbnail, Text, Button} from "native-base";
import {fetchNewFriendList} from "../../actions/friend";
import {toast, config} from "../../utils/index";

/**
 * 新朋友（加好友申请列表）
 */
class NewFriend extends PureComponent {

	render() {
		let {isFetching, newFriendList} = this.props,
			count = newFriendList.length;
		return (
			<Container>
				<Header back {...this.props}/>
				<Content gray>
					<PullView isRefreshing={isFetching} onRefresh={this._onRefresh.bind(this)}>
						<Separator title="新的朋友"/>
						<List containerStyle={styles.list}>
							{newFriendList.map((f, i) => (
								<ListItem avatar key={i}>
									<Left>
										<Thumbnail style={{width: 40, height: 40}} square
												   source={{uri:'http://touxiang.qqzhi.com/uploads/2012-11/1111032758936.jpg'}}/>
									</Left>
									<Body>
									<Text>{f.friendNick}</Text>
									<Text note>{f.tip}</Text>
									</Body>
									<Right style={{justifyContent:'center'}}>
										{f.state == 0 ?
											<Button small onPress={() => Actions.agreeFriendApply({friend:f})}>
												<Text>接受</Text>
											</Button> :
											<Text note>已添加</Text>}
									</Right>
								</ListItem>
							))}
						</List>
						<View style={{alignItems:'center', padding:15}}>
							<Text>{count == 0 ? '没有新好友' : count + '位新好友'}</Text>
						</View>
					</PullView>
				</Content>
			</Container>
		)
	}

	componentDidMount() {
		let {dispatch, loginUser} = this.props;
		setTimeout(() => {
			dispatch(fetchNewFriendList(loginUser.appid));
		}, config.loadingDelayTime)
	}

	_onRefresh() {
		let {loginUser, dispatch} = this.props;
		dispatch(fetchNewFriendList(loginUser.appid, (success) => {
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
export default connect(mapStateToProps)(NewFriend);