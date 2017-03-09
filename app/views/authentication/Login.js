import React, {PureComponent} from "react";
import {View, Alert, TextInput, TouchableOpacity, ToastAndroid} from "react-native";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Text} from "native-base";
import {Container, Content, Loading} from "../../components/index";
import Header from "../../components/header/BaseHeader";
import {theme} from "../../utils/";
import CommitButton from "./components/CommitButton";
import UrseInput from "./components/UrseInput";
import {checkPhone} from "./components/public";
import {request, urls, tools} from "../../utils/index";
import {hex_md5} from "./components/md5";
import {login} from "../../actions/user";

/**
 * 登录
 */
class Login extends PureComponent {

	state = {
		isFetching: false,
		phone: '',
		password: '',
	}

	render() {
		let {isFetching} = this.state;
		return (
			<Container>
				<Header {...this.props}></Header>
				<Content padder>
					<UrseInput text="用户名"
							   onChangeText={(value)=>{
                                   this.setState({
                                       phone:value
                                   })
                               }}/>
                    <UrseInput text="密码" secureTextEntry={true}
                               onChangeText={(value)=>{
                                   this.setState({
                                       password:value
                                   })
                               }}/>
					<CommitButton title="登录" block={true} border={false} top={20} onPress={this._login.bind(this)}/>
					<View style={styles.textdoc}>
						<View style={{flexDirection:'row'}}>
						</View>
						<TouchableOpacity onPress={()=>Actions['passwordValidate']()}>
							<Text style={styles.text2}>忘记密码</Text>
						</TouchableOpacity>
					</View>
					<Loading text={'正在登录...'} isShow={isFetching}/>
				</Content>
			</Container>
		);
	}

	_login() {
		let {phone, password} = this.state;

		if (phone == '') {
			tools.toast("用户名不能为空");
			return;
		}
		if (!checkPhone(phone)) {
			tools.toast("请输入正确的用户名");
			return;
		}
		if (password == '') {
			tools.toast("密码不能为空");
			return;
		}

		this.showLoading();

		// 提交登录
		request.getJson(urls.apis.USER_LOGIN, {
				account: phone,
				pwd: hex_md5(phone + password),
			}, (data) => {
				this.hideLoading();
				if (data.success) {
					tools.toast("登录成功");
					let user = Object.assign({}, {
						...data.obj.accountInfo,
						...data.obj.userInformation
					});
					// 保存用户状态
					this.props.dispatch(login(user));
					// 跳到首页
					Actions.index();
				} else {
					tools.toast("密码错误");
				}
			}
		)
	}

	showLoading() {
		this.setState({
			isFetching: true
		})
	}

	hideLoading() {
		this.setState({
			isFetching: false
		})
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
};

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(Login);



