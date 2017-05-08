import React, {PureComponent} from "react";
import {Alert} from "react-native";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Container, Content, Header, List, Separator, HeaderButton} from "../../components/index";
import {Text, Button, ListItem, Item, Input} from "native-base";
/*import {showLoading, hideLoading} from "../../actions/loading";
import {request, urls, tools, toast} from "../../utils/index";*/

/**
 * 好友申请
 */
class FriendApply extends PureComponent {

	constructor(props) {
		super(props);
		let {friend, loginUser} = props;
		this.state = {
			myIntro: '我叫' + loginUser.title,
			friendRemark: friend.title
		}
	}

	render() {
		let {friend}  = this.props;
		return (
			<Container>
				<Header {...this.props} right={
					<HeaderButton text="发送" onPress={this._addApplyFriend.bind(this)}/>
				}/>

				<Content gray>
					<List style={{padding: 10}}>
						<Text note>你需要发送验证申请，等对方通过</Text>
						<Item underline success>
							<Input onChangeText={(myIntro) => this.setState({myIntro})}
								   value={this.state.myIntro}
							/>
						</Item>
					</List>
					<Separator/>
					<List style={{padding: 10}}>
						<Text note>为好友设置备注</Text>
						<Item underline success>
							<Input onChangeText={(friendRemark) => this.setState({friendRemark})}
								   value={this.state.friendRemark}/>
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

	_addApplyFriend() {
		let {loginUser, friend, dispatch} = this.props;
		let {myIntro, friendRemark} = this.state;

		// 申请加为好友
		dispatch(showLoading());
		request.getJson(urls.apis.FRIEND_APPLYADDFRIEND, {
			activeAppid: loginUser.appid,
			activeName: myIntro,
			passiveAppid: friend.appid,
			passiveName: friendRemark,
		}).then(((result) => {
			dispatch(hideLoading());
			if (result.success) {
				toast.show('已发送申请');
				Actions.pop();
			} else {
				toast.show('发送申请失败，请重试');
			}
		}).bind(this), (error) => {
			dispatch(hideLoading());
			alert(JSON.stringify(error));
		});

	}
}

const styles = {
};

FriendApply.propTypes = {
	friend: React.PropTypes.object, // 用户ID
}

const mapStateToProps = state => ({
	loginUser: state.user.loginUser
});
export default connect(mapStateToProps)(FriendApply);