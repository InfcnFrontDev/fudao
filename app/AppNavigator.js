import React, {Component} from "react";
import {BackAndroid, StatusBar, NavigationExperimental, Platform, ToastAndroid, StyleSheet} from "react-native";
import {StyleProvider, Drawer} from "native-base";
import {connect} from "react-redux";
import {Router, Scene, Reducer, ActionConst} from "react-native-router-flux";
import SplashScreen from "react-native-splash-screen";
import {openDrawer, closeDrawer} from "./actions/drawer";
import getTheme from "../native-base-theme/components/";
import SideBar from "./views/sidebar/";
import {theme} from "./utils/index";
// index
import Index from "./views/index/Index";
// Search
import Search from "./views/search/Search";
import SearchSymptomProblem from "./views/search/SearchSymptomProblem";
import SearchDailyLife from "./views/search/SearchDailyLife";
import SearchFriendsCircle from "./views/search/SearchFriendsCircle";
import SearchHealthCare from "./views/search/SearchHealthCare";
import SearchInformation from "./views/search/SearchInformation";
import SearchOfflineService from "./views/search/SearchOfflineService";
import SearchUser from "./views/search/SearchUser";
// 资讯
import ArticleDetail from "./views/article/ArticleDetail";
// 系统
import Settings from "./views/system/Settings";
import About from "./views/system/About";
//
import Picture from "./views/picture/";
// My
import MyInfo from "./views/my-info/";
import MyCollection from "./views/my-collection/MyCollection";
//Home
import MyEmotion from "./views/my-emotion/MyEmotion";
import MyEmotionSolve from "./views/my-emotion/MyEmotionSolve";
import MyQuestion from "./views/my-question/MyQuestion";
import MyQuestionDetail from "./views/my-question/MyQuestionDetail";
import TreatmentDetail from "./views/my-question/TreatmentDetail";
import TreatmentDailyDetail from "./views/my-question/TreatmentDailyDetail";
//注册登录
import Start from "./views/authentication/Start";
import Login from "./views/authentication/Login";
import Register from "./views/authentication/Register";
import SetPassword from "./views/authentication/SetPassword";
import PasswordSuccess from "./views/authentication/PasswordSuccess";
import StartInformation from "./views/authentication/StartInformation";
import RebuildPassword from "./views/authentication/RebuildPassword";
import PasswordValidate from "./views/authentication/PasswordValidate";
import WomanChoose from "./views/authentication/WomanChoose";
/*import Picker from "./views/authentication/components/Picker";*/
//消息
import Message from "./views/message/message";
// 其他
import Webview from "./views/webview/";
//Dynamic
import NewDynamic from "./views/dynamic/NewDynamic";
// User
import UserDetail from "./views/user/UserDetail";
// Friend
import NewFriend from "./views/friend/NewFriend";
import MyFriend from "./views/friend/MyFriend";
import FriendApply from "./views/friend/FriendApply";
import AgreeFriendApply from "./views/friend/AgreeFriendApply";


const AppRouter = connect()(Router);
const {
	CardStack: NavigationCardStack,
} = NavigationExperimental;

var lastBackPressTime = 0;
class AppNavigator extends Component {

	componentDidUpdate() {
		if (this.props.drawerState === 'opened') {
			this._drawer._root.open();
		}

		if (this.props.drawerState === 'closed') {
			this._drawer._root.close();
		}
	}

	openDrawer() {
		this._drawer._root.open();
	}

	closeDrawer() {
		if (this.props.drawerState === 'opened') {
			this.props.closeDrawer();
		}
	}

	render() {
		return (
			<StyleProvider style={getTheme(theme)}>
				<Drawer
					ref={(ref) => this._drawer = ref}
					openDrawerOffset={0.66}
					panCloseMask={0.66}
					content={<SideBar navigator={this._navigator}/>}
					onClose={() => this.closeDrawer()}>
					<StatusBar
						hidden={(this.props.drawerState === 'opened' && Platform.OS === 'ios') ? true : false}
						backgroundColor={theme.statusBarColor}/>
					<AppRouter createReducer={this.reducerCreate.bind(this)} onExitApp={this.appExit.bind(this)}>
						<Scene key="root">

							{/*首页*/}
							<Scene key="index"  component={Index} title="首页" type={ActionConst.REPLACE} hideNavBar newnew={false}  />


							{/*启动注册*/}


							<Scene key="start"  component={Start} title="启动开始页" hideNavBar/>
							<Scene key="login"    component={Login} title="登录" hideNavBar/>
							<Scene key="register"   component={Register} title="注册" hideNavBar/>
							<Scene key="setPassword"  component={SetPassword} title="设置密码" hideNavBar/>
							<Scene key="rebuildPassword" component={RebuildPassword} title="请设置新密码" hideNavBar/>
							<Scene key="passwordSuccess"  component={PasswordSuccess} hideNavBar/>
							<Scene key="startInformation" initial  component={StartInformation} title="基本信息" hideNavBar/>
							<Scene key="passwordValidate" component={PasswordValidate} title="找回密码" hideNavBar/>
							<Scene key="womanChoose"  component={WomanChoose} title="阶段选择" hideNavBar/>
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
					</AppRouter>
				</Drawer>
			</StyleProvider>
		)
	}

	componentDidMount() {
		SplashScreen.hide();
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
		if (lastBackPressTime && lastBackPressTime + 2000 >= Date.now()) {
			return false;
		}
		lastBackPressTime = Date.now();
		ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
		return true;
	}
}

const bindAction = dispatch => ({
	openDrawer: () => dispatch(openDrawer()),
	closeDrawer: () => dispatch(closeDrawer()),
});

const mapStateToProps = state => ({
	drawerState: state.drawer.drawerState,
});

export default connect(mapStateToProps, bindAction)(AppNavigator);
