import React, {PureComponent} from "react";
import {ScrollView, DatePickerAndrofield, ListView} from "react-native";
import {observer} from "mobx-react/native";
import {ListItem, Body, Right, Text, Icon} from "native-base";
import {Container, Content, Separator, Header, Loading} from "../../components/index";
import medicalExaminationStore from "../../mobx/medicalExaminationStore";

/**
 * 体检信息
 */
@observer
export default class MedicalExamination extends PureComponent {

	state = {
		dataSource: new ListView.DataSource({
			rowHasChanged: (row1, row2) => row1 !== row2,
			sectionHeaderHasChanged: (section1, section2) => section1 !== section2,
		})
	}

	componentDidMount() {
		medicalExaminationStore.fetchMedicalExaminationList()
	}


	render() {
		const {isFetching, medicalExaminationList} = medicalExaminationStore
		let medicalExaminationGroup = _.groupBy(medicalExaminationList, (n) => n.type);
		return (
			<Container>
				<Header {...this.props}/>
				<Content delay white>
					{!isFetching &&
					<ListView
						dataSource={this.state.dataSource.cloneWithRowsAndSections(medicalExaminationGroup)}
						renderRow={this._renderRow.bind(this)}
						initialListSize={12}
						pageSize={20}
						renderSectionHeader={this._renderSectionHeader.bind(this)}
						enableEmptySections
					/>
					}
					<Loading isShow={isFetching}/>
				</Content>
			</Container>
		)
	}

	_renderRow(rowData, sectionId, rowId) {
		let {medicalExaminationGroup} = medicalExaminationStore;
		console.log(rowData);
		return (
			<ListItem
				key={rowData.id}
				icon
				onPress={() => this.editItem(rowData, sectionId)}
				last={rowId == medicalExaminationGroup[sectionId].length - 1}
			>
				<Body>
				<Text style={{fontSize: theme.fontSizeH5}}>{rowData.name}</Text>
				</Body>
				<Right>
					<Text note>{rowData.value?rowData.value:""}</Text>
					<Icon active name="ios-arrow-forward"/>
				</Right>
			</ListItem>
		)
	}

	_renderSectionHeader(sectionData, sectionID) {
		return (
			<Separator title={sectionID}/>
		)
	}

	editItem(item, group) {
		if (item.limit =="number") {
			tools.showDialog({
				title: item.name,
				input: {
					hint: item.name,
					prefill: "",
					allowEmptyInput: false,
					keyboardType:'numeric',
					maxLength: 10,
					callback: (id, text) => this._yanzheng(id,item.id, item.limit)
				}
			});
		}else if (item.limit =="text") {
			tools.showDialog({
				title: item.name,
				input: {
					hint: item.name,
					prefill: "",
					allowEmptyInput: false,
					keyboardType: 'default',
					maxLength: 10,
					callback: (id, text) => this._yanzheng(id,item.id, item.limit)
				}
			});
		} else if (item.inputType == "3") {
			let selectedIndex = 0;
			let value = item.value;
			if(value=="阴性"||value=="正常"||value=="齐"){
				selectedIndex=0
			}else if(value=="阳性"||value=="异常"||value=="色弱"||value=="不齐"){
				selectedIndex=1
			}else if(value=="色盲"){
				selectedIndex=2
			}
			tools.showDialog({
				title: item.name,
				items: item.items,
				selectedIndex: selectedIndex,
				itemsCallbackSingleChoice: (id, text) =>  this._singleChoice(id,item.id, item.limit)
			})
		}
	}

	_yanzheng(id,Id,limit) {
		if (limit == 'number') {
			if (this.reg("^[0-9]*$", id)) {
				medicalExaminationStore.updataMedicalExamination(Id,id);
			} else {
				tools.showToast("请输入数字")
			}
		} else if (limit == 'text') {
			medicalExaminationStore.updataMedicalExamination(Id,id)
		} else if (limit == 'percent') {
			this.reg("^[0-9]*\/[0-9]*$", id)
			if (this.reg("^[0-9]*\/[0-9]*$", id)) {
				medicalExaminationStore.updataMedicalExamination(Id,id)
			} else {
				tools.showToast("请输入,高压/低压")
			}
		}

	}
	_singleChoice(id,Id,limit){
		let value;
		if(limit== 'yinx_yangx'){
			if(id==0){
				value="阴性"
			}else{
				value="阳性"
			}
		}else if(limit=='zc_sr_sm'){
			if(id==0){
				value="正常"
			}else if(id==1) {
				value="色弱"
			}else{
				value="色盲"
			}
		}else if(limit=='zc_yc'){
			if(id==0){
				value="正常"
			}else{
				value="异常"
			}
		}else if(limit=='qi_bqi'){
			if(id==0){
				value="齐"
			}else{
				value="不齐"
			}
		}
		medicalExaminationStore.updataMedicalExamination(Id,value)
	}
	reg(zhengze, value) {
		var re = new RegExp(zhengze);
		var result = re.test(value);
		if (!result) {
			return false;
		} else {
			return true;
		}
	}
}

const styles = {};
