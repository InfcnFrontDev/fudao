import React, {PureComponent} from "react";
import {Router, Scene, Reducer} from "react-native-router-flux";
import Index from "./views/index/Index";
import Login from "./views/authentication/Login";
import ArticleDetail from "./views/article/ArticleDetail";
import Collection from "./views/collection/Collection";
import Start from "./views/authentication/Start";
import Register from "./views/authentication/Register";
import SetPassword from "./views/authentication/SetPassword";
import PasswordSuccess from "./views/authentication/PasswordSuccess";
import StartInformation from "./views/authentication/StartInformation";
import RebuildPassword from "./views/authentication/RebuildPassword";
import RebuildSuccess from "./views/authentication/RebuildSuccess";
import PasswordValidate from "./views/authentication/PasswordValidate";
import WomanChoose from "./views/authentication/WomanChoose";
import Friend from "./views/friend/Friend";
import About from "./views/about/About";
import UserAgreement from "./views/about/UserAgreement";
import PrivacyStatement from "./views/about/PrivacyStatement";
import Record from "./views/record/Record";
import MedicalExamination from "./views/medical-examination/MedicalExamination";


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

					<Scene key="friend" component={Friend} title="好友" hideNavBar/>

					<Scene title="资讯详情" key="articleDetail" component={ArticleDetail} hideNavBar/>
					<Scene title="收藏" key="collection" component={Collection} hideNavBar/>
					<Scene title="关于福道" key="about" component={About} hideNavBar/>
					<Scene title="隐私声明" key="privacyStatement" component={PrivacyStatement} hideNavBar/>
					<Scene title="用户协议" key="userAgreement" component={UserAgreement} hideNavBar/>

					<Scene title="我的记录" key="record" component={Record} hideNavBar/>

					<Scene title="体检信息" key="medicalExamination" component={MedicalExamination} hideNavBar/>


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

