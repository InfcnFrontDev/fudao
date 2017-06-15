import React, {PureComponent} from "react";
import {Alert,ToastAndroid} from "react-native";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Container, Content, Header, List, Separator, HeaderButton} from "../../components/index";
import {Text, Button, ListItem, Item, Input,Right} from "native-base";
/*import {showLoading, hideLoading} from "../../actions/loading";
import {request, urls, tools, toast} from "../../utils/index";*/

/**
 * 好友申请
 */
export default class FriendApply extends PureComponent {

	constructor(props) {
		super(props);
		let {friend} = props;

		this.state = {
			myIntro: '我叫'+friend.username ,
			friendRemark: friend.username
		}
	}

	render() {
		let {friend}  = this.props;

		return (
			<Container>

				<Header {...this.props} right={
					<Right>
						<Button transparent onPress={()=>this._addApplyFriend()}>
							<Text>
								发送
							</Text>
						</Button>
					</Right>
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
		let {friend} = this.props;
		let {myIntro, friendRemark} = this.state;
		console.log(friend.id+"+"+myIntro+"+"+friendRemark)

		// 申请加为好友

		request.getJson(urls.apis.FRIEND_APPLYADDFRIEND, {
			friendId:friend.id,
			introduce: myIntro,
			friendRemark: friendRemark,
		}).then(((result) => {

			if (result.ok) {
				ToastAndroid.show(''+result.obj+'', ToastAndroid.SHORT);
				Actions.friend();
			} else {
				ToastAndroid.show('发送申请失败，请重试',ToastAndroid.SHORT);
			}
		}).bind(this), (error) => {
			//dispatch(hideLoading());
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