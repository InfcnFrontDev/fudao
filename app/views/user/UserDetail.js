import React, {PureComponent} from "react";
import {Alert} from "react-native";
import {connect} from "react-redux";
import {Container, Content, List, Separator} from "../../components/index";
import Header from "../../components/header/BaseHeader";
import {Body, Left, Right, ListItem, Text, Button, Thumbnail, Icon, View} from "native-base";
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
				<Header {...this.props}/>

				<Content gray>{user ?
					<View>
						<Separator/>
						<List>
							<ListItem avatar last>
								<Left>
									<Thumbnail square
											   source={{uri:'http://touxiang.qqzhi.com/uploads/2012-11/1111135112148.jpg'}}/>
								</Left>
								<Body>
								<Text>
									{user.remark}
									&nbsp;
									{user.sex == '1' ? <Icon name="ios-man" style={styles.manIcon}/> :
										<Icon name="ios-woman" style={styles.womanIcon}/>}
								</Text>

								<Text note style={{paddingBottom:20}}>昵称：{user.title}</Text>
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
						<Button block style={styles.button} onPress={this._applyAddFriend.bind(this)}>
							<Text>添加到我的好友</Text>
						</Button>
					</View> : null}
				</Content>
			</Container>
		);
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
				tools.toast('获取用户信息失败');
			}
		}, (error) => {
			dispatch(hideLoading());
		});

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
			if(result.success){
				tools.toast('');
			}else{
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
	userId: '867200022156895,86720002215690321000493'
}

const mapStateToProps = state => ({
	loginUser: state.userStore.loginUser
});
export default connect(mapStateToProps)(UserDetail);