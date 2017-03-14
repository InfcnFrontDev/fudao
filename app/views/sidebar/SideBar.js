import React, {PureComponent} from "react";
import {Image} from "react-native";
import {connect} from "react-redux";
import ScrollableTabView from "react-native-scrollable-tab-view";
import {theme} from "../../utils/index";

const drawerCover = require('../../assets/my-photos/photo.jpg');
import TabBar from "./components/TabBar";
import Home from "../home/Home";
import Article from "../article/Article";
import Dynamic from "../../views/dynamic/Dynamic";
import My from "../../views/my/My";

const datas = [
	{
		name: '我的时间',
		route: 'MY_TIME',
		icon: require('../../../img/biao.jpg'),
		bg: '#C5F442',
	},
	{
		name: '健康测评',
		route: 'HEALTH_APPRAISAL',
		icon: require('../../../img/jiankang.jpg'),
		bg: '#477EEA',
		types: '8',
	},
	{
		name: '健康圈',
		route: 'HEALTH_CIRCLE',
		icon: require('../../../img/taiyang.jpg'),
		bg: '#DA4437',
		types: '4',
	},
	{
		name: '生命周期',
		route: 'LIFE_CYCLE',
		icon: require('../../../img/woniu.jpg'),
		bg: '#4DCAE0',
	},
	{
		name: '我的位置',
		route: 'MY_LOCATION',
		icon: require('../../../img/dingwei.jpg'),
		bg: '#1EBC7C',
		types: '9',
	}

];

const tabTitles = [
	'主页', '资讯', '动态', '我的'
];
const tabIcons = [
	'ios-home-outline', 'ios-list-box-outline', 'ios-compass-outline', 'ios-person-outline'
];
const tabSelectedIcon = [
	'ios-home', 'ios-list-box', 'ios-compass', 'ios-person'
];
const tabComponents = [
	Home, Article, Dynamic, My
];

class SideBar extends PureComponent {

	_renderTabBar = () => <TabBar tabNames={tabTitles} tabIconNames={tabIcons} selectedTabIconNames={tabSelectedIcon}/>

	render() {
		return (
			<ScrollableTabView
				renderTabBar={this._renderTabBar}
				tabBarPosition='left'
				locked
				scrollWithoutAnimation
			>

				{tabComponents.map((Component, i) => (
					<Component key={tabTitles[i]} title={tabTitles[i]} newnew={this.props.newnew}/>
				))}

			</ScrollableTabView>
		);
	}
}

const styles = {
	sidebar: {
		backgroundColor: theme.toolbarDefaultBg,
		width: 50
	}
}


const mapStateToProps = state => ({});
export default connect(mapStateToProps)(SideBar);
