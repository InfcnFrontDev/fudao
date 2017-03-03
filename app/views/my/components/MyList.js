import React, {PureComponent} from "react";
import {Actions} from "react-native-router-flux";
import {View, Icon, Left, Right, Body, Text, ListItem} from "native-base";
import {theme} from "../../../utils/index";

/**
 * my datas menu
 */
class MyList extends PureComponent {

	render() {
		return (
			<View style={styles.myList}>
				{this.renderItem({
					icon: 'ios-list-box-outline',
					text: '基本信息',
					bordered: true,
					route: 'about'
				})}
				{this.renderItem({
					icon: 'ios-stopwatch-outline',
					text: '体检信息',
					bordered: true,
					route: 'about'
				})}
				{this.renderItem({
					icon: 'ios-tablet-portrait-outline',
					text: '智能设备',
					bordered: true,
					route: 'about'
				})}
				{this.renderItem({
					icon: 'ios-chatboxes-outline',
					text: '推送通知',
					bordered: true,
					route: 'start'
				})}
				{this.renderItem({
					icon: 'ios-information-circle-outline',
					text: '关于福道',
					bordered: false,
					route: 'about'
				})}
			</View>
		)
	}


	renderItem(item) {
		return (
			<ListItem icon onPress={()=> Actions[item.route]()}>
				<Left>
					<Icon name={item.icon}/>
				</Left>
				<Body style={item.bordered ? {} : {borderBottomWidth: 0}}>
				<Text style={styles.listText}>{item.text}</Text>
				</Body>
				<Right style={item.bordered ? {} : {borderBottomWidth: 0}}>
					<Icon name="ios-arrow-forward"/>
				</Right>
			</ListItem>
		)
	}
}

const styles = {
	myList: {backgroundColor: '#fff'},
	listText: {
		fontSize: theme.DefaultFontSize,
	}
};

export default (MyList);