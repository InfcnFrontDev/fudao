import React, {Component} from "react";
import {ScrollView, ListView, View, Text, ToastAndroid} from "react-native";
import GiftedListView from "../../../components/GiftedListView";
import MyRecordeListRow from "./MyRecordeListRow";
const data = {
	'day': {
		"饮食": [
			{
				name: '早餐',
				time: '7 : 30 am',
				content: '牛奶，鸡蛋，馒头'
			},
			{
				name: '午餐',
				time: '12 : 00 am',
				content: '大米饭，豆角，胡萝卜，猪肉'
			},
			{
				name: '晚餐',
				time: '7 : 00 pm',
				content: '小米粥，小菜，水果拼盘'
			}
		],
		"动": [
			{
				name: '晨练',
				time: '7 : 00 am',
				content: '散步'
			},
			{
				name: '休闲',
				time: '15 : 00 pm',
				content: '踮脚跳15次'
			},
			{
				name: '运动',
				time: '6 : 00 pm',
				content: '下班走路回家'
			}
		],
		"静": [
			{
				name: '听音乐',
				time: '10 : 30 pm',
				content: '听些安静的音乐来辅助睡眠'
			}
		],
		"起居": [
			{
				name: '睡眠',
				time: '11 : 00 pm',
				content: '睡觉'
			}
		],
	},
	'week': {
		"饮食": [
			{
				name: '早餐',
				time: '7 : 30 am',
				content: [
					{
						time: '03-01',
						content: '鸡蛋，火腿，黄瓜'
					},
					{
						time: '03-02',
						content: '热牛奶，麦片'
					},
					{
						time: '03-03',
						content: '杂面粥，鸡蛋，凉菜'
					},
					{
						time: '03-04',
						content: '米粥，小菜，蛋，馒头'
					},
					{
						time: '03-05',
						content: '酸奶，补钙面饼'
					},
				]
			},
			{
				name: '午餐',
				time: '12 : 00 am',
				content: [
					{
						time: '03-01',
						content: '鲜肉，茭白，圆椒'
					},
					{
						time: '03-02',
						content: '韭芽，猪肝'
					},
					{
						time: '03-03',
						content: '鸡蛋，青椒丝'
					},
					{
						time: '03-04',
						content: '苹果，鸡肝'
					},
					{
						time: '03-05',
						content: '生菜，虾皮'
					},
				]
			},
			{
				name: '晚餐',
				time: '7 : 00 pm',
				content: [
					{
						time: '03-01',
						content: '鲜肉，茭白，圆椒'
					},
					{
						time: '03-02',
						content: '猪肝'
					},
					{
						time: '03-03',
						content: '瘦肉，青椒丝'
					},
					{
						time: '03-04',
						content: '瘦肉，白菜'
					},
					{
						time: '03-05',
						content: '烤鸭'
					},
				]
			}
		],
		"动": [
			{
				name: '晨练',
				time: '7 : 00 am',
				content: [
					{
						time: '03-01',
						content: '散步'
					},
					{
						time: '03-02',
						content: '散步'
					},
					{
						time: '03-03',
						content: '太极'
					},
					{
						time: '03-04',
						content: '散步'
					},
					{
						time: '03-05',
						content: '太极'
					},
				]
			},
			{
				name: '休闲',
				time: '15 : 00 pm',
				content: [
					{
						time: '03-01',
						content: '踮脚跳15次'
					},
					{
						time: '03-02',
						content: '踮脚跳15次'
					},
				]
			},
			{
				name: '运动',
				time: '6 : 00 pm',
				content: [
					{
						time: '03-01',
						content: '跑步'
					},
					{
						time: '03-02',
						content: '游泳'
					},
					{
						time: '03-03',
						content: '跳绳'
					},
					{
						time: '03-04',
						content: '打网球'
					},
					{
						time: '03-05',
						content: '走路回家'
					},
				]
			}
		],
		"静": [
			{
				name: '听音乐',
				time: '10 : 30 pm',
				content: [
					{
						time: '03-01',
						content: '打坐，调息'
					},
					{
						time: '03-02',
						content: '听一段乡间小曲'
					},
					{
						time: '03-03',
						content: '听安静的音乐'
					},
					{
						time: '03-04',
						content: '阅读一篇美文'
					},
					{
						time: '03-05',
						content: '听安静的音乐'
					},
				]

			}
		],
		"起居": [
			{
				name: '睡眠',
				time: '11 : 00 pm',
				content: [
					{
						time: '03-01',
						content: '睡觉'
					},
					{
						time: '03-02',
						content: '睡觉'
					},
					{
						time: '03-03',
						content: '睡觉'
					},
					{
						time: '03-04',
						content: '睡觉'
					},
					{
						time: '03-05',
						content: '睡觉'
					},
				]
			}
		],
	},
	'month': {
		"饮食": [
			{
				name: '早餐',
				time: '7 : 30 am',
				content: [
					{
						time: '01-01',
						content: '鸡蛋，火腿，黄瓜'
					},
					{
						time: '01-02',
						content: '热牛奶，麦片'
					},
					{
						time: '01-03',
						content: '杂面粥，鸡蛋，凉菜'
					},
					{
						time: '01-04',
						content: '米粥，小菜，蛋，馒头'
					},
					{
						time: '01-05',
						content: '酸奶，补钙面饼'
					},
				]
			},
			{
				name: '午餐',
				time: '12 : 00 am',
				content: [
					{
						time: '01-01',
						content: '鲜肉，茭白，圆椒'
					},
					{
						time: '01-02',
						content: '韭芽，猪肝'
					},
					{
						time: '01-03',
						content: '鸡蛋，青椒丝'
					},
					{
						time: '01-04',
						content: '苹果，鸡肝'
					},
					{
						time: '01-05',
						content: '生菜，虾皮'
					},
				]
			},
			{
				name: '晚餐',
				time: '7 : 00 pm',
				content: [
					{
						time: '01-01',
						content: '鲜肉，茭白，圆椒'
					},
					{
						time: '01-02',
						content: '猪肝'
					},
					{
						time: '01-03',
						content: '瘦肉，青椒丝'
					},
					{
						time: '01-04',
						content: '瘦肉，白菜'
					},
					{
						time: '01-05',
						content: '烤鸭'
					},
				]
			}
		],
		"动": [
			{
				name: '晨练',
				time: '7 : 00 am',
				content: [
					{
						time: '01-01',
						content: '散步'
					},
					{
						time: '01-02',
						content: '散步'
					},
					{
						time: '01-03',
						content: '太极'
					},
					{
						time: '01-04',
						content: '散步'
					},
					{
						time: '01-05',
						content: '太极'
					},
				]
			},
			{
				name: '休闲',
				time: '15 : 00 pm',
				content: [
					{
						time: '01-01',
						content: '踮脚跳15次'
					},
					{
						time: '01-02',
						content: '踮脚跳15次'
					},
				]
			},
			{
				name: '运动',
				time: '6 : 00 pm',
				content: [
					{
						time: '01-01',
						content: '跑步'
					},
					{
						time: '01-02',
						content: '游泳'
					},
					{
						time: '01-03',
						content: '跳绳'
					},
					{
						time: '01-04',
						content: '打网球'
					},
					{
						time: '01-05',
						content: '走路回家'
					},
				]
			}
		],
		"静": [
			{
				name: '听音乐',
				time: '10 : 30 pm',
				content: [
					{
						time: '01-01',
						content: '打坐，调息'
					},
					{
						time: '01-02',
						content: '听一段乡间小曲'
					},
					{
						time: '01-03',
						content: '听安静的音乐'
					},
					{
						time: '01-04',
						content: '阅读一篇美文'
					},
					{
						time: '01-05',
						content: '听安静的音乐'
					},
				]

			}
		],
		"起居": [
			{
				name: '睡眠',
				time: '11 : 00 pm',
				content: [
					{
						time: '01-01',
						content: '睡觉'
					},
					{
						time: '01-02',
						content: '睡觉'
					},
					{
						time: '01-03',
						content: '睡觉'
					},
					{
						time: '01-04',
						content: '睡觉'
					},
					{
						time: '01-05',
						content: '睡觉'
					},
				]
			}
		],
	}

}


