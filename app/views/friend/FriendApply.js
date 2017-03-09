import React, {PureComponent} from "react";
import {Alert} from "react-native";
import {connect} from "react-redux";
import {Container, Content, Header, List, Separator} from "../../components/index";
import {Text, Button, Item, Input} from "native-base";
import {showLoading, hideLoading} from "../../actions/loading";
import {request, urls, tools} from "../../utils/index";

/**
 * 用户详情
 */
class UserDetail extends PureComponent {

	state = {
		user: null
	}

	render() {
		let {user}  = this.state;
		return (
			<Container>
				<Header back {...this.props} right={
					<Button small block style={styles.button} onPress={this._applyAddFriend.bind(this)}>
						<Text>发送</Text>
					</Button>
				}/>

				<Content gray>
					<List style={{padding:10}}>
						<Text note>你需要发送验证申请，等对方通过</Text>
						<Item underline success>
							<Input value="我的杨可可"/>
						</Item>
					</List>
					<Separator/>
					<List style={{padding:10}}>
						<Text note>为好友设置备注</Text>
						<Item underline success>
							<Input value="杨可可"/>
						</Item>
					</List>
					<Separator/>
					<List style={{padding:10}}>
						<Text note>设置朋友圈权限</Text>
						<Item>
							<Text>设置朋友圈权限</Text>
						</Item>
					</List>
				</Content>
			</Container>
		);
	}

	_applyAddFriend() {
		let {loginUser, dispatch} = this.props;
		let {user} = this.state;

		if (!loginUser) {
			tools.toast('请登录后重试');
			return;
		}

		// 申请加为好友
		dispatch(showLoading());
		request.getJson(urls.apis.FRIEND_APPLY, {
			activeAppid: loginUser.appid,
			activeName: '海龟大神',
			passiveAppid: user.appid,
		}).then(((result) => {
			dispatch(hideLoading());
			if (result.success) {
				tools.toast('');
			} else {
				tools.toast('请登录后重试');
			}
		}).bind(this), (error) => {
			dispatch(hideLoading());
			alert(JSON.stringify(error));
		});

	}
}

const styles = {
	button: {
		width: 60
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
	userId: '867200022156895,86720002215690321000493'
}

const mapStateToProps = state => ({
	loginUser: state.userStore.loginUser
});
export default connect(mapStateToProps)(UserDetail);