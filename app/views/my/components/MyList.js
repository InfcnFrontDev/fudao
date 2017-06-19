import React, {PureComponent} from "react";
import {Actions} from "react-native-router-flux";
import {observer} from "mobx-react/native";
import {Alert} from 'react-native';
import {View, Icon, Left, Right, Body, Text, ListItem} from "native-base";
import DeviceInfo from 'react-native-device-info';
import UserStore from "../../../mobx/userStore";


/**
 * my list menu
 */
@observer
export default class MyList extends PureComponent {

	render() {
		return (
			<View style={styles.myList}>
				{this.renderItem({
					icon: 'ios-list-box-outline',
					text: '基本信息',
					bordered: true,
					route: 'baseInfo',
					type:1
				})}
				{this.renderItem({
					icon: 'ios-stopwatch-outline',
					text: '体检信息',
					bordered: true,
					route: 'medicalExamination',
					type:1
				})}
				{this.renderItem({
					icon: 'ios-film-outline',
					text: '我的记录',
					bordered: true,
					route: 'record',
					type:1
				})}
				{this.renderItem({
					icon: 'ios-create-outline',
					text: '意见反馈',
					bordered: true,
					route: 'feedback',
					type:1
				})}
				{this.renderItem({
				icon: 'ios-create-outline',
				text: '版本信息',
				bordered: true,
				route: 'feedback',
				type:2
				})}
				{this.renderItem({
					icon: 'ios-information-circle-outline',
					text: '关于福道',
					bordered: false,
					route: 'about',
					type:1
				})}
			</View>
		)
	}


	renderItem(item) {
		let version= config.versionName;
		return (
			<ListItem icon onPress={item.type==1?()=> Actions[item.route]():()=>this.update()}>
				<Left>
					<Icon name={item.icon}/>
				</Left>
				<Body style={item.bordered ? {} : {borderBottomWidth: 0}}>
				<Text style={styles.listText}>{item.text}</Text>
				</Body>
				<Right style={item.bordered ? {} : {borderBottomWidth: 0}}>
					{item.type==1?null:<Text note>{version}</Text>}
					<Icon name="ios-arrow-forward"/>
				</Right>
			</ListItem>
		)
	}

	shouldComponentUpdate() {
		return false
	}
	update() {
		//检测版本信息
		UserStore.checkVersion('click');
	}

}

const styles = {
	myList: {backgroundColor: '#fff'},
	listText: {
		fontSize: theme.fontSizeBase,
	}
}
