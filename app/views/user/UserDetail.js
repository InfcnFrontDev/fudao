import React, {PureComponent} from "react";
import {Alert} from "react-native";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Container, Header, Content, List, Separator} from "../../components/index";
import {Body, Left, Right, ListItem, Text, Button, Thumbnail, Icon, View} from "native-base";
import {showLoading, hideLoading} from "../../actions/loading";
import {fetchMyFriendList} from "../../actions/friend";
import {request, urls, toast} from "../../utils/index";

/**
 * 用户详情
 */
class UserDetail extends PureComponent {

	state = {
		user: null
	}

	render() {
		let {user}  = this.state;
		let {friendNickMap} = this.props;
		return (
			<Container>
				<Header {...this.props}/>

				<Content gray>{user ?
					<View>
						<Separator/>
						<List>
							<ListItem avatar last>
								<Left>
									<Thumbnail square
											   source={{uri: urls.getImage(user.img, 50, 50)}}/>
								</Left>
								<Body>
								<Text>
									{friendNickMap[user.appid] || user.title}
									&nbsp;
									{user.sex == '1' ? <Icon name="ios-man" style={styles.manIcon}/> :
										<Icon name="ios-woman" style={styles.womanIcon}/>}
								</Text>
								<Text note style={{paddingBottom: 20}}>
									{friendNickMap[user.appid] ? '昵称：' + user.title : ''}
								</Text>
								</Body>
								<Right>
								</Right>
							</ListItem>
						</List>
						<Separator/>
						<List>
							<ListItem last>
								<Body>
								<Text>设置备注和标签</Text>
								</Body>
								<Right>
								</Right>
							</ListItem>
						</List>
						<Separator/>
						{this.renderButtons()}
					</View> : null}
				</Content>
			</Container>
		);
	}

	renderButtons() {
		let {loginUser, friendNickMap} = this.props,
			{user} = this.state;

		if (loginUser.appid === user.appid) {// 自己

			return null;
		} else if (friendNickMap[user.appid]) {// 好友
			return (
				<Button danger block style={styles.button} onPress={this._deleteFriend.bind(this)}>
					<Text>删除该好友</Text>
				</Button>
			);
		} else {// 陌生人
			return (
				<Button block style={styles.button} onPress={this._addFriend.bind(this)}>
					<Text>添加到我的好友</Text>
				</Button>
			)
		}
	}

	componentDidMount() {
		let {dispatch, userId} = this.props;

		// 获取用户信息
		dispatch(showLoading());
		request.getJson(urls.apis.USER_DETAIL, {
			userId
		}).then((result) => {
			dispatch(hideLoading());
			if (result.success) {
				let user = Object.assign({}, {
					...result.obj.acountInfo,
					...result.obj.userInformation,
				})
				this.setState({
					user
				})
			} else {
				toast.show('获取用户信息失败');
			}
		}, (error) => {
			dispatch(hideLoading());
		});

	}

	// 添加好友
	_addFriend() {
		let {loginUser, dispatch} = this.props;
		let {user} = this.state;

		if (!loginUser) {
			toast.show('请登录后重试');
			return;
		}

		// 跳转到添加好友申请页面
		Actions.friendApply({
			friend: user
		})
	}

	// 删除好友
	_deleteFriend() {
		let {user} = this.state;
		Alert.alert("删除好友", '您确定要删除好友' + user.title + '吗？', [{
			text: '取消'
		}, {
			text: '确定', onPress: () => this.deleteFriend()
		}])
	}

	deleteFriend() {
		let {loginUser, dispatch} = this.props,
			{user} = this.state,
			userId = loginUser.appid,
			friendId = user.appid;

		// 获取用户信息
		dispatch(showLoading());
		request.getJson(urls.apis.FRIEND_DELETEMYFRIEND, {
			userId, friendId
		}).then((result) => {
			dispatch(hideLoading());
			if (result.success) {
				toast.show('删除成功');
				// 刷新我的好友列表
				dispatch(fetchMyFriendList(userId));
			} else {
				toast.show('删除失败');
			}
		}, (error) => {
			dispatch(hideLoading());
		});
	}

}

const styles = {
	button: {
		marginLeft: 15,
		marginRight: 15
	},
	manIcon: {
		fontSize: 15,
		color: '#50A1F2'
	},
	womanIcon: {
		fontSize: 15,
		color: '#EF7155'
	},

};

UserDetail.propTypes = {
	userId: React.PropTypes.string, // 用户ID
}

UserDetail.defaultProps = {
	userId: '867200022156895,86720002215690328312757'
}

const mapStateToProps = state => ({
	loginUser: state.user.loginUser,
	friendNickMap: state.friend.friendNickMap
});
export default connect(mapStateToProps)(UserDetail);