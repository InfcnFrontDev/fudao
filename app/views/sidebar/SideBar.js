import React, {PureComponent} from "react";
import {Image} from "react-native";
import {connect} from "react-redux";
import {Grid, Col, View, Text, Icon, Button} from "native-base";
import {Container, Content} from "../../components/index";
import {theme} from "../../utils/index";
import ScrollableTabView, {DefaultTabBar} from "react-native-scrollable-tab-view";
import HealthEvaluation from "./HealthEvaluation";
import HealthRing from "./HealthRing";
import LifeCycle from "./LifeCycle";
import MyPosition from "./MyPosition";
import MyTime from "./MyTime";
import OfflineService from "./OfflineService";


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


const tabs = [
	{
		title: '我的健康环',
		icon: 'ios-home-outline',
		selectedIcon: 'ios-home',
		component: HealthRing
	},
	{
		title: '我的生命周期',
		icon: 'ios-list-box-outline',
		selectedIcon: 'ios-list-box',
		component: LifeCycle
	},
	{
		title: '我的时间',
		icon: 'ios-compass-outline',
		selectedIcon: 'ios-compass',
		component: MyTime
	},
	{
		title: '我的位置',
		icon: 'ios-person-outline',
		selectedIcon: 'ios-person',
		component: MyPosition
	},
	{
		title: '健康测评',
		icon: 'ios-person-outline',
		selectedIcon: 'ios-person',
		component: HealthEvaluation
	},
	{
		title: '线下服务',
		icon: 'ios-person-outline',
		selectedIcon: 'ios-person',
		component: OfflineService
	}
]

class SideBar extends PureComponent {

	state = {
		activeTab: 0
	}

	render() {
		return (
			<Container>
				<Content>
					<Grid>
						<Col style={styles.sidebar}>
							{tabs.map((item, index) => this.renderTabBar(item, index))}
						</Col>
						<Col>
							<ScrollableTabView
								ref={(e) => this._scrollableTabView = e}
								renderTabBar={() => <View style={{height: 0, width: 0}}/>}
							>
								{tabs.map((item, index) => this.renderTab(item, index))}
							</ScrollableTabView>
						</Col>
					</Grid>
				</Content>
			</Container>
		);
	}

	renderTabBar(item, index) {
		return (
			<Button
				key={index}
				transparent
				onPress={() => this._goToPage(index)}
				style={styles.tabBarItem}
			>
				<Icon name={item.icon}/>
				<Text>{item.text}</Text>
			</Button>
		)
	}

	renderTab(item, index) {
		let Component = item.component;
		return (
			<Component key={index} tabLabel={item.title}/>
		)
	}

	_goToPage(index) {
		this._scrollableTabView.goToPage(index);
		this.setState({
			activeTab: index
		})
	}
}

const styles = {
	sidebar: {
		backgroundColor: theme.toolbarDefaultBg,
		width: 55
	},
	tabBarItem: {
		flexDirection: 'column',
		paddingLeft: 0,
		paddingRight: 0,
		justifyContent: 'center',
		alignItems: 'center',
		width: 55,
		marginTop: 20,
	}
}


const mapStateToProps = state => ({});
export default connect(mapStateToProps)(SideBar);
