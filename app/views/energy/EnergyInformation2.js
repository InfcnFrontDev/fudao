import React, {PureComponent} from "react";
import {View, Image, DeviceEventEmitter} from "react-native";
import {connect} from "react-redux";
import {Container, Header, Content} from "../../components/index";
import {Button, Text, Picker, Item} from "native-base";
import GroupSelectModal from "./components/GroupSelectModal";


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

let items2 = [
	{type: '企业型', title: '政府机关及其工作机构负责人'},
	{type: '企业型', title: '司法机关及其工作机构负责人'},
	{type: '企业型', title: '人民代表大会机关及其工作机构负责人'},
	{type: '企业型', title: '街道、乡镇级人大机关及其工作机构负责,人'},
	{type: '企业型', title: '中共党组织负责人'},
	{type: '企业型', title: '民主党派组织负责人'},
	{type: '企业型', title: '社会团体组织负责人（各级各类行业、专业协会,民间组织等）'},
	{type: '企业型', title: '工会、共青团、妇联、工商联、组织负责人'},
	{type: '企业型', title: '企业单位及其工作机构负责人'},
	{type: '企业型', title: '事业单位及其工作机构负责人'},
	{type: '企业型', title: '商业工,作人员'},
	{type: '研究型', title: '社会科学研究人员'},
	{type: '研究型', title: '自然科学研究人员'},
	{type: '研究型', title: '工程技术人员'},
	{type: '研究型', title: '飞机和船舶技术人员'},
	{type: '研究型', title: '医疗卫生技术人员'},
	{type: '研究型', title: '农林牧副渔技术人员'},
	{type: '研究型', title: '科学技术管理人员'},
	{type: '研究型', title: '经济业务人员'},
	{type: '研究型', title: '体育工作人员'},
	{type: '常规型', title: '政府机关的办事人员'},
	{type: '常规型', title: '司法机关的办事人员'},
	{type: '常规型', title: '中共党的机关的行政办事人员'},
	{type: '常规型', title: '社会团体机构的办事人员'},
	{type: '常规型', title: '行政执行人员和行政业务管理人员'},
	{type: '常规型', title: '行政执行人员和业务管理人员'},
	{type: '常规型', title: '人事行政工作人员'},
	{type: '常规型', title: '文化工作人员'},
	{type: '艺术型', title: '文艺工作人员'},
	{type: '社会型', title: '社会工作者'},
	{type: '社会型', title: '法律工作人员'},
	{type: '社会型', title: '教学人员'},
	{type: '社会型', title: '宗教职业者'},
	{type: '社会型', title: '警察'},
	{type: '社会型', title: '军人'},
	{type: '现实型', title: '服务性工作人员'},
	{type: '现实型', title: '生产人员'},
];

let items3 = [
	{type: 'A', title: '阿昌族'},
	{type: 'B', title: '白族'},
	{type: 'B', title: '保安族'},
	{type: 'B', title: '布朗族'},
	{type: 'B', title: '布依族'},
	{type: 'C', title: '朝鲜族'},
	{type: 'D', title: '达斡尔族'},
	{type: 'D', title: '傣族'},
	{type: 'D', title: '德昂族'},
	{type: 'D', title: '东乡族'},
	{type: 'D', title: '侗族'},
	{type: 'D', title: '独龙族'},
	{type: 'E', title: '俄罗斯族'},
	{type: 'E', title: '鄂伦春族'},
	{type: 'E', title: '鄂温克族'},
	{type: 'G', title: '高山族'},
	{type: 'H', title: '哈尼族'},
	{type: 'H', title: '哈萨克族'},
	{type: 'H', title: '汉族'},
	{type: 'H', title: '赫哲族'},
	{type: 'H', title: '回族'},
	{type: 'J', title: '基诺族'},
	{type: 'J', title: '京族'},
	{type: 'J', title: '景颇族'},
	{type: 'K', title: '柯尔克孜族'},
	{type: 'L', title: '拉祜族'},
	{type: 'L', title: '黎族'},
	{type: 'L', title: '傈僳族'},
	{type: 'L', title: '珞巴族'},
	{type: 'M', title: '满族'},
	{type: 'M', title: '毛南族'},
	{type: 'M', title: '门巴族'},
	{type: 'M', title: '蒙古族'},
	{type: 'M', title: '苗族'},
	{type: 'M', title: '仫佬族'},
	{type: 'M', title: '纳西族'},
	{type: 'M', title: '怒族'},
	{type: 'P', title: '普米族'},
	{type: 'Q', title: '羌族'},
	{type: 'S', title: '撒拉族'},
	{type: 'S', title: '畲族'},
	{type: 'S', title: '水族'},
	{type: 'T', title: '塔吉克族'},
	{type: 'T', title: '塔塔尔族'},
	{type: 'T', title: '土家族'},
	{type: 'T', title: '土族'},
	{type: 'W', title: '佤族'},
	{type: 'W', title: '维吾尔族'},
	{type: 'W', title: '乌孜别克族'},
	{type: 'X', title: '锡伯族'},
	{type: 'X', title: '瑶族'},
	{type: 'Y', title: '彝族'},
	{type: 'Y', title: '仡佬族'},
	{type: 'Y', title: '裕固族'},
	{type: 'Z', title: '藏族'},
	{type: 'Z', title: '壮族'},
];


/**
 * 我的能量场 > 资料填写
 */
class EnergyQuestionnaire extends PureComponent {

	state = {
		selected1: undefined,
		selected2: undefined,
		selected3: undefined,
	};

	render() {
		let {selected1, selected2, selected3} = this.state;
		return (
			<Container>
				<Header {...this.props} />
				<Content>
					<View>
						<Button onPress={() => this.openSelectBox1()}>
							<Text>选择1</Text>
						</Button>
						<Text>{selected1}</Text>
					</View>
					<View>
						<Button onPress={() => this.openSelectBox2()}>
							<Text>选择2</Text>
						</Button>
						<Text>{selected2}</Text>
					</View>
					<View>
						<Button onPress={() => this.openSelectBox3()}>
							<Text>选择3</Text>
						</Button>
						<Text>{selected3}</Text>
					</View>
					<GroupSelectModal ref={(e)=>this._groupSelectModal = e}/>
					<Picker
						iosHeader="Select one"
						mode="dropdown"
						selectedValue={this.state.selected1}
						onValueChange={() => this.onValueChange()}>
						<Item label="Wallet" value="key0" />
						<Item label="ATM Card" value="key1" />
						<Item label="Debit Card" value="key2" />
						<Item label="Credit Card" value="key3" />
						<Item label="Net Banking" value="key4" />
					</Picker>
				</Content>
			</Container>
		)
	}

	openSelectBox1() {
		this._groupSelectModal.show(items1, (rowData) => {
			this.setState({
				selected1: rowData.title
			})
		});
	}

	openSelectBox2() {
		this._groupSelectModal.show(items2, (rowData) => {
			this.setState({
				selected2: rowData.title
			})
		});
	}

	openSelectBox3() {
		this._groupSelectModal.show(items3, (rowData) => {
			this.setState({
				selected3: rowData.title
			})
		});
	}
}


const styles = {};

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(EnergyQuestionnaire);
