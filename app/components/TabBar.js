import React, {Component} from "react";
import {StyleSheet, Text} from "react-native";
import TabNavigator from "react-native-tab-navigator";
import iconfont from "../utils/iconfont";
import globalStyles from "../utils/globalStyles";
import MessageView from "../views/MessageView";
import ContactsView from "../views/ContactsView";
import DynamicView from "../views/DynamicView";
import ComponentView from "../views/ComponentView";
import SettingsView from "../views/SettingsView";

export default class TabBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tabs: [
				{
					id: 'message',
					title: '微信',
					icon: 'message',
					selectedIcon: 'message_fill',
					component: MessageView
				},
				{
					id: 'contacts',
					title: '通讯录',
					icon: 'friend',
					selectedIcon: 'friend_fill',
					component: ContactsView
				},
				{
					id: 'dynamic',
					title: '朋友圈',
					icon: 'discover_line',
					selectedIcon: 'discover_shape',
					component: DynamicView
				},
				{
					id: 'components',
					title: '组件',
					icon: 'recharge',
					selectedIcon: 'recharge_fill',
					component: ComponentView
				},
				{
					id: 'settings',
					title: '我的',
					icon: 'my',
					selectedIcon: 'my_fill',
					component: SettingsView
				}
			],
			selectedTab: 'message'
		}
	}

	render() {
		let {tabs} = this.state,
			tabItems = [];

		tabItems = tabs.map(tab => {
			return this.renderTabItem(tab);
		});

		return (
			<TabNavigator hidesTabTouch={true} tabBarStyle={styles.tabBarStyle} sceneStyle={styles.sceneStyle}>
				{tabItems}
			</TabNavigator>
		)
	}

	renderTabItem(tab) {
		let Component = tab.component;
		return (
			<TabNavigator.Item
				key={tab.id}
				title={tab.title}
				titleStyle={styles.titleStyle}
				selectedTitleStyle={styles.titleStyleSelected}
				renderIcon={() => this.renderIcon(tab.icon)}
				renderSelectedIcon={() => this.renderIcon(tab.selectedIcon, true)}
				selected={this.state.selectedTab === tab.id}
				onPress={() => this.setState({selectedTab: tab.id})}>
				<Component title={tab.title}/>
			</TabNavigator.Item>
		)
	}

	renderIcon(icon, selected = false) {
		return (
			<Text style={[styles.tabIcon, selected ? styles.tabIconSelected : {}]}>{iconfont[icon]}</Text>
		)
	}
}

const styles = StyleSheet.create({
	tabBarStyle: {
		...globalStyles.bar,
	},
	sceneStyle: {
		...globalStyles.container
	},
	titleStyle: {
		color: '#929292',
		fontSize: 10
	},
	titleStyleSelected: {
		color: '#2BA245'
	},
	tabIcon: {
		...globalStyles.iconfont,
		color: '#929292',
		fontSize: 22
	},
	tabIconSelected: {
		color: '#2BA245'
	}
})