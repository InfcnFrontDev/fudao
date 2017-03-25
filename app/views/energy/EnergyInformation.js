import React, {PureComponent} from "react";
import {View, Image,ScrollView, DeviceEventEmitter,Dimensions,ScrollViewAppRegistry, StyleSheet} from "react-native";
import {connect} from "react-redux";
import {Container, Header, Content, Separator} from "../../components/index";
import {Left, Right, Body, ListItem, Text, Icon,Button,Picker} from "native-base";
import GroupSelectModal from "./components/GroupSelectModal";

import {toast} from "../../utils/index"
let items1 = [
	{type: 'A', title: '安'},
	{type: 'B', title: '白'},
	{type: 'C', title: '蔡'},
	{type: 'C', title: '曹'},
	{type: 'C', title: '曾'},
	{type: 'C', title: '常'},
	{type: 'C', title: '陈'},
	{type: 'C', title: '程'},
	{type: 'C', title: '崔'},
	{type: 'D', title: '戴'},
	{type: 'D', title: '邓'},
	{type: 'D', title: '丁'},
	{type: 'D', title: '董'},
	{type: 'D', title: '杜'},
	{type: 'D', title: '段'},
	{type: 'F', title: '樊'},
	{type: 'F', title: '范'},
	{type: 'F', title: '方'},
	{type: 'F', title: '冯'},
	{type: 'F', title: '傅'},
	{type: 'G', title: '高'},
	{type: 'G', title: '葛'},
	{type: 'G', title: '龚'},
	{type: 'G', title: '顾'},
	{type: 'G', title: '郭'},
	{type: 'H', title: '韩'},
	{type: 'H', title: '郝'},
	{type: 'H', title: '何'},
	{type: 'H', title: '贺'},
	{type: 'H', title: '洪'},
	{type: 'H', title: '侯'},
	{type: 'H', title: '胡'},
	{type: 'H', title: '黄'},
	{type: 'J', title: '贾'},
	{type: 'J', title: '江'},
	{type: 'J', title: '姜'},
	{type: 'J', title: '蒋'},
	{type: 'J', title: '金'},
	{type: 'K', title: '康'},
	{type: 'K', title: '孔'},
	{type: 'L', title: '赖'},
	{type: 'L', title: '蓝'},
	{type: 'L', title: '雷'},
	{type: 'L', title: '黎'},
	{type: 'L', title: '李'},
	{type: 'L', title: '梁'},
	{type: 'L', title: '廖'},
	{type: 'L', title: '林'},
	{type: 'L', title: '刘'},
	{type: 'L', title: '龙'},
	{type: 'L', title: '卢'},
	{type: 'L', title: '鲁'},
	{type: 'L', title: '陆'},
	{type: 'L', title: '罗'},
	{type: 'L', title: '吕'},
	{type: 'M', title: '马'},
	{type: 'M', title: '毛'},
	{type: 'M', title: '孟'},
	{type: 'M', title: '莫'},
	{type: 'N', title: '倪'},
	{type: 'N', title: '聂'},
	{type: 'N', title: '牛'},
	{type: 'P', title: '潘'},
	{type: 'P', title: '庞'},
	{type: 'P', title: '彭'},
];
/**
 * 我的能量场 > 资料填写
 */
const Item = Picker.Item;
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
		type:1
	},
	{
		name: '高校类型', // 指标名称
		items: [
			'一本', '二本', '三本', '专科'
		], // 指标选项
		value: '一本',
		type:1
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
		type:1

	},
];
class EnergyQuestionnaire extends PureComponent {
	constructor(props){
		 super(props)
		 this.state = {
			 selectedItem: undefined,
			 selected1: 'key1',
			 results: {
				 items: []
			 },
			 selected:[],
			 flag:false,
		 }

	}



	onValueChange (value) {
		this.setState({
			selected1 : value
		});
	}
	componentWillMount(){
		let arr=[];
		data.map((item,index)=>
			arr.push(item.value)
		)
		this.setState({
			selected:arr
		})
	}
	render() {

		return (
			<Container>
				<Header {...this.props} flag={this.state.flag}/>
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
					<GroupSelectModal ref={(e)=>this._groupSelectModal = e}/>

				</Content>
			</Container>
		)
	}

	renderGroup(item,index){
		let {selected} = this.state;
		let ppp=(null);
		// toast.show(JSON.stringify(item.type))
		if(item.type==1){
			ppp=(
			<ListItem style={styles.row}   >
				<Right style={{width:Dimensions.get('window').width/3*1}}>
					<Text>{item.name+':'}</Text>
				</Right>
				<View style={{width:Dimensions.get('window').width/3*2}} >
					<Picker
						iosHeader="Select one"
						mode="dropdown"
						selectedValue={this.state.selected1}
						onValueChange={this.onValueChange.bind(this)}>
						{item.items.map((item,index) => this.renderRadioItem(item,index))}
					</Picker>
				</View>
			</ListItem>
				)
		}else if(item.type==3){

			ppp=(
				<ListItem style={styles.row} onPress={() => this.openSelectBox1(index)} >
					<Right style={{width:Dimensions.get('window').width/3*1}}>
						<Text>{item.name+':'}</Text>
					</Right>
					<View style={{width:Dimensions.get('window').width/3*2}} >
						<View style={{flexDirection:'row',justifyContent:'space-between',flex:1,width:Dimensions.get('window').width/4*3-40}}
						>
							<Left>
								<Text>{selected[index]}</Text>
							</Left>
							<Right>
								<Icon active name="ios-arrow-forward"/>
							</Right>

						</View>
					</View>
				</ListItem>

			)
		}
		return(
			<View key={index}>
				{ppp}
			</View>
		)
	}
	openSelectBox1(index) {

		this._groupSelectModal.show(items1, (rowData) => {
			let arr=this.state.selected;
			arr.splice(index,1,rowData.title)
			this.setState({
				selected: arr,
				flag:!this.state.flag
			})
			toast.show(JSON.stringify(this.state.selected));

		});
	}
	renderRadioItem(item,index) {
		return (
			<Item label={item} key={index} value={item+index}/>
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
