import React, {PureComponent} from "react";
import {Actions} from "react-native-router-flux";
import {View, Icon, Left, Right, Body, Text, ListItem} from "native-base";

/**
 * my list menu
 */
export default class ListMenu extends PureComponent {

	render() {
		return (
			<View style={styles.myList}>
				{this.renderItem({
					icon: 'ios-list-box-outline',
					text: '基本信息',
					bordered: true,
					route: 'personal'
				})}
				{this.renderItem({
					icon: 'ios-stopwatch-outline',
					text: '体检信息',
					bordered: true,
					route: 'check'
				})}
				{this.renderItem({
					icon: 'ios-film-outline',
					text: '我的记录',
					bordered: true,
					route: 'record'
				})}
				{this.renderItem({
					icon: 'ios-create-outline',
					text: '开发完成情况',
					bordered: true,
					route: 'situation'
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

	shouldComponentUpdate() {
		return false
	}
}

const styles = {
	myList: {backgroundColor: '#fff'},
	listText: {
		fontSize: theme.fontSizeBase,
	}
};
