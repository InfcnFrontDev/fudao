import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {StyleSheet, View, ToastAndroid, Text} from "react-native";
import TabNavigator from "react-native-tab-navigator";
import Icon from "react-native-vector-icons/Ionicons";
import {theme} from "../../utils/index";
import Home from "../home/Home";
import Article from "../article/Article";
import Dynamic from "../../views/dynamic/Dynamic";
import My from "../../views/my/My";
import schema from "../../realm/schema.js";
import {newRealm} from "../../actions/realm.js";

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

/**
 * 首页
 */
class Index extends PureComponent {

	state = {
		selectedTab: 'home'
	}


	render() {
		return (
			<TabNavigator>
				{tabs.map(item => this.renderTabItem(item))}
			</TabNavigator>
		)
	}

	renderTabItem(item) {
		let Component = item.component;
		return (
			<TabNavigator.Item
				key={item.id}
				selected={this.state.selectedTab === item.id}
				title={item.title}
				titleStyle={styles.titleStyle}
				selectedTitleStyle={styles.titleStyleSelected}
				renderIcon={() => <Icon name={item.icon} style={styles.tabIcon}/>}
				renderSelectedIcon={() => <Icon name={item.selectedIcon} style={[styles.tabIcon,styles.tabIconSelected]}/>}
				renderBadge={() => this.renderBadge(item)}
				badgeStyle={{backgroundColor:'red', color:'red'}}
				onPress={() => this.setState({selectedTab: item.id})}>
				<Component />
			</TabNavigator.Item>
		)
	}

	renderBadge(item){
		if(item.badge){
			return (
				<View style={styles.badge}>
					<Text style={styles.badgeText}>10</Text>
				</View>
			)
		}
		return null;
	}

}
const styles = {
	titleStyle: {
		color: theme.navTabBarTextColor,
		fontSize: 12
	},
	titleStyleSelected: {
		color: theme.navTabBarActiveTextColor
	},
	tabIcon: {
		color: theme.navTabBarTextColor,
		fontSize: 24,
		marginBottom: -3
	},
	tabIconSelected: {
		color: theme.navTabBarActiveTextColor,
	},
	badge:{
		backgroundColor:'red',
		width:15,
		height:15,
		borderRadius:8,
		alignItems:'center',
		marginTop:1,
	},
	badgeText:{
		color:'#FFFFFF',
		fontSize: 10,
	}
};

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(Index);
