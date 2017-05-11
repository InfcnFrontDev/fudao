import React, {Component} from "react";
import {ScrollView, ListView, View, Text, ToastAndroid} from "react-native";
import GiftedListView from "../../../components/GiftedListView";
import MyRecordeListRow from "./MyRecordeListRow";
const data=[
	 {
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
			content: '慢跑20分钟'
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
	 {
		"饮食": [
			{
				name: '早餐',
				time: '7 : 30 am',
				content: '大麦，薏仁'
			},
			{
				name: '午餐',
				time: '12 : 00 am',
				content: '丝瓜、鲜蚕豆'
			},
			{
				name: '晚餐',
				time: '7 : 00 pm',
				content: '米糊，包菜'
			}
		],
		"动": [
			{
				name: '晨练',
				time: '7 : 00 am',
				content: '扩胸运动'
			},
			{
				name: '休闲',
				time: '15 : 00 pm',
				content: '侧角伸展'
			},
			{
				name: '运动',
				time: '6 : 00 pm',
				content: '跳绳100个'
			}
		],
		"静": [
			{
				name: '看书',
				time: '10 : 30 pm',
				content: '看书不仅丰富知识，更能提升自我。'
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
	 {
		"饮食": [
			{
				name: '早餐',
				time: '7 : 30 am',
				content: '糯米，红枣，黑芝麻'
			},
			{
				name: '午餐',
				time: '12 : 00 am',
				content: '黑鱼、酸菜、干红辣椒'
			},
			{
				name: '晚餐',
				time: '7 : 00 pm',
				content: '南瓜，土豆'
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
				content: '伸展运动'
			},
			{
				name: '运动',
				time: '6 : 00 pm',
				content: '快走15分钟'
			}
		],
		"静": [
			{
				name: '闭目冥想',
				time: '10 : 30 pm',
				content: '畅想自己在沙滩上，沐浴着阳光。'
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
	 {
		"饮食": [
			{
				name: '早餐',
				time: '7 : 30 am',
				content: '面粉，鸡蛋，白萝卜'
			},
			{
				name: '午餐',
				time: '12 : 00 am',
				content: '鸡、榛蘑'
			},
			{
				name: '晚餐',
				time: '7 : 00 pm',
				content: '西兰花，莴笋'
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
				content: '太极拳24式'
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
	 {
		"饮食": [
			{
				name: '早餐',
				time: '7 : 30 am',
				content: '油条，豆浆'
			},
			{
				name: '午餐',
				time: '12 : 00 am',
				content: '五花肉、蕨粑'
			},
			{
				name: '晚餐',
				time: '7 : 00 pm',
				content: '苹果，西红柿，黄瓜'
			}
		],
		"动": [
			{
				name: '晨练',
				time: '7 : 00 am',
				content: '踢毽子20分钟'
			},
			{
				name: '休闲',
				time: '15 : 00 pm',
				content: '上下拍掌20次'
			},
			{
				name: '运动',
				time: '6 : 00 pm',
				content: '下班走路回家'
			}
		],
		"静": [
			{
				name: '平躺',
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
	 {
		"饮食": [
			{
				name: '早餐',
				time: '7 : 30 am',
				content: '核桃，小米'
			},
			{
				name: '午餐',
				time: '12 : 00 am',
				content: '山药、胡萝卜、木耳、黄瓜'
			},
			{
				name: '晚餐',
				time: '7 : 00 pm',
				content: '面条，豆腐'
			}
		],
		"动": [
			{
				name: '晨练',
				time: '7 : 00 am',
				content: '瑜伽基本式'
			},
			{
				name: '休闲',
				time: '15 : 00 pm',
				content: '侧抬腿10次'
			},
			{
				name: '运动',
				time: '6 : 00 pm',
				content: '仰卧起坐1分钟'
			}
		],
		"静": [
			{
				name: '闭目冥想',
				time: '10 : 30 pm',
				content: '回忆当天的快乐时光吧'
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
	 {
		"饮食": [
			{
				name: '早餐',
				time: '7 : 30 am',
				content: '油条，豆浆'
			},
			{
				name: '午餐',
				time: '12 : 00 am',
				content: '鸡翅，黑椒，洋葱'
			},
			{
				name: '晚餐',
				time: '7 : 00 pm',
				content: '大米，芹菜'
			}
		],
		"动": [
			{
				name: '晨练',
				time: '7 : 00 am',
				content: '健美操20分钟'
			},
			{
				name: '休闲',
				time: '15 : 00 pm',
				content: '摸高10次'
			},
			{
				name: '运动',
				time: '6 : 00 pm',
				content: '快走10分钟'
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
	 {
		"饮食": [
			{
				name: '早餐',
				time: '7 : 30 am',
				content: '油条，豆浆'
			},
			{
				name: '午餐',
				time: '12 : 00 am',
				content: '牛肉片、洋葱、白菜'
			},
			{
				name: '晚餐',
				time: '7 : 00 pm',
				content: '青椒，猪肉'
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
				content: '扭腰放松脊椎、腰肌'
			},
			{
				name: '运动',
				time: '6 : 00 pm',
				content: '倒走100米'
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
	 {
		"饮食": [
			{
				name: '早餐',
				time: '7 : 30 am',
				content: '油条，豆浆'
			},
			{
				name: '午餐',
				time: '12 : 00 am',
				content: '大虾、娃娃菜'
			},
			{
				name: '晚餐',
				time: '7 : 00 pm',
				content: '胡萝卜，西葫芦'
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
]
/*const data = {
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

}*/


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
		let {btn} = this.props;
		let c;
		if(btn>=9){
			c=btn-9;
		}else{
			c=btn;
		}
		callback(data[c], {
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

