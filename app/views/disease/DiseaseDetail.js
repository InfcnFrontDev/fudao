import React, {PureComponent} from "react";
import {observer} from "mobx-react/native";
import {View, Image, DeviceEventEmitter, ScrollView, Text} from "react-native";
import {Container, Content, Header} from "../../components/index";
import MyDiseaseList from "./components/MyDiseaseList";
import DiseaseMethodTabView from "./components/DiseaseMethodTabView";

let myDiseaseData = [
	{
		"id": "077fbcc94bd843f7a308519bc4f9b532",
		"img": "/icons/disease/dianxian.png",
		"name": "癫痫",
		"type": "意外伤害"
	},
	{
		"id": "081f638682084b558d2b3ba08ae89dad",
		"img": "/icons/disease/kouqiangganzao.png",
		"name": "口腔干燥",
		"type": "衰老问题"
	},
	{

		"id": "103e3f772cc042a78f93d33db53521c7",
		"img": "/icons/disease/pifusaoyang.png",
		"name": "皮肤瘙痒",
		"type": "衰老问题"
	},
	{
		"id": "131f725025e04c1485c9463bcf0e8b86",
		"img": "/icons/disease/toutong.png",
		"name": "头痛",
		"type": "日常问题"
	},
	{
		"id": "16b6ead6e3824c319fc67c5e4192c1b0",
		"img": "/icons/disease/kouqiangkuiyang.png",
		"name": "口腔溃疡",
		"type": "日常问题"
	},
	{
		"id": "17f7d8511be64daf985b883c1dddb1be",
		"img": "/icons/disease/fanyingchidun.png",
		"name": "反应迟钝",
		"type": "衰老问题"
	},
	{
		"id": "19f67244a0a342c9b57b755c766423c1",
		"img": "/icons/disease/feipang.png",
		"name": "肥胖",
		"type": "衰老问题"
	},
	{
		"id": "1fd3a62662d24e6390b5e535b0bdf6c4",
		"img": "/icons/disease/fuxie.png",
		"name": "腹泻",
		"type": "日常问题"
	},
	{
		"id": "2312515984574208925f87820a72fc75",
		"img": "/icons/disease/dabianshijin.png",
		"name": "大便失禁",
		"type": "衰老问题"
	},
	{
		"id": "245719653ed042ff9b41abfdfc26a666",
		"img": "/icons/disease/niaoshijin.png",
		"name": "尿失禁",
		"type": "衰老问题"
	},
	{
		"id": "294735adc2364e60a1b01b75f2f6a0d8",
		"img": "/icons/disease/ganmao.png",
		"name": "感冒",
		"type": "日常问题"
	},
	{
		"id": "304ea1e0f84442749b211ecfea2b7020",
		"img": "/icons/disease/baineizhang.png",
		"name": "白内障",
		"type": "慢性疾病"
	},
	{
		"id": "308a88bdf8124f0783896fe079bfa59f",
		"img": "/icons/disease/xiaohuabuliang.png",
		"name": "消化不良",
		"type": "日常问题"
	},
	{
		"id": "3a67fd83140143318f282bbe3c922837",
		"img": "/icons/disease/erlong.png",
		"name": "耳聋",
		"type": "衰老问题"
	},
	{
		"id": "3eb1d684a9b54b628dc724628b7f75e4",
		"img": "/icons/disease/xinjigengsai.png",
		"name": "心肌梗塞",
		"type": "慢性疾病"
	},
	{
		"id": "4004d4e23bf746c48d7fa6022698ea01",
		"img": "/icons/disease/outu.png",
		"name": "呕吐",
		"type": "日常问题"
	},
	{
		"id": "407b4532e9f94ae3884ce2e908085aee",
		"img": "/icons/disease/tangshang.png",
		"name": "烫伤",
		"type": "意外伤害"
	}
]

