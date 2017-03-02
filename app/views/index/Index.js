import React, {PureComponent} from "react";
import {StyleSheet, View, Text} from "react-native";
import ScrollableTabView from "react-native-scrollable-tab-view";
import TabBar from "./components/TabBar";
import {theme} from "../../utils/";
// tab components
import Home from "../../views/home/Home";
import Article from "../../views/article/Article";
import Dynamic from "../../views/dynamic/";
import My from "../../views/my/";

const tabTitles = ['主页', '资讯', '动态', '我的']
const tabIcons = [
	'ios-home-outline',
	'ios-list-box-outline',
	'ios-compass-outline',
	'ios-person-outline'
]
const tabSelectedIcon = [
	'ios-home',
	'ios-list-box',
	'ios-compass',
	'ios-person'
]

/**
 * 首页
 */
class Index extends PureComponent {

	_renderTabBar = () => <TabBar tabNames={tabTitles} tabIconNames={tabIcons} selectedTabIconNames={tabSelectedIcon}/>

	_onChangeTab = () => {
	}

	render() {
		return (
			<ScrollableTabView
				renderTabBar={this._renderTabBar}
				tabBarPosition='bottom'
				locked
				scrollWithoutAnimation
				onChangeTab={this._onChangeTab}
			>
				<Home tabLabel="Food"/>
				<Article tabLabel="Home"/>
				<Dynamic tabLabel="Profile"/>
				<My tabLabel="Profile"/>

			</ScrollableTabView>
		)
	}

}
const styles = {
	container: {
		flexGrow: 1
	},
	tabBarStyle: {},
	sceneStyle: {},
	titleStyle: {
		color: theme.navTabBarTextColor,
		fontSize: 12
	},
	titleStyleSelected: {
		color: theme.navTabBarActiveTextColor
	},
	tabIcon: {
		color: theme.navTabBarTextColor,
		fontSize: 28,
		marginBottom: -3
	},
	tabIconSelected: {
		color: theme.navTabBarActiveTextColor
	},
};

export default (Index);
