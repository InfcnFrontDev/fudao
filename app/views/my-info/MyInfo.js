import React, {PureComponent} from "react";
import {ScrollView} from "react-native";
import {connect} from "react-redux";
import {ListItem, Body, Right, View, Text, Icon} from "native-base";
import {Container, Content, Separator} from "../../components/index";
import Header from "../../components/header/BaseHeader";
import {updateUserInfo} from "../../actions/user";
import {dialogs} from "../../utils/index";

const groups = [
	{
		title: '基本信息',
		items: [
			{
				title: '姓名',
				field: 'title',
				type: 'input',
			},
			{
				title: '性别',
				field: 'sex',
				type: 'singleChoice',
				items: [
					'男', '女'
				],
			},
			{
				title: '出生日期',
				field: 'birthdate',
				type: 'date',
			},
			{
				title: '身高',
				field: 'tops',
				type: 'input',
			}
		]
	},
	{
		title: '病史',
		items: [
			{
				title: '个人史',
				field: 'personal_history',
				type: 'multiChoice',
				items: [
					'肠道神经或肌肉病变', '先天性巨结肠', '肠道肿瘤', '炎症性肠病', '甲状腺功能减退症', '糖尿病', '周围血管病', '结缔组织病', '淀粉样变性', '脊髓损伤', '帕金森病', '精神病',
					'抑郁症', '神经性厌食', '文化程度低', '脑卒中', '脑内血管病变', '头部外伤', '血糖长期控制不达标', '胰岛素抵抗', '长期接触铅等有毒物质', '血脂异常', '高胆固醇血症',
					'脑动脉粥样硬化', '心肌梗死', '心房纤颤', '充血性心力衰竭', '落枕', '冠心病', '高血压', '哮喘', '呼吸道感染', '肺结核', '慢阻肺急性加重', '呼吸系统疾病',
					'突发或者急性发作的局灶性神经系统疾病', '外伤', '出血', '手术', '卒中', '肾脏病', '血液病', '慢性疼痛', '自杀', '记忆力减退', '精神疾病', '跌倒或骨折', '甲状腺功能亢进'
				],
			},
			{
				title: '家族史',
				field: 'family_history',
				type: 'multiChoice',
				items: [
					'痴呆', '肥胖', '骨质疏松', '慢阻肺', '呼吸系统疾病', '痛风', '自杀', '高血压', '早发心血管病'
				],
			},
			{
				title: '婚育史',
				field: 'obstetrical_history',
				type: 'multiChoice',
				items: ['多育'],
			},
			{
				title: '用药史',
				field: 'medication_history',
				type: 'multiChoice',
				items: [
					'阿片制剂', '精神类药', '抗惊厥药', '钙通道拮抗剂', '抗胆碱能药', '滥用泻药', '抗凝血药物', '抗血小板药物', '抗抑郁药', '中枢兴奋性药物',
					'镇痛药', '镇静药', '茶碱类药', '类固醇', '酒精', '肿瘤放化疗', '影响骨代谢疾病药物', '长期服用避孕药等药物'
				],
			}
		]
	},
	{
		title: '生活习惯',
		items: [
			{
				title: '饮食',
				field: 'diet',
				type: 'multiChoice',
				items: [
					'高脂肪饮食', '饮食不规律', '含纤维食物摄入过少', '喜欢辛辣食物', '多食煎炸类食物', '暴饮暴食', '夜间加餐', '常吃零食',
					'饮食缺钙', '饱餐', '饮过量咖啡', '饮食过咸'
				],
			},
			{
				title: '运动',
				field: 'motion',
				type: 'multiChoice',
				items: [
					'缺乏运动', '长时间保持同一姿势'
				],
			},
			{
				title: '睡眠',
				field: 'sleep',
				type: 'multiChoice',
				items: [
					'睡眠姿势不当', '睡眠不足', '入睡困难', '睡眠维持障碍', '早醒', '睡眠质量下降'
				],
			},
			{
				title: '吸烟',
				field: 'smoke',
				type: 'multiChoice',
				items: ['吸烟'],
			},
			{
				title: '饮酒',
				field: 'drink',
				type: 'multiChoice',
				items: ['长期酗酒', '过量饮酒'],
			}
		]
	},
	{
		title: '长期精神状况',
		items: [
			{
				title: '精神状况',
				field: 'mental_state',
				type: 'multiChoice',
				items: [
					'紧张', '疲劳', '精神状态异常', '忧郁', '注意力不易集中', '记忆力减退', '情绪波动大', '兴趣、 精力减退', '长期注意力高度集中'
				]
			}
		]
	}
];

/**
 * 我的基本信息
 */
class MyInfo extends PureComponent {

	state = {}

	render() {
		let {loginUser} = this.props;
		return (
			<Container>
				<Header {...this.props}/>
				<Content style={styles.content}>
					<ScrollView>
						{groups.map(group => this.renderGroup(group))}
					</ScrollView>
				</Content>
			</Container>
		);
	}

	renderGroup(group) {
		return (
			<View key={group.title}>
				<Separator title={group.title}/>
				<View>
					{group.items.map(item => this.renderItem(item))}
				</View>
			</View>
		)
	}

	renderItem(item) {
		let {loginUser} = this.props;
		return (
			<ListItem key={item.title} icon onPress={() => this.editItem(item)}>
				<Body>
				<Text>{item.title}</Text>
				</Body>
				<Right>
					<Text note>{this.substr(loginUser[item.field])}</Text>
					<Icon active name="ios-arrow-forward"/>
				</Right>
			</ListItem>
		)
	}

	editItem(item) {
		let {dispatch, loginUser} = this.props;
		if (item.type == 'singleChoice') {
			dialogs.showDialog({
				title: item.title,
				items: item.items,
				selectedIndex: loginUser[item.field],
				itemsCallbackSingleChoice: (id, text) => dispatch(updateUserInfo(loginUser.appid, item.field, id))
			})
		} else if (item.type == 'multiChoice') {

			// text -> id
			let selectedIndicesText = [], selectedIndicesId = [];
			try {
				selectedIndicesText = loginUser[item.field].split(',');
				selectedIndicesId = selectedIndicesText.map((t) => item.items.findIndex((tt) => tt == t));
			} catch (e) {
			}

			dialogs.showDialog({
				title: item.title,
				items: item.items,
				selectedIndices: selectedIndicesId,
				positiveText: "确定",
				itemsCallbackMultiChoice: (id, text) => dispatch(updateUserInfo(loginUser.appid, item.field,
					text.filter((t) => t != null && t != '').join(',')))
			})
		}
	}


	substr(str) {
		if (str.length > 10)
			str = str.substr(0, 10) + '...';

		return str
	}
}

const styles = {
	content: {backgroundColor: '#FFF'},
}

const mapStateToProps = state => ({
	loginUser: state.userStore.loginUser
});
export default connect(mapStateToProps)(MyInfo);
