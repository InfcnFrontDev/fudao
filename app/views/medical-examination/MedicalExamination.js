import React, {PureComponent} from "react";
import {ScrollView, DatePickerAndrofield, ListView} from "react-native";
import {ListItem, Body, Right, Text, Icon} from "native-base";
import {Container, Content, Separator, Header, Loading} from "../../components/index";

/**
 * 体检信息
 */
export default class MedicalExamination extends PureComponent {

	state = {
		dataSource: new ListView.DataSource({
			rowHasChanged: (row1, row2) => row1 !== row2,
			sectionHeaderHasChanged: (section1, section2) => section1 !== section2,
		}),
		rowsAndSections: {}
	}

	componentDidMount() {
		this.fetchMedicalExaminationList()
	}

	fetchMedicalExaminationList() {
		request.getJson(urls.apis.MEDICALEXAMINATION_GETMEDICALINFORMATIONLIST)
			.then((result) => {
				if (result.ok) {
					this.setState({
						rowsAndSections: result.obj
					})
				}
			});
	}


	render() {
		let {isFetching, rowsAndSections} = this.state;
		return (
			<Container>
				<Header {...this.props}/>
				<Content delay white>
					{!isFetching &&
					<ListView
						dataSource={this.state.dataSource.cloneWithRowsAndSections(rowsAndSections)}
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
		let {rowsAndSections} = this.state;
		return (
			<ListItem
				key={rowData.id}
				icon
				onPress={() => this.editItem(rowData, sectionId)}
				last={rowId == rowsAndSections[sectionId].length - 1}
			>
				<Body>
				<Text style={{fontSize: theme.fontSizeH5}}>{rowData.name}</Text>
				</Body>
				<Right>
					<Text note>{rowData.value}</Text>
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
		// 当前编辑项
		this.curentItem = item;
		this.curentGroup = group;

		if (item.items)
			if (item.items[0] == "阴性") {
				item.limit = 'yinx_yangx';
			} else if (item.items[1] == "色弱") {
				item.limit = 'zc_sr_sm';
			} else if (item.items[1] == "异常") {
				item.limit = 'zc_yc';
			} else if (item.items[1] == "齐" || item.items[1] == "不齐") {
				item.limit = 'qi_bqi';
			}
		if (item.inputType == "1") {
			tools.showDialog({
				title: item.name,
				input: {
					hint: item.name,
					prefill: "",
					allowEmptyInput: false,
					keyboardType: 'numeric',
					maxLength: 10,
					callback: (id, text) => this._yanzheng(id, item.id, item.inputType)
				}
			});
		} else if (item.inputType == "2") {
			tools.showDialog({
				title: item.name,
				input: {
					hint: item.name,
					prefill: "",
					allowEmptyInput: false,
					keyboardType: 'default',
					maxLength: 10,
					callback: (id, text) => this._yanzheng(id, item.id, item.inputType)
				}
			});
		} else if (item.inputType == "3") {
			let selectedIndex = 0;
			let value = item.value;
			if (value == "阴性" || value == "正常" || value == "齐") {
				selectedIndex = 0
			} else if (value == "阳性" || value == "异常" || value == "色弱" || value == "不齐") {
				selectedIndex = 1
			} else if (value == "色盲") {
				selectedIndex = 2
			}
			tools.showDialog({
				title: item.name,
				items: item.items,
				selectedIndex: selectedIndex,
				itemsCallbackSingleChoice: (id, text) => this._singleChoice(id, item.id, item.limit)
			})
		}
	}

	_yanzheng(id, Id, inputType) {
		if (inputType == '1') {
			if (this.reg("^[0-9]*$", id)) {
				this.updataMedicalExamination(Id, id);
			} else {
				tools.showToast("请输入数字")
			}
		} else if (inputType == '2') {
			this.updataMedicalExamination(Id, id)
		} else if (inputType == '4') {
			this.reg("^[0-9]*\/[0-9]*$", id)
			if (this.reg("^[0-9]*\/[0-9]*$", id)) {
				this.updataMedicalExamination(Id, id)
			} else {
				tools.showToast("请输入,高压/低压")
			}
		}

	}

	_singleChoice(id, Id, limit) {
		let value;
		if (limit == 'yinx_yangx') {
			if (id == 0) {
				value = "阴性"
			} else {
				value = "阳性"
			}
		} else if (limit == 'zc_sr_sm') {
			if (id == 0) {
				value = "正常"
			} else if (id == 1) {
				value = "色弱"
			} else {
				value = "色盲"
			}
		} else if (limit == 'zc_yc') {
			if (id == 0) {
				value = "正常"
			} else {
				value = "异常"
			}
		} else if (limit == 'qi_bqi') {
			if (id == 0) {
				value = "齐"
			} else {
				value = "不齐"
			}
		}
		this.updataMedicalExamination(Id, value)
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

	updataMedicalExamination(name, value) {
		// 更新本地
		let {rowsAndSections} = this.state;
		this.curentItem.value = value;
		this.setState({
			rowsAndSections: {...rowsAndSections}
		})

		// 更新服务器数据
		request.getJson(urls.apis.MEDICALEXAMINATION_UPDATAMEDICALINFORMATIONRESULT, {
			medicalInformationId: name,
			value: value
		})
			.then((result) => {
				if (result.ok) {
					//tools.showToast("修改成功");
				}
			});
	}
}

const styles = {};
