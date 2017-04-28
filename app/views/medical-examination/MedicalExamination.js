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
		let {medicalExaminationGroup} = medicalExaminationStore
		console.log(rowData)
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
					<Text note>{''}</Text>
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
		if (item.type == 'input') {
			tools.showDialog({
				title: item.title,
				input: {
					hint: item.title,
					prefill: "",
					allowEmptyInput: false,
					keyboardType: 'numeric',
					maxLength: 10,
					callback: (id, text) => this._yanzheng(loginUser.appid, item.field, group.tableName, id, item.limit)
				}
			});

		} else if (item.type == 'singleChoice') {
			let selectedIndex = 0;
			let index = '';
			try {
				let value = tab[item.field];
				selectedIndex = _.isNumber(value) ? value : 0;
			} catch (e) {
			}

			tools.showDialog({
				title: item.title,
				items: item.items,
				selectedIndex: selectedIndex,
				itemsCallbackSingleChoice: (id, text) => dispatch(updateUserCheck(loginUser.appid, item.field, group.tableName, id, item.limit))
			})
		}
	}

	_yanzheng(appid, field, tableName, id, limit) {
		let {dispatch} = this.props;
		if (limit == 'number') {
			if (this.reg("^[0-9]*$", id)) {
				dispatch(updateUserCheck(appid, field, tableName, id))
			} else {
				toast.show("请输入数字")
			}
		} else if (limit == 'text') {
			dispatch(updateUserCheck(appid, field, tableName, id))
		} else if (limit == 'percent') {
			this.reg("^[0-9]*\/[0-9]*$", id)
			if (this.reg("^[0-9]*\/[0-9]*$", id)) {
				dispatch(updateUserCheck(appid, field, tableName, id))
			} else {
				toast.show("请输入,高压/低压")
			}
		}

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
