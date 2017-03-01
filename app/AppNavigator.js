import React, {Component} from "react";
import {BackAndroid, StatusBar, NavigationExperimental, Platform, ToastAndroid, StyleSheet} from "react-native";
import {StyleProvider, Drawer} from "native-base";
import SplashScreen from "react-native-splash-screen";
import {connect} from "react-redux";
import {Router, Scene, Reducer} from "react-native-router-flux";
import {openDrawer, closeDrawer} from "./actions/drawer";
import getTheme from "../native-base-theme/components/";
import SideBar from "./views/sidebar/";
import TabBarIcon from "./components/tabbar/icon";
import {theme} from "./utils/";
//
import Index from "./views/index/";
// tabs
import Home from "./views/home/";
import Article from "./views/article/";
import Dynamic from "./views/dynamic/";
import My from "./views/my/";
import About from "./views/about/";
import Protocol from "./views/protocol/";
import Declare from "./views/declare/";
// Search
import Search from "./views/search/";
import SearchSymptomProblem from "./views/search/symptom-problem/";
import SearchDailyLife from "./views/search/daily-life/";
import SearchFriendsCircle from "./views/search/friends-circle/";
import SearchHealthCare from "./views/search/health-care/";
import SearchInformation from "./views/search/information/";
import SearchOfflineService from "./views/search/offline-service/";
import Picture from "./views/picture/";
import Start from "./views/start/";
import Login from "./views/login/";
import Register from "./views/register/";
import SetPassword from "./views/set-password/";
import ArticleDetail from "./views/article-detail/";
import PasswordSuccess from "./views/password-success/";
import StartInformation from "./views/start-information/";
import MyInfo from "./views/my-info/";
import Webview from "./views/webview/";
//Home
import MyEmotion from "./views/my-emotion";
import MyEmotionSolve from "./views/my-emotion-solve";
import MyQuestion from "./views/my-question";



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
							<Scene key="index" component={Index} title="首页" hideNavBar/>

							{/*首页2*/}
							<Scene key="tabbar" tabs hideNavBar initial tabBarStyle={styles.tabBarStyle}>
								<Scene key="home" component={Home} title="主页" icon={TabBarIcon} hideNavBar
									   iconName='ios-home-outline' selectedIconName='ios-home'/>
								<Scene key="article" component={Article} title="资讯" icon={TabBarIcon} hideNavBar
									   iconName='ios-list-box-outline' selectedIconName='ios-list-box'/>
								<Scene key="dynamic" component={Dynamic} title="动态" icon={TabBarIcon} hideNavBar
									   iconName='ios-compass-outline' selectedIconName='ios-compass'/>
								<Scene key="my" component={My} title="我的" icon={TabBarIcon} hideNavBar
									   iconName='ios-person-outline' selectedIconName='ios-person'/>
							</Scene>


							{/*启动注册*/}
							<Scene key="start" component={Start} title="启动开始页" hideNavBar/>
							<Scene key="login" component={Login} title="登录" hideNavBar/>
							<Scene key="register" component={Register} title="注册" hideNavBar/>
							<Scene key="setPassword" component={SetPassword} title="设置密码" hideNavBar/>
							<Scene key="passwordSuccess" component={PasswordSuccess} title="基本信息" hideNavBar/>
							<Scene key="startInformation" component={StartInformation} hideNavBar/>

							{/*首页*/}
							<Scene key="myEmotion" component={MyEmotion} title="我的情绪" hideNavBar/>
							<Scene key="myEmotionSolve" component={MyEmotionSolve} title="情绪干预" hideNavBar/>
							<Scene key="myQuestion"  component={MyQuestion} title="我的问题" hideNavBar/>


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
							<Scene key="protocol" component={Protocol} title="用户协议" hideNavBar/>
							<Scene key="declare" component={Declare} title="隐式声明" hideNavBar/>

							{/*其他*/}
							<Scene key="webview" component={Webview} title="WebView" hideNavBar/>
						</Scene>
					</AppRouter>
				</Drawer>
			</StyleProvider>
		)
	}

	componentDidMount() {
		// SplashScreen.hide();
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
