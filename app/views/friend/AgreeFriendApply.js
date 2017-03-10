import React, {PureComponent} from "react";
import {Alert} from "react-native";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Container, Content, Header, List, Separator, HeaderButton} from "../../components/index";
import {Text, ListItem, Item, Input} from "native-base";
import {showLoading, hideLoading} from "../../actions/loading";
import {request, urls, toast} from "../../utils/index";

/**
 * 好友申请
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
				Actions.pop();
			} else {
				toast.show('发送失败，请重试');
			}
		}).bind(this), (error) => {
			dispatch(hideLoading());
			alert(JSON.stringify(error));
		});

	}
}

const styles = {};

FriendApply.propTypes = {
	friend: React.PropTypes.object, // 用户ID
}

const mapStateToProps = state => ({
	loginUser: state.userStore.loginUser
});
export default connect(mapStateToProps)(FriendApply);