let diseaseMethodData = [
	{
		"suitable": "寒凉性的食物、豆类及豆制品、含微量元素的食物。",
		"fasting": "辛辣刺激性食物、温热性食物、油炸类食物。",
		"methods": [
			{
				"timePeriod": "早餐",
				"suitable": [
					"牛奶",
					"鸡蛋"
				]
			},
			{
				"timePeriod": "午餐",
				"suitable": [
					"蚕豆",
					"高粱米",
					"鸭肉",
					"猪血",
					"绿豆芽"
				],
				"fasting": [
					"鸡肉",
					"猪肚"
				]
			},
			{
				"timePeriod": "下午茶",
				"suitable": [
					"橙子",
					"菊花"
				]
			},
			{
				"timePeriod": "午餐",
				"suitable": [
					"大米",
					"蚕豆",
					"高粱米",
					"小米",
					"小麦粉"
				],
				"fasting": [
					"火腿",
					"猪肚"
				]
			}
		],
		"type": "饮食"
	},
	{
		"principle": "牛奶中含有一些物质来起到镇定和催眠的作用，同时消除紧张。有助于安神和提高睡眠质量。",
		"methods": [
			{
				"id": "82287bb40b7e49c4a3eb63a19370c26e",
				"name": "戒酒",
				"timePeriod": "睡前"
			},
			{
				"id": "4840959e9e3243629e4856fa9dee4945",
				"name": "戒咖啡",
				"timePeriod": "主任务2"
			},
			{
				"id": "8af58ec706674c6f831bd2ed7d623077",
				"name": "合理安排午休",
				"timePeriod": "午睡"
			},
			{
				"id": "8c4c7375b1014f7dbbdfe6679cdfe98e",
				"name": "白天睡觉注意肥胖低通气综合征",
				"timePeriod": "主任务1"
			},
			{
				"id": "b1ab0b86118e4e5b9df4f75a65f24f32",
				"name": "夜间睡眠时，警惕呼吸暂停",
				"timePeriod": "睡眠"
			}
		],
		"type": "起居"
	},
	{
		"principle": "\\t撞桩法最初练习时选择木桩为好，并且可以缠上布带，使它更柔软，防止头部等碰伤。练久习惯了可以去除布带，或选择墙壁练习。",
		"methods": [
			{
				"id": "2342cfaf812244d8b1afbf06f2b2a9fc",
				"name": "模仿猫咪伸懒腰",
				"timePeriod": "晨练"
			},
			{
				"id": "bb3dbc4991f7419986ba988e01e374ac",
				"name": "下肢撞桩法",
				"timePeriod": "运动"
			}
		],
		"type": "动"
	},
	{
		"principle": "\\t气功减肥可通过导引煦气，调整人体气血，使体内分泌系统处于良好的状态。本功法通过呼吸的调整达到减肥健美的目的。",
		"methods": [
			{
				"id": "5185c66ff6bf4248bdf68fc5d026e360",
				"name": "收腹减肥气功",
				"timePeriod": "休闲2"
			},
			{
				"id": "7e155e9d67b34d49ae94c58a76363d98",
				"name": "顺腹式呼吸法",
				"timePeriod": "休闲3"
			},
			{
				"id": "e55652cbd2514d0fa49344ba2bb3fd33",
				"name": "龙游功",
				"timePeriod": "休闲1"
			},
			{
				"id": "f9d415fdb18f4d8cacec202b932f969f",
				"name": "逆腹式呼吸法",
				"timePeriod": "休闲4"
			}
		],
		"type": "静"
	},
	{
		"principle": "\\t吹气球法利用吸气和吹气，使胃产生饱足感，从而抑制大脑中的饥饿中枢，降低食欲，减少食物的摄入，以达到减肥的目的。吹气时，胸、腹、膈肌等处的肌肉都会参与运动，增加热量的消耗，从而减少脂肪的堆积",
		"methods": [
			{
				"id": "ecf79a928b014926929f18c2c31914f9",
				"name": "唱歌",
				"timePeriod": "休闲3"
			},
			{
				"id": "4595ed39f08741718278d0d653fbc4e9",
				"name": "吹气球",
				"timePeriod": "休闲1"
			}
		],
		"type": "娱乐"
	}
]


/**
 * 我的问题
 */
@observer
export default class MyQuestion extends PureComponent {

	render() {
		return (
			<Container>
				<Header {...this.props}/>
				<Content delay>
					<View>
						<Text style={styles.title}>我的问题</Text>
					</View>
					<MyDiseaseList data={myDiseaseData} onItemPress={(item)=>Actions.diseaseDetail(item)}/>
					<DiseaseMethodTabView data={diseaseMethodData}/>
				</Content>
			</Container>
		)
	}

	componentDidMount() {
	}
}

const styles = {
	title: {
		fontSize: theme.DefaultFontSize,
		color: '#FFF',
		fontWeight: '400',
		marginTop: 10,
		marginBottom: 10,
		marginLeft: 12,
	}
}
