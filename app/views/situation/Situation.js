import React, {PureComponent} from "react";
import {ListView} from "react-native";
import {ListItem, Body, Right, Text} from "native-base";
import {Container, Content, Header} from "../../components/index";
import {theme} from "../../utils/index";

const rowsData = [
	{
		title: '主页',
		value: '70%',
		level: 1,
	},
	{
		title: '我的情绪',
		value: '100%',
		level: 2,
	},
	{
		title: '我的能量场',
		value: '50%',
		level: 2,
	},
	{
		title: '我的问题',
		value: '100%',
		level: 2,
	},
	{
		title: '我的期望',
		value: '100%',
		level: 2,
	},
	{
		title: '资讯',
		value: '100%',
		level: 1,
	},
	{
		title: '动态',
		value: '90%',
		level: 1,
	},
	{
		title: '我的',
		value: '90%',
		level: 1,
	},
	{
		title: '我的收藏',
		value: '100%',
		level: 2,
	},
	{
		title: '我的好友',
		value: '100%',
		level: 2,
	},
	{
		title: '我的设置',
		value: '50%',
		level: 2,
	},
	{
		title: '侧边栏',
		value: '100%',
		level: 1,
	},
	{
		title: '我的健康环',
		value: '100%',
		level: 2,
	},
	{
		title: '我的生命周期',
		value: '100%',
		level: 2,
	},
	{
		title: '我的时间',
		value: '100%',
		level: 2,
	},
	{
		title: '我的位置',
		value: '100%',
		level: 2,
	},
	{
		title: '健康测评',
		value: '100%',
		level: 2,
	},
	{
		title: '搜索',
		value: '40%',
		level: 1,
	},
	{
		title: '我的记录',
		value: '30%',
		level: 1,
	},
	{
		title: '消息推送',
		value: '10%',
		level: 1,
	},
];


/**
 * 关于福道
 */
class About extends PureComponent {

	constructor(props) {
		super(props);

		this.ds = new ListView.DataSource({
			rowHasChanged: (row1, row2) => row1 !== row2,
			sectionHeaderHasChanged: (section1, section2) => section1 !== section2,
		});
	}

	render() {
		return (
			<Container>
				<Header {...this.props}/>
				<Content delay>
					<ListView
						dataSource={this.ds.cloneWithRows(rowsData)}
						renderRow={this._renderRow.bind(this)}
						pageSize={10}
						enableEmptySections
					/>
				</Content>
			</Container>
		)
	}

	_renderRow(rowData, sectionId, rowId) {
		let fontWeight, fontSize, marginLeft;

		fontWeight = 'bold';
		fontSize = theme.fontSizeH4;
		marginLeft = 0;

		if (rowData.level == 2) {
			fontWeight = 'normal';
			fontSize = theme.fontSizeH5;
			marginLeft = 15;
		}

		return (
			<ListItem
				key={rowData.title}
				icon
			>
				<Body>
				<Text
					style={{fontSize, fontWeight, marginLeft}}>{rowData.title}</Text>
				</Body>
				<Right>
					<Text note>{rowData.value}</Text>
				</Right>
			</ListItem>
		)
	}

}

const styles = {
	title: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	titleText: {
		fontSize: 28
	},
	desc: {
		lineHeight: 24
	},
	bold: {
		fontWeight: 'bold',
		marginTop: 10,
		marginBottom: 10
	},
	center: {
		flexDirection: "row",
		justifyContent: 'center',
	}
};

export default (About);