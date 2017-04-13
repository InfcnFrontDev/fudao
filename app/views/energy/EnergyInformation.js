import React, {PureComponent} from "react";
import {View, Image,ScrollView, DeviceEventEmitter,Dimensions,ScrollViewAppRegistry, StyleSheet} from "react-native";
import {connect} from "react-redux";
import {Container, Header, Content, Separator} from "../../components/index";
import {Left, Right, Body, ListItem, Text, Icon,Button,Picker,Radio} from "native-base";
import {theme,request,urls} from '../../utils/index'
import GroupSelectModal from "./components/GroupSelectModal";
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
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
/*let data111 = [
	{
		name: '性别', // 指标名称
		items: [
			'男', '女'
		], // 指标选项
		value: '男',
		type:2
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
		type:2
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
];*/
class EnergyQuestionnaire extends PureComponent {
	constructor(props){
		 super(props)
		this.select=[];
		 this.state = {
			 selectedItem: undefined,
			 results: {
				 items: []
			 },
			 seleted1:'',
			 selected:this.select,
			 flag:false,
		 }


	}
	componentWillMount(){
		request.getJson(urls.apis.MY_ENEGRYMY_ACTION_INFORMATION,{
			appid:1,
		}).then((data)=>{
			data.obj.templateData.map((item,index)=>{
                    this.select[index]={};
                    this.select[index].name=item.name
            })
			this.setState({
				data:data.obj.templateData,
				selected:this.select
			})

		},(error)=>{
		})

	}

	render() {
        let {data,selected}=this.state;
		if(!data && selected!=[]){
			return (<Container></Container>)
		}else{
			return (
				<Container>
					<Header {...this.props} flag={this.state.flag}/>
					<Content>
						<Separator title={'请填写您的信息'}/>
						<ScrollView>
						{data.map((item,index)=> this.renderGroup(item,index))}
							<View style={styles.View}>
								<Button style={styles.Btn} onPress={this._submmit.bind(this)}>
									<Text>完整保存</Text>
								</Button>
							</View>
						</ScrollView>
						<GroupSelectModal ref={(e)=>this._groupSelectModal = e}/>

					</Content>
				</Container>
			)
		}


	}
//selectedIndex={item.items.indexOf(selected[index].value)}
	renderGroup(item,index){
		let {selected}=this.state;
		// toast.show(JSON.stringify(answer))
		let ppp=(null);
		if(item.items.length>2&&item.items.length<10){
			ppp=(
			<ListItem style={styles.row}   >
				<Right style={{width:theme.deviceWidth/3*1}}>
					<Text>{item.name+':'}</Text>
				</Right>
				<View style={{width:theme.deviceWidth/3*2,height:20,}} >
					<Picker
						iosHeader="Select one"
						mode="dropdown"
						selectedValue={selected[index].value}
						onValueChange={(value)=>this.onValueChange(value,index)}
						style={styles.pick}
					>
						{item.items.map((item,index) => this.renderSelectItem(item,index))}
					</Picker>
				</View>
			</ListItem>
				)
		}else if(item.items.length==2){
			{/*selectedIndex={1}*/}
			ppp=(
				<ListItem style={styles.row}   >
					<Right style={{width:theme.deviceWidth/3*1}}>
						<Text>{item.name+':'}</Text>
					</Right>
					<View style={{width:theme.deviceWidth/3*2}} >
						<RadioGroup
							key={index}
							onSelect = {(index,value) => this.onSelect(index, value)}
							style={{flexDirection:'row',alignItems:'center',height:20}} >
							{item.items.map((item,index) => this.renderRadioItem(item,index))}
						</RadioGroup>
					</View>
				</ListItem>
			)
		}else if(item.items.length>10){

			ppp=(
				<ListItem style={styles.row} onPress={() => this.openSelectBox1(index,item)} >
					<Right style={{width:theme.deviceWidth/3*1}}>
						<Text>{selected[index].name+':'}</Text>
					</Right>
					<View style={{width:theme.deviceWidth/3*2}} >
						<View style={{flexDirection:'row',justifyContent:'space-between',flex:1,width:Dimensions.get('window').width/4*3-40}}
						>
							<Left>
								<Text>{item.selected6}</Text>
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
	openSelectBox1(index,item) {
		this._groupSelectModal.show(item, (rowData) => {
			item.selected6=rowData.title;
            this.select[index].value=item.selected6;
			this.setState({
				selected: this.select,
				flag:!this.state.flag
			})

		});
	}
	renderRadioItem(item,index) {
		return (
			<RadioButton key={index} value={item.title}>
				<Text>{item.title}</Text>
			</RadioButton>
		)

	}
	renderSelectItem(item,index){
		return (
		<Item label={item.title} key={index} value={item.title}/>
		)
	}
	onSelect(index, value){
		if(value=='男'||value=='女'){
			toast.show(JSON.stringify(index),value)
			this.select[0].value=value
			this.setState({
				selected:this.select
			})
		}else if(value=='单亲'||value=='双亲')

			this.select[10].value=value
			this.setState({
				selected:this.select
			})

	}

	onValueChange (value,index) {
		this.select[index].value=value
		this.setState({
			selected:this.select,
            flag:!this.state.flag
		});
	}
	_submmit(){
		toast.show(JSON.stringify(this.state.selected))
	}

}


const styles = {
	row:{
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'center',
		flex:1,
        position:'relative',

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
	},
	pick:{
		padding:0,
        top:-14,
	}
};

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(EnergyQuestionnaire);
