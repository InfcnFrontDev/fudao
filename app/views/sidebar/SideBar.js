import React, {PureComponent} from "react";
import {Image} from "react-native";
import {connect} from "react-redux";
import {Grid, Col, Text, Icon, Button} from "native-base";
import {Container, Content} from "../../components/index";
import {theme} from "../../utils/index";
import TabNavigator from "react-native-tab-navigator";
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

class SideBar extends PureComponent {

	state = {
		selectedTab: 'home'
	};

	render() {
		let {active} = this.state;
		let Component = tabComponents[active];
		return (
			<Container>
				<Content>
					<Grid>
						<Col style={styles.sidebar}>
							{this.renderTabBar({
								tab: 'home',
								icon: 'ios-home-outline',
								text: '主页',
							})}
							{this.renderTabBar({
								tab: 'article',
								icon: 'ios-list-box-outline',
								text: '资讯',
							})}
							{this.renderTabBar({
								tab: 'dynamic',
								icon: 'ios-compass-outline',
								text: '动态',
							})}
							{this.renderTabBar({
								tab: 'my',
								icon: 'ios-person-outline',
								text: '我的',
							})}
						</Col>
						<Col>
							<TabNavigator
								tabBarStyle={{height: 0, overflow: 'hidden'}}
								sceneStyle={{paddingBottom: 0}}
							>
								{this.renderTabItem({
									tab: 'home',
									icon: 'ios-home-outline',
									text: '主页',
									component: <Home/>
								})}
								{this.renderTabItem({
									tab: 'article',
									icon: 'ios-list-box-outline',
									text: '资讯',
									component: <Article/>

								})}
								{this.renderTabItem({
									tab: 'dynamic',
									index: 2,
									icon: 'ios-compass-outline',
									text: '动态',
									component: <Dynamic/>
								})}
								{this.renderTabItem({
									tab: 'my',
									icon: 'ios-person-outline',
									text: '我的',
									component: <My/>
								})}
							</TabNavigator>
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
				onPress={() => this.setState({selectedTab: item.tab})}
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

	renderTabItem(item) {
		return (
			<TabNavigator.Item
				selected={this.state.selectedTab === item.tab}
				title={item.text}
				renderIcon={() => <Icon name={item.icon}/>}
				renderSelectedIcon={() => <Icon name={item.icon}/>}
				onPress={() => this.setState({selectedTab: item.tab})}>
				{item.component}
			</TabNavigator.Item>
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
