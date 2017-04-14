import React, {PureComponent} from "react";
import {View, Alert, TextInput, TouchableOpacity, ToastAndroid, AsyncStorage} from "react-native";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Text} from "native-base";
import {Header, Container, Content} from "../../components/index";
import {theme} from "../../utils/";
import CommitButton from "./components/CommitButton";
import UserInput from "./components/UserInput";
import {checkPhone} from "./components/public";
import {request, urls, toast} from "../../utils/index";
import {login} from "../../actions/user";
/**
 * 登录
 */
const dismissKeyboard = require('dismissKeyboard');
class Login extends PureComponent {

	state = {
		isFetching: false,
		phone: '',
		password: '',
		login: 'no'
	}

	render() {
		let {isFetching} = this.state;
		return (
			<Container>
				<Header {...this.props}></Header>
				<Content>
					<View style={styles.bag}>
						<UserInput text="用户名"
								   onChangeText={(value)=> {
									   this.setState({
										   phone: value
									   })
								   }}/>
						<UserInput text="密码" secureTextEntry={true}
								   onChangeText={(value)=> {
									   this.setState({
										   password: value
									   })
								   }}/>
						<CommitButton title="登录" block={true} border={false} top={20} onPress={this._login.bind(this)}/>
						<View style={styles.textdoc}>
							<View style={{flexDirection: 'row'}}>
							</View>
							<TouchableOpacity onPress={()=>Actions['passwordValidate']()}>
								<Text style={styles.text2}>忘记密码</Text>
							</TouchableOpacity>
						</View>
					</View>

				</Content>
			</Container>
		);
	}

	_login() {
		const {dispatch} = this.props;
		let {phone, password} = this.state;
		if (phone == '') {
			toast.show("用户名不能为空");
			return;
		}
		if (!checkPhone(phone)) {
			toast.show("请输入正确的用户名");
			return;
		}
		if (password == '') {
			toast.show("密码不能为空");
			return;
		}
		//关闭软键盘
		dismissKeyboard();

		// 提交登录
		request.getJson(urls.apis.USER_LOGIN, {
			phone,
			password
		}).then((data) => {
			if (data.ok) {
				toast.show("登录成功");
				loginSuccess(data.obj);
			} else {
				toast.show("用户名或密码错误");
			}
		});
	}

	loginSuccess(token) {
		request.token = token;
		request.getJson(urls.apis.USER_GETLOGINUSER)
			.then((data) => {
				if (data.ok) {
					this.loginSuccess2(data.obj);
				}
			});
	}

	loginSuccess2(user) {
		let {dispatch} = this.props;
		dispatch(login(user));
	}

	//根据是否有基本信息选择跳转页面
	d() {
		let {obj} = this.props;
		// ToastAndroid.show(JSON.stringify(obj.userInformation), ToastAndroid.SHORT);
		var userInformation = obj.userInformation;
		if (userInformation != undefined) { //基本信息已经添加完成
			Actions['search']()
		} else { //没有基本信息表示第一次登录需要添写信息
			Actions['startInformation']()
		}
	}
}
const styles = {

	textdoc: {
		marginTop: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	text1: {
		fontSize: theme.DefaultFontSize - 2,
		color: '#666'
	},
	text2: {
		fontSize: theme.DefaultFontSize - 2,
		color: '#666',
		textDecorationLine: 'underline'
	},
	bag: {
		padding: 10
	}
};

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(Login);
