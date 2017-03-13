import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Router, Scene, Reducer} from "react-native-router-flux";
import {toast} from "./utils/index";
import Index from "./views/index/Index";
import Search from "./views/search/Search";
import SearchSymptomProblem from "./views/search/SearchSymptomProblem";
import SearchDailyLife from "./views/search/SearchDailyLife";
import SearchFriendsCircle from "./views/search/SearchFriendsCircle";
import SearchHealthCare from "./views/search/SearchHealthCare";
import SearchInformation from "./views/search/SearchInformation";
import SearchOfflineService from "./views/search/SearchOfflineService";
import SearchUser from "./views/search/SearchUser";
import ArticleDetail from "./views/article/ArticleDetail";
import Settings from "./views/system/Settings";
import About from "./views/system/About";
import Picture from "./views/picture/";
import MyInfo from "./views/my-info/MyInfo";
import MyCollection from "./views/my-collection/MyCollection";
import MyEmotion from "./views/my-emotion/MyEmotion";
import MyEmotionSolve from "./views/my-emotion/MyEmotionSolve";
import MyQuestion from "./views/my-question/MyQuestion";
import MyQuestionDetail from "./views/my-question/MyQuestionDetail";
import TreatmentDetail from "./views/my-question/TreatmentDetail";
import TreatmentDailyDetail from "./views/my-question/TreatmentDailyDetail";
import Start from "./views/authentication/Start";
import Login from "./views/authentication/Login";
import Register from "./views/authentication/Register";
import SetPassword from "./views/authentication/SetPassword";
import PasswordSuccess from "./views/authentication/PasswordSuccess";
import StartInformation from "./views/authentication/StartInformation";
import RebuildPassword from "./views/authentication/RebuildPassword";
import PasswordValidate from "./views/authentication/PasswordValidate";
import WomanChoose from "./views/authentication/WomanChoose";
import Message from "./views/message/message";
import Webview from "./views/webview/";
import NewDynamic from "./views/dynamic/NewDynamic";
import UserDetail from "./views/user/UserDetail";
import NewFriend from "./views/friend/NewFriend";
import MyFriend from "./views/friend/MyFriend";
import FriendApply from "./views/friend/FriendApply";
import AgreeFriendApply from "./views/friend/AgreeFriendApply";


const RouterWithRedux = connect()(Router);

/**
 * 路由
 */
class AppRouter extends PureComponent {

	// 最后一次触Back键的时间
	lastBackPressTime = 0;

	render() {
		return (
			<RouterWithRedux createReducer={this.reducerCreate.bind(this)} onExitApp={this.appExit.bind(this)}>
				<Scene key="root">

					<Scene key="start" component={Start} title="启动开始页" hideNavBar initial/>

					{/*首页*/}
					<Scene key="index" component={Index} title="首页" hideNavBar/>

					{/*启动注册*/}
					<Scene key="login" component={Login} title="登录" hideNavBar/>
					<Scene key="register" component={Register} title="注册" hideNavBar/>
					<Scene key="setPassword" component={SetPassword} title="设置密码" hideNavBar/>
					<Scene key="rebuildPassword" component={RebuildPassword} title="请设置新密码" hideNavBar/>
					<Scene key="passwordSuccess" component={PasswordSuccess} hideNavBar/>
					<Scene key="startInformation" component={StartInformation} title="基本信息" hideNavBar/>
					<Scene key="passwordValidate" component={PasswordValidate} title="找回密码" hideNavBar/>
					<Scene key="womanChoose" component={WomanChoose} title="阶段选择" hideNavBar/>
					{/*<Scene key="picker"  component={Picker} title="城市列表" hideNavBar/>*/}

					{/*主页*/}
					<Scene key="myEmotion" component={MyEmotion} title="我的情绪" hideNavBar/>
					<Scene key="myEmotionSolve" component={MyEmotionSolve} title="情绪干预" hideNavBar/>
					<Scene key="myQuestion" component={MyQuestion} title="我的问题" hideNavBar/>
					<Scene key="myQuestionDetail" component={MyQuestionDetail} title="问题详情" hideNavBar/>
					<Scene key="treatmentDetail" component={TreatmentDetail} title="疗法详情" hideNavBar/>
					<Scene key="treatmentDailyDetail" component={TreatmentDailyDetail} title="疗法详情" hideNavBar/>


					{/*搜索*/}
					<Scene key="search" component={Search} title="搜索" hideNavBar/>
					<Scene key="searchDailyLife" component={SearchDailyLife} title="日常生活" hideNavBar/>
					<Scene key="searchFriendsCircle" component={SearchFriendsCircle} title="朋友圈" hideNavBar/>
					<Scene key="searchHealthCare" component={SearchHealthCare} title="保健方法" hideNavBar/>
					<Scene key="searchInformation" component={SearchInformation} title="资讯" hideNavBar/>
					<Scene key="searchOfflineService" component={SearchOfflineService} title="线下服务" hideNavBar/>
					<Scene key="searchSymptomProblem" component={SearchSymptomProblem} title="症状与问题"
						   hideNavBar/>
					<Scene key="searchUser" component={SearchUser} title="用户" hideNavBar/>


					{/*资讯*/}
					<Scene key="articleDetail" component={ArticleDetail} title="资讯详情" hideNavBar/>

					{/*动态*/}
					<Scene key="picture" component={Picture} title="图片预览" hideNavBar/>
					<Scene key="newDynamic" component={NewDynamic} title="发表文字" hideNavBar/>


					{/*我的*/}
					<Scene key="myInfo" component={MyInfo} title="个人信息" hideNavBar/>

					<Scene key="myCollection" component={MyCollection} title="我的收藏" hideNavBar/>

					{/*系统*/}
					<Scene key="settings" component={Settings} title="系统设置" hideNavBar/>
					<Scene key="about" component={About} title="关于福道" hideNavBar/>

					{/*消息*/}
					<Scene key="message" component={Message} title="消息" hideNavBar/>

					{/*其他*/}
					<Scene key="webview" component={Webview} title="WebView" hideNavBar/>

					{/*用户*/}
					<Scene key="userDetail" component={UserDetail} title="用户详情" hideNavBar/>

					{/*好友*/}
					<Scene key="myFriend" component={MyFriend} title="我的好友" hideNavBar/>
					<Scene key="friendApply" component={FriendApply} title="好友申请" hideNavBar/>
					<Scene key="newFriend" component={NewFriend} title="新的朋友" hideNavBar/>
					<Scene key="agreeFriendApply" component={AgreeFriendApply} title="好友验证" hideNavBar/>
				</Scene>
			</RouterWithRedux>
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
		toast.show('再按一次退出应用');
		return true;
	}

	shouldComponentUpdate() {
		return false
	}
}

export default (AppRouter);