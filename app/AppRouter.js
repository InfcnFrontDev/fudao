import React, {PureComponent} from "react";
import {Router, Scene, Reducer} from "react-native-router-flux";
import Index from "./views/index/Index";
import Login from "./views/authentication/Login";
import ArticleDetail from "./views/article/ArticleDetail";
import Collection from "./views/collection/Collection";
import Start from "./views/authentication/Start";
import Friend from "./views/friend/Friend";

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
					<Scene key="login" component={Login} title="登录" hideNavBar/>

					<Scene key="friend" component={Friend} title="好友" hideNavBar/>


					<Scene key="articleDetail" component={ArticleDetail} title="资讯详情"/>
					<Scene key="collection" component={Collection} title="收藏" hideNavBar/>

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

