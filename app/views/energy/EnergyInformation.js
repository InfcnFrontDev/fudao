import React, {PureComponent} from "react";
import {View, Image, DeviceEventEmitter,Dimensions,ScrollView} from "react-native";
import {connect} from "react-redux";
import {Container, Header, Content, Separator} from "../../components/index";
import {Left, Right, Body, ListItem, Text, Icon} from "native-base";
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

/**
 * 我的能量场 > 资料填写
 */
class EnergyQuestionnaire extends PureComponent {
	constructor(){
		 super()
		 this.state = {
				 text: ''
		 }
		 this.onSelect = this.onSelect.bind(this)
	}

	 onSelect(index, value){
		 this.setState({
			 text: `Selected index: ${index} , value: ${value}`
		 })
	 }


	render() {
		let data = [
			{
				name: '性别', // 指标名称
				items: [
					'男', '女'
				], // 指标选项
				value: '男',
				type:1
			},
			{
				name: '民族', // 指标名称
				items: [
					'汉', '回'
				], // 指标选项
				value: '汉',
				type:3
			},
			{
				name: '姓氏', // 指标名称
				items: [
					'赵', '钱', '孙', '李', '周', '吴', '郑', '王'
				], // 指标选项
				value: '王',
				type:3
			},
			{
				name: '学历', // 指标名称
				items: [
					'博士', '研究生', '本科', '专科', '高中'
				], // 指标选项
				value: '专科',
				type:2
			},
			{
				name: '高校类型', // 指标名称
				items: [
					'一本', '二本', '三本', '专科', '高中'
				], // 指标选项
				value: '一本',
				type:2
			},
			{
				name: '行业', // 指标名称
				items: {
					'农业': [
						'种值', '种值1', '种值2'
					],
					'农业1': [
						'种值', '种值1', '种值2'
					],
					'农业2': [
						'种值', '种值1', '种值2'
					]
				}, // 指标选项, 分组形式
				value: '种值',
				type:3
			},
			{
				name: '职业', // 指标名称
				items: {
					'农业': [
						'种值', '种值1', '种值2'
					],
					'农业1': [
						'种值', '种值1', '种值2'
					],
					'农业2': [
						'种值', '种值1', '种值2'
					]
				}, // 指标选项, 分组形式
				value: '工程师',
				type:3
			},
			{
				name: '专业', // 指标名称
				items: {
					'农业': [
						'种值', '种值1', '种值2'
					],
					'农业1': [
						'种值', '种值1', '种值2'
					],
					'农业2': [
						'种值', '种值1', '种值2'
					]
				}, // 指标选项, 分组形式
				value: '设计',
				type:3
			},
			{
				name: '双亲情况', // 指标名称
				items: [
					'单亲', '双亲'
				], // 指标选项
				value: '双亲',
				type:1
			},
			{
				name: '家庭情况', // 指标名称
				items: [
					'低收入', '中产', '富人'
				], // 指标选项
				value: '低收入',
				type:1
			},
			{
				name: '感情状态', // 指标名称
				items: [
					'单身', '恋爱', '已婚'
				], // 指标选项
				value: '单身',
				type:1
			},
			{
				name: '宗教', // 指标名称
				items: [
					'无信仰','佛教'
				], // 指标选项, 分组形式
				value: '佛教',
				type:2

			},
		];
		return (
			<Container>
				<Header {...this.props} />
				<Content>
					<Separator title={'请填写您的信息'}/>
					<ScrollView>
						{data.map((item,index)=> this.renderGroup(item,index))}
					</ScrollView>

				</Content>
			</Container>
		)
	}
	renderGroup(item,indx){
		let ppp=(null);
		if(item.type==1){
			ppp=(<RadioGroup
					style={styles.row}
					onSelect = {(inde, value) => this.onSelect(inde, value)}
					selectedIndex = {1}
					color= {'#a1cc01'}
				>
					{item.items.map((item,index) => this.renderItem(item,index))}
				</RadioGroup>

				)
		}
		return(
			<ListItem style={styles.row} key={indx}>
				<View style={{width:Dimensions.get('window').width/4*1}}>
					<Text style={{textAlign:'right'}}>{item.name+':'}</Text>
				</View>
				<View style={{width:Dimensions.get('window').width/4*2}} >
					{ppp}
				</View>
			</ListItem>
		)
	}
	renderItem(item,index) {
		return (

				 <RadioButton Checked={true} value={item} key={index} style={{width:86}}>
					 <Text>{item}</Text>
				 </RadioButton>


		)

	}
}


const styles = {
	row:{
		flexDirection:'row',
		flex:1

	},
	right:{
		flexDirection:'row',
		width:Dimensions.get('window').width/3*2
	}
};

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(EnergyQuestionnaire);
