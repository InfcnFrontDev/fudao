import React, {PureComponent} from "react";
import {Router, Scene, Reducer} from "react-native-router-flux";
import Index from "./views/index/Index";
import Login from "./views/authentication/Login";
import ArticleDetail from "./views/article/ArticleDetail";
import Start from "./views/authentication/Start";
import Register from "./views/authentication/Register";
import SetPassword from "./views/authentication/SetPassword";
import PasswordSuccess from "./views/authentication/PasswordSuccess";
import StartInformation from "./views/authentication/StartInformation";
import RebuildPassword from "./views/authentication/RebuildPassword";
import RebuildSuccess from "./views/authentication/RebuildSuccess";
import PasswordValidate from "./views/authentication/PasswordValidate";
import WomanChoose from "./views/authentication/WomanChoose";

/**
 * 路由
 */
export default class AppRouter extends PureComponent {

	// 最后一次触Back键的时间
	lastBackPressTime = 0;

	render() {
		return (
			<Router createReducer={this.reducerCreate.bind(this)} onExitApp={this.appExit.bind(this)}>
				<Scene key="root">

					<Scene key="start" component={Start} title="启动页" hideNavBar initial/>

					{/*首页*/}
					<Scene key="index" component={Index} title="首页" hideNavBar/>
					{/*启动注册*/}
					<Scene key="register" component={Register} title="注册" hideNavBar/>
					<Scene key="login" component={Login} title="登录" hideNavBar/>
					<Scene key="setPassword" component={SetPassword} title="设置密码" hideNavBar/>
					<Scene key="rebuildPassword" component={RebuildPassword} title="请设置新密码" hideNavBar/>
					<Scene key="passwordSuccess" component={PasswordSuccess} hideNavBar/>
					<Scene key="startInformation" component={StartInformation} title="基本信息" hideNavBar/>
					<Scene key="passwordValidate" component={PasswordValidate} title="找回密码" hideNavBar/>
					<Scene key="womanChoose" component={WomanChoose} title="阶段选择" hideNavBar/>
					<Scene key="rebuildSuccess" component={RebuildSuccess} hideNavBar/>


					<Scene key="articleDetail" component={ArticleDetail} title="资讯详情"/>

				</Scene>
			</Router>
		)
	}

	reducerCreate(params) {
		const defaultReducer = Reducer(params)
		return (state, action) => {
			// console.log(state);
			// console.log(action);
			return defaultReducer(state, action)
		}
	}

	appExit() {
		if (this.lastBackPressTime && this.lastBackPressTime + 2000 >= Date.now()) {
			return false;
		}
		this.lastBackPressTime = Date.now();
		tools.showToast('再按一次退出应用');
		return true;
	}

	shouldComponentUpdate() {
		return false
	}
}