export default class MyRecordeList extends Component {

	render() {
		return (
			<GiftedListView
				rowView={this._renderRowView.bind(this)}
				onFetch={this._onFetch.bind(this)}
				firstLoader={true}
				pagination={true}
				refreshable={true}
				withSections={true}
				sectionHeaderView={this._renderSectionHeaderView}
				enableEmptySections={true}
				paginationAllLoadedView={this._renderPaginationAllLoadedView}
			/>
		)
	}

	_onFetch(page = 1, callback, options) {
		let {label} = this.props;
		callback(data[this.props.type], {
			allLoaded: true
		})
	}

	_renderRowView(rowData, sectionID, rowID) {
		return (
			<MyRecordeListRow row={rowData} type={this.props.type}/>
		)
	}

	_renderSectionHeaderView(sectionData, sectionID) {
		return (
			<View style={styles.sectionHeader}>
				<Text style={styles.sectionHeaderText}>
					{sectionID}
				</Text>
			</View>
		)
	}

	_renderPaginationAllLoadedView() {
		return (null);
	}

	_paginationFetchingView() {
		return (
			<Text>_paginationFetchingView</Text>
		)
	}

	_paginationWaitingView() {
		return (
			<Text>Waiting</Text>
		)
	}

}

const styles = {
	sectionHeader: {
		marginTop: 20,
		marginLeft: 36,
	},
	sectionHeaderText: {
		color: '#000',
		fontSize: 16,
	}
}

MyRecordeList.propTypes = {
	label: React.PropTypes.string, // 资讯栏目
}

