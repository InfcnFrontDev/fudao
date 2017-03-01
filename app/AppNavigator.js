import React, {Component} from "react";
import {BackAndroid, StatusBar, NavigationExperimental, Platform, ToastAndroid, StyleSheet} from "react-native";
import {StyleProvider, Drawer} from "native-base";
import {connect} from "react-redux";
import {Router, Scene, Reducer, ActionConst} from "react-native-router-flux";
import SplashScreen from "react-native-splash-screen";
import {openDrawer, closeDrawer} from "./actions/drawer";
import getTheme from "../native-base-theme/components/";
import SideBar from "./views/sidebar/";
import TabBarIcon from "./components/TabBarIcon";
import {theme} from "./utils/";
//
import Index from "./views/index/";
// tabs
import Home from "./views/home/";
import Article from "./views/article/Article";
import Dynamic from "./views/dynamic/";
import My from "./views/my/";
import About from "./views/system/About";
// Search
import Search from "./views/search/Search";
import SearchSymptomProblem from "./views/search/SearchSymptomProblem";
import SearchDailyLife from "./views/search/SearchDailyLife";
import SearchFriendsCircle from "./views/search/SearchFriendsCircle";
import SearchHealthCare from "./views/search/SearchHealthCare";
import SearchInformation from "./views/search/SearchInformation";
import SearchOfflineService from "./views/search/SearchOfflineService";
import Picture from "./views/picture/";
import Start from "./views/authentication/start/";
import Login from "./views/authentication/login/";
import Register from "./views/authentication/register/";
import SetPassword from "./views/authentication/set-password/";
import ArticleDetail from "./views/article/ArticleDetail";
import PasswordSuccess from "./views/authentication/password-success/";
import StartInformation from "./views/authentication/start-information/";
import MyInfo from "./views/my-info/";
import Webview from "./views/webview/";
//Home
import MyEmotion from "./views/my-emotion/MyEmotion";
import MyEmotionSolve from "./views/my-emotion/MyEmotionSolve";
import MyQuestion from "./views/my-question/MyQuestion";
import MyQuestionDetail from "./views/my-question/MyQuestionDetail";


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
					ref={(ref) => {
						this._drawer = ref;
					}}
					content={<SideBar navigator={this._navigator}/>}
					onClose={() => this.closeDrawer()}>
					<StatusBar
						hidden={(this.props.drawerState === 'opened' && Platform.OS === 'ios') ? true : false}
						backgroundColor={theme.statusBarColor}/>
					<AppRouter createReducer={this.reducerCreate.bind(this)} onExitApp={this.appExit.bind(this)}>
						<Scene key="root">
							{/*首页1*/}
							<Scene key="index" component={Index} title="首页" hideNavBar
								   type={ActionConst.REPLACE}/>

							{/*首页2*/}
							<Scene key="tabbar" tabs hideNavBar pressOpacity={0.8} initial
								   tabBarStyle={styles.tabBarStyle}
								   type={ActionConst.REPLACE}>
								<Scene key="home" component={Home} title="主页" hideNavBar
									   icon={TabBarIcon}
									   iconName='ios-home-outline'
									   selectedIconName='ios-home'
								/>
								<Scene key="article" component={Article} title="资讯" hideNavBar
									   icon={TabBarIcon}
									   iconName='ios-list-box-outline'
									   selectedIconName='ios-list-box'
								/>
								<Scene key="dynamic" component={Dynamic} title="动态" hideNavBar
									   icon={TabBarIcon}
									   iconName='ios-compass-outline'
									   selectedIconName='ios-compass'
								/>
								<Scene key="my" component={My} title="我的" hideNavBar
									   icon={TabBarIcon}
									   iconName='ios-person-outline'
									   selectedIconName='ios-person'
								/>
							</Scene>

							{/*启动注册*/}
							<Scene key="start" component={Start} title="启动开始页" hideNavBar/>
							<Scene key="login" component={Login} title="登录" hideNavBar/>
							<Scene key="register" component={Register} title="注册" hideNavBar/>
							<Scene key="setPassword" component={SetPassword} title="设置密码" hideNavBar/>
							<Scene key="passwordSuccess" component={PasswordSuccess} hideNavBar/>
							<Scene key="startInformation" component={StartInformation} title="基本信息" hideNavBar/>

							{/*首页*/}
							<Scene key="myEmotion" component={MyEmotion} title="我的情绪" hideNavBar/>
							<Scene key="myEmotionSolve" component={MyEmotionSolve} title="情绪干预" hideNavBar/>
							<Scene key="myQuestion" component={MyQuestion} title="我的问题" hideNavBar/>
							<Scene key="myQuestionDetail" component={MyQuestionDetail} title="问题详情" hideNavBar/>


							{/*搜索*/}
							<Scene key="search" component={Search} title="搜索" hideNavBar/>
							<Scene key="searchDailyLife" component={SearchDailyLife} title="日常生活" hideNavBar/>
							<Scene key="searchFriendsCircle" component={SearchFriendsCircle} title="朋友圈" hideNavBar/>
							<Scene key="searchHealthCare" component={SearchHealthCare} title="保健方法" hideNavBar/>
							<Scene key="searchInformation" component={SearchInformation} title="资讯" hideNavBar/>
							<Scene key="searchOfflineService" component={SearchOfflineService} title="线下服务" hideNavBar/>
							<Scene key="searchSymptomProblem" component={SearchSymptomProblem} title="症状与问题"
								   hideNavBar/>

							{/*资讯*/}
							<Scene key="articleDetail" component={ArticleDetail} title="资讯详情" hideNavBar/>

							{/*动态*/}
							<Scene key="picture" component={Picture} title="图片预览" hideNavBar/>


							{/*我的*/}
							<Scene key="myInfo" component={MyInfo} title="个人信息" hideNavBar/>
							<Scene key="about" component={About} title="关于福道" hideNavBar/>

							{/*其他*/}
							<Scene key="webview" component={Webview} title="WebView" hideNavBar/>
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

const styles = StyleSheet.create({
	tabBarStyle: {
		backgroundColor: theme.navTabBarBgColor,
		borderTopWidth: theme.navTabBarBorderWidth,
		borderTopColor: theme.navTabBarBorderColor,
	},
})

const bindAction = dispatch => ({
	openDrawer: () => dispatch(openDrawer()),
	closeDrawer: () => dispatch(closeDrawer()),
});

const mapStateToProps = state => ({
	drawerState: state.drawer.drawerState,
});

export default connect(mapStateToProps, bindAction)(AppNavigator);
