import React, {PureComponent} from "react";
import {View, Image,ScrollView, DeviceEventEmitter,Dimensions,ScrollViewAppRegistry, StyleSheet} from "react-native";
import {connect} from "react-redux";
import {Container, Header, Content, Separator} from "../../components/index";
import {Left, Right, Body, ListItem, Text, Icon,Button} from "native-base";
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';
import {Select, Option} from "react-native-chooser";
import {toast} from "../../utils/index"
/**
 * 我的能量场 > 资料填写
 */
class EnergyQuestionnaire extends PureComponent {
	constructor(){
		 super()
		 this.state = {
				 text: '',
			 canada: ''
		 }
		 this.onSelect = this.onSelect.bind(this)
	}

	 onSelect(index, value){
		 this.setState({
			 text: `Selected index: ${index} , value: ${value}`
		 })
	 }

	Select(data) {

		alert(data);
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
						<View style={styles.View}>
							<Button style={styles.Btn}>
								<Text>完整保存</Text>
							</Button>
						</View>
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
					{item.items.map((item,index) => this.renderRadioItem(item,index))}
				</RadioGroup>

				)
		}else if(item.type==2){
			ppp=(<Select
					onSelect = {this.Select.bind(this)}
					defaultText  = "Select Me Please"
					style = {{borderWidth : 1, borderColor : "green"}}
					textStyle = {{}}
					backdropStyle  = {{backgroundColor : "#d3d5d6"}}
					optionListStyle = {{backgroundColor : "#F5FCFF"}}
					>
					{item.items.map((item,index) => this.renderSelectItem(item,index))}
				</Select>

			)
		}else if(item.type==3){
			ppp=(
				<View style={{flexDirection:'row',justifyContent:'space-between',flex:1,width:Dimensions.get('window').width/4*3-20}}>
					<Left>
						<Text note>{item.value}</Text>
					</Left>
					<Right>
						<Icon active name="ios-arrow-forward"/>
					</Right>

				</View>
			)
		}
		return(
			<ListItem style={styles.row} key={indx}>
				<View style={{width:Dimensions.get('window').width/4*1}}>
					<Text style={{textAlign:'right'}}>{item.name+':'}</Text>
				</View>
				<View style={{width:Dimensions.get('window').width/4*3}} >
					{ppp}

				</View>
			</ListItem>
		)
	}
	renderRadioItem(item,index) {
		return (
			<RadioButton Checked={true} value={item} key={index} style={{width: 86}}>
				<Text>{item}</Text>
			</RadioButton>
		)
	}
	renderSelectItem(item,index) {
		return (
			<Option key={index} value={item}>{item}</Option>
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
	},
	View:{
		flexDirection:'row',
		height:80,
		justifyContent:'space-around'
	},
	Btn:{
		marginTop:30,
		width:100,
		height:30,
		justifyContent:'center'
	}
};

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(EnergyQuestionnaire);
