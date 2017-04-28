import React, {PureComponent} from "react";
import {observer} from "mobx-react/native";
import {Actions} from "react-native-router-flux";
import {View, Image, DeviceEventEmitter, ScrollView, Text} from "react-native";
import {Container, Content, Header} from "../../components/index";
import MyDiseaseList from "./components/MyDiseaseList";
import AllDiseaseTabView from "./components/AllDiseaseTabView";

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

let allDiseaseData = {
	'liaoSheng': {
		"意外伤害": [
			{
				"id": "077fbcc94bd843f7a308519bc4f9b532",
				"img": "/icons/disease/dianxian.png",
				"name": "癫痫",
			},
		],
		"日常问题": [
			{
				"id": "131f725025e04c1485c9463bcf0e8b86",
				"img": "/icons/disease/toutong.png",
				"name": "头痛",
			},
			{
				"id": "16b6ead6e3824c319fc67c5e4192c1b0",
				"img": "/icons/disease/kouqiangkuiyang.png",
				"name": "口腔溃疡",
			},
			{
				"id": "1fd3a62662d24e6390b5e535b0bdf6c4",
				"img": "/icons/disease/fuxie.png",
				"name": "腹泻",
			},
		],
		"衰老问题": [
			{
				"id": "17f7d8511be64daf985b883c1dddb1be",
				"img": "/icons/disease/fanyingchidun.png",
				"name": "反应迟钝",
			},
			{
				"id": "19f67244a0a342c9b57b755c766423c1",
				"img": "/icons/disease/feipang.png",
				"name": "肥胖",
			},
			{
				"id": "2312515984574208925f87820a72fc75",
				"img": "/icons/disease/dabianshijin.png",
				"name": "大便失禁",
			},
			{
				"id": "245719653ed042ff9b41abfdfc26a666",
				"img": "/icons/disease/niaoshijin.png",
				"name": "尿失禁",
			},
			{
				"id": "081f638682084b558d2b3ba08ae89dad",
				"img": "/icons/disease/kouqiangganzao.png",
				"name": "口腔干燥",
			},
			{
				"id": "103e3f772cc042a78f93d33db53521c7",
				"img": "/icons/disease/pifusaoyang.png",
				"name": "皮肤瘙痒",
			}
		]
	},
	"liaoXin": [
		{
			"id": "077fbcc94bd843f7a308519bc4f9b532",
			"img": "/icons/disease/dianxian.png",
			"name": "癫痫",
		},
		{
			"id": "131f725025e04c1485c9463bcf0e8b86",
			"img": "/icons/disease/toutong.png",
			"name": "头痛",
		},
		{
			"id": "16b6ead6e3824c319fc67c5e4192c1b0",
			"img": "/icons/disease/kouqiangkuiyang.png",
			"name": "口腔溃疡",
		},
		{
			"id": "1fd3a62662d24e6390b5e535b0bdf6c4",
			"img": "/icons/disease/fuxie.png",
			"name": "腹泻",
		},
		{
			"id": "17f7d8511be64daf985b883c1dddb1be",
			"img": "/icons/disease/fanyingchidun.png",
			"name": "反应迟钝",
		},
		{
			"id": "19f67244a0a342c9b57b755c766423c1",
			"img": "/icons/disease/feipang.png",
			"name": "肥胖",
		},
		{
			"id": "2312515984574208925f87820a72fc75",
			"img": "/icons/disease/dabianshijin.png",
			"name": "大便失禁",
		},
		{
			"id": "245719653ed042ff9b41abfdfc26a666",
			"img": "/icons/disease/niaoshijin.png",
			"name": "尿失禁",
		},
		{
			"id": "081f638682084b558d2b3ba08ae89dad",
			"img": "/icons/disease/kouqiangganzao.png",
			"name": "口腔干燥",
		},
		{
			"id": "103e3f772cc042a78f93d33db53521c7",
			"img": "/icons/disease/pifusaoyang.png",
			"name": "皮肤瘙痒",
		}
	]
}

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
					<MyDiseaseList
						data={myDiseaseData}
						onItemPress={(item)=>Actions.diseaseDetail({title: item.name, data: item})}/>
					<AllDiseaseTabView
						data={allDiseaseData}
						onItemPress={(item)=>Actions.diseaseDetail({title: item.name, data: item})}/>
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
