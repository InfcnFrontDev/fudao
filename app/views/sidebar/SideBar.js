import React, {PureComponent} from "react";
import {Image, TouchableOpacity} from "react-native";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Grid, Col, Text, Icon, Button, View} from "native-base";
import {Container, Content} from "../../components/index";
import {theme, urls} from "../../utils/index";
import {DefaultTabBar} from "react-native-scrollable-tab-view";
import TabView from "./components/TabView";
import HealthEvaluation from "./HealthEvaluation";
import HealthRing from "./HealthRing";
import LifeCycle from "./LifeCycle";
import MyPosition from "./MyPosition";
import MyTime from "./MyTime";
import OfflineService from "./OfflineService";


const drawerCover = require('../../assets/my-photos/photo.jpg');

const tabs = [
	{
		text: '健康环',
		icon: 'ios-speedometer-outline',
		selectedIcon: 'ios-speedometer',
		component: HealthRing
	},
	{
		text: '生命周期',
		icon: 'ios-cloudy-outline',
		selectedIcon: 'ios-cloudy',
		component: LifeCycle
	},
	{
		text: '我的时间',
		icon: 'ios-clock-outline',
		selectedIcon: 'ios-clock',
		component: MyTime
	},
	{
		text: '我的位置',
		icon: 'ios-navigate-outline',
		selectedIcon: 'ios-navigate',
		component: MyPosition
	},
	{
		text: '健康测评',
		icon: 'ios-medkit-outline',
		selectedIcon: 'ios-medkit',
		component: HealthEvaluation
	},
	{
		text: '线下服务',
		icon: 'ios-cart-outline',
		selectedIcon: 'ios-cart',
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
							{this.renderAvater()}
							{tabs.map((item, index) => this.renderTabBar(item, index))}
						</Col>
						<Col>
							<TabView ref={(e) => this._tabView = e} tabs={tabs}
									 onChangeTab={(event) => this._onChangeTab(event)}/>
						</Col>
					</Grid>
				</Content>
			</Container>
		);
	}

	renderAvater() {
		let {loginUser} = this.props;
		return (
			<View style={styles.avatar}>
				<TouchableOpacity onPress={() => Actions.pop()}>
					<Image
						source={{uri: urls.getImage(loginUser.img)}}
						style={styles.thumbnail}/>
				</TouchableOpacity>
			</View>
		)
	}

	renderTabBar(item, index) {

		let itemStyle = styles.tabBarItem,
			textStyle = styles.tabBarItemText,
			iconStyle = styles.tabBarItemIcon,
			iconName = item.icon;
		if (this.state.activeTab === index) {
			itemStyle = Object.assign({}, styles.tabBarItem, styles.tabBarItemSelected);
			textStyle = Object.assign({}, styles.tabBarItemText, styles.tabBarItemTextSelected);
			iconStyle = Object.assign({}, styles.tabBarItemIcon, styles.tabBarItemTextSelected);
			iconName = item.selectedIcon;
		}

		return (
			<Button
				key={index}
				transparent
				onPress={() => this._goToPage(index)}
				style={itemStyle}
			>
				<Icon name={iconName} style={iconStyle}/>
				<Text style={textStyle}>{item.text}</Text>
			</Button>
		)
	}

	_goToPage(index) {
		this._tabView.goToPage(index);
	}

	_onChangeTab(event) {
		this.setState({
			activeTab: event.i
		})
	}
}
const sideBarWidth = 55;
const styles = {
	sidebar: {
		backgroundColor: theme.toolbarDefaultBg,
		width: sideBarWidth
	},
	avatar: {
		width: sideBarWidth,
		marginTop: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	thumbnail: {
		width: 40,
		height: 40,
		borderWidth: 1,
		borderColor: '#efefef',
	},
	tabBarItem: {
		flexDirection: 'column',
		paddingLeft: 0,
		paddingRight: 0,
		justifyContent: 'center',
		alignItems: 'center',
		width: sideBarWidth,
		marginTop: 20,
		borderRadius: 0,
	},
	tabBarItemSelected: {
		backgroundColor: '#FFFFFF',
	},
	tabBarItemIcon: {
		fontSize: 24,
		color: '#FFFFFF',
	},
	tabBarItemText: {
		fontSize: 10,
		color: '#FFFFFF',
	},
	tabBarItemTextSelected: {
		color: theme.brandPrimary
	},
}


const mapStateToProps = state => ({
	...state.user,
});
export default connect(mapStateToProps)(SideBar);
