import React, {PureComponent} from "react";
import {Alert} from "react-native";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Container, Content, Header, List, Separator, HeaderButton} from "../../components/index";
import {Text, ListItem, Item, Input} from "native-base";
import {showLoading, hideLoading} from "../../actions/loading";
import {fetchNewFriendList, fetchMyFriendList} from "../../actions/friend";
import {request, urls, toast} from "../../utils/index";

/**
 * 接受好友申请
 */
class FriendApply extends PureComponent {

	constructor(props) {
		super(props);
		let {friend, loginUser} = props;
		this.state = {
			friendRemark: friend.friendNick
		}
	}

	render() {
		let {friend}  = this.props;
		return (
			<Container>
				<Header back {...this.props} right={
					<HeaderButton text="完成" onPress={this._agree.bind(this)}/>
				}/>

				<Content gray>
					<List style={{padding: 10}}>
						<Text note>为好友设置备注</Text>
						<Item underline success>
							<Input onChangeText={(friendRemark) => this.setState({friendRemark})}
								   value={this.state.friendRemark}
							/>
						</Item>
					</List>
					<Separator/>
					<List style={{padding: 10}}>
						<Text note>设置朋友圈权限</Text>
						<ListItem last>
							<Text>设置朋友圈权限</Text>
						</ListItem>
					</List>
				</Content>
			</Container>
		);
	}

	_agree() {
		let {loginUser, friend, dispatch} = this.props;
		let {friendRemark} = this.state;

		// 申请加为好友
		dispatch(showLoading());
		request.getJson(urls.apis.FRIEND_AGREE, {
			id: friend.id,
			passiveName: friendRemark,
		}).then(((result) => {
			dispatch(hideLoading());
			if (result.success) {
				toast.show('已发送');
				// 返回上一页
				Actions.pop();

				// 刷新新朋友列表, 我的好友列表
				this.refreshFriendList();

			} else {
				toast.show('发送失败，请重试');
			}
		}).bind(this), (error) => {
			dispatch(hideLoading());
			alert(JSON.stringify(error));
		});

	}

	// 刷新新朋友列表, 我的好友列表
	refreshFriendList() {
		let {dispatch, loginUser} = this.props;
		// 新朋友
		dispatch(fetchNewFriendList(loginUser.appid));
		// 我的好友
		dispatch(fetchMyFriendList(loginUser.appid));
	}
}

const styles = {};

FriendApply.propTypes = {
	friend: React.PropTypes.object, // 用户ID
}

const mapStateToProps = state => ({
	loginUser: state.user.loginUser
});
export default connect(mapStateToProps)(FriendApply);