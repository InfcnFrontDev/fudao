import React, {PureComponent} from "react";
import {ScrollView} from "react-native";
import {connect} from "react-redux";
import {ListItem, Body, Right, Text, Icon} from "native-base";
import {Container, Content, GiftedListView, Separator} from "../../components/index";
import Header from "../../components/header/BaseHeader";
import {updateUserInfo} from "../../actions/user";
import {dialogs} from "../../utils/index";


/**
 * 我的基本信息
 */
class MyInfo extends PureComponent {

	state = {
		data: {
			'基本信息': [
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
			],
			'病史': [
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
				},
				{
					title: '用药史',
					field: 'medication_history',
					type: 'multiChoice',
				}
			],
			'生活习惯': [
				{
					title: '饮食',
					field: 'diet',
					type: 'multiChoice',
				},
				{
					title: '运动',
					field: 'motion',
					type: 'multiChoice',
				},
				{
					title: '睡眠',
					field: 'sleep',
					type: 'multiChoice',
				},
				{
					title: '吸烟',
					field: 'smoke',
					type: 'multiChoice',
				},
				{
					title: '饮酒',
					field: 'drink',
					type: 'multiChoice',
				}
			],
			'长期精神状况': [
				{
					title: '精神状况',
					field: 'mental_state',
					type: 'multiChoice',
				}
			]
		}
	}

	render() {
		let {loginUser} = this.props;
		return (
			<Container>
				<Header {...this.props}/>
				<Content style={styles.content}>
					<Text>{loginUser.sex}</Text>
					<GiftedListView
						onFetch={this._onFetch.bind(this)}
						rowView={this._renderRowView.bind(this)}
						firstLoader={true}
						refreshable={true}
						enableEmptySections={true}
						withSections={true}
						sectionHeaderView={this._renderSectionHeaderView.bind(this)}
						pagination={false}
					/>
				</Content>
			</Container>
		);
	}

	_onFetch(page = 1, callback, options) {
		let {loginUser} = this.props;
		callback(this.state.data, {allLoaded: true});
	}

	_renderRowView(item) {
		let {loginUser} = this.props;
		return (
			<ListItem key={item.title} icon onPress={() => this._editItem(item)}>
				<Body>
				<Text>{item.title}</Text>
				</Body>
				<Right>
					<Text field>{loginUser[item.field]}</Text>
					<Icon active name="ios-arrow-forward"/>
				</Right>
			</ListItem>
		)
	}

	_renderSectionHeaderView(sectionData, sectionID) {
		return (
			<Separator title={sectionID}/>
		)
	}

	_editItem(item) {

		if (item.type == 'singleChoice') {
			this.singleChoiceDialog(item);
		}
	}

	singleChoiceDialog(item) {
		let {dispatch, loginUser} = this.props;
		dialogs.showDialog({
			title: item.title,
			items: item.items,
			selectedIndex: 0,
			itemsCallbackSingleChoice: (id, text) => dispatch(updateUserInfo(loginUser.appid, item.field, id))
		})
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
