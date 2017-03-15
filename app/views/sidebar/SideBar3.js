import React, {PureComponent} from "react";
import {Image} from "react-native";
import {connect} from "react-redux";
import {Grid, Col, View, Text, Icon, Button} from "native-base";
import {Container, Content} from "../../components/index";
import {theme} from "../../utils/index";
import ScrollableTabView, {DefaultTabBar} from "react-native-scrollable-tab-view";
import Home from "../home/Home";
import Article from "../article/Article";
import Dynamic from "../../views/dynamic/Dynamic";
import My from "../../views/my/My";


const drawerCover = require('../../assets/my-photos/photo.jpg');

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


const tabs = [
	{
		id: 'home',
		title: '主页',
		icon: 'ios-home-outline',
		selectedIcon: 'ios-home',
		component: Home
	},
	{
		id: 'article',
		title: '资讯',
		icon: 'ios-list-box-outline',
		selectedIcon: 'ios-list-box',
		component: Article
	},
	{
		id: 'dynamic',
		title: '动态',
		icon: 'ios-compass-outline',
		selectedIcon: 'ios-compass',
		badge: 8,
		component: Dynamic
	},
	{
		id: 'my',
		title: '我的',
		icon: 'ios-person-outline',
		selectedIcon: 'ios-person',
		component: My
	}
]

class SideBar extends PureComponent {

	state = {
		active: 0
	}

	render() {
		let {active} = this.state;
		let Component = tabComponents[active];
		return (
			<Container>
				<Content>
					<Grid>
						<Col style={styles.sidebar}>
							{this.renderTabBar({
								index: 0,
								icon: 'ios-home-outline',
								text: '主页',
							})}
							{this.renderTabBar({
								index: 1,
								icon: 'ios-list-box-outline',
								text: '资讯',
							})}
							{this.renderTabBar({
								index: 2,
								icon: 'ios-compass-outline',
								text: '动态',
							})}
							{this.renderTabBar({
								index: 3,
								icon: 'ios-person-outline',
								text: '我的',
							})}
						</Col>
						<Col>
							<ScrollableTabView
								ref={(e) => this._scrollableTabView = e}
								renderTabBar={() => <View style={{height: 0, width: 0}}/>}
							>
								<Home tabLabel='Tab #1'>My</Home>
								<Article tabLabel='Tab #2'>favorite</Article>
								<Dynamic tabLabel='Tab #3'>project</Dynamic>
								<My tabLabel='Tab #4'>project</My>
							</ScrollableTabView>
						</Col>
					</Grid>
				</Content>
			</Container>
		);
	}

	renderTabBar(item) {
		return (
			<Button
				transparent
				onPress={() => this._scrollableTabView.goToPage(item.index)}
				style={{
					flexDirection: 'column',
					paddingLeft: 0,
					paddingRight: 0,
					justifyContent: 'center',
					alignItems: 'center',
					width: 60,
					marginTop: 20,
				}}
			>
				<Icon name={item.icon}/>
				<Text>{item.text}</Text>
			</Button>
		)
	}
}

const styles = {
	sidebar: {
		backgroundColor: theme.toolbarDefaultBg,
		width: 60
	}
}


const mapStateToProps = state => ({});
export default connect(mapStateToProps)(SideBar);
