import React, {PureComponent} from "react";
import {ListView, DatePickerAndroid} from "react-native";
import {observer} from "mobx-react/native";
import {ListItem, Body, Right, Text, Icon} from "native-base";
import {Container, Content, Header, Separator} from "../../components/index";
import rowsData from "./data";
import userStore from "../../mobx/userStore";

/**
 * 个人信息
 */
@observer
export default class Personal extends PureComponent {

	state = {
		dataSource: new ListView.DataSource({
			rowHasChanged: (row1, row2) => row1 !== row2,
			sectionHeaderHasChanged: (section1, section2) => section1 !== section2,
		})
	}

	render() {
		let {loginUser} = userStore;
		_.values(rowsData).forEach((item) => {
			item.forEach((rowData) => {
				rowData.value = loginUser[rowData.field] || ''
			})
		})
		return (
			<Container>
				<Header {...this.props}/>
				<Content delay white>
					<ListView
						dataSource={this.state.dataSource.cloneWithRowsAndSections(rowsData)}
						renderRow={this._renderRow.bind(this)}
						pageSize={20}
						renderSectionHeader={this._renderSectionHeader.bind(this)}
					/>
				</Content>
			</Container>
		)
	}

	_renderRow(rowData, sectionId, rowId) {
		return (
			<ListItem
				key={rowData.title}
				icon
				onPress={() => this.editItem(rowData)}
				last={rowId == rowsData[sectionId].length - 1}
			>
				<Body>
				<Text style={{fontSize: theme.fontSizeH5}}>{rowData.title}</Text>
				</Body>
				<Right>
					<Text note>{this.substr(rowData.value)}</Text>
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

	editItem(item) {
		let {loginUser} = userStore;

		if (item.cannotEdit) {
			tools.showToast(item.title + "不能编辑");
			return;
		}

		if (item.type == 'singleChoice') {
			let selectedIndex = 0;

			try {
				let value = loginUser[item.field];
				selectedIndex = _.isNumber(value) ? value : 0;
			} catch (e) {
			}

			tools.showDialog({
				title: item.title,
				items: item.items,
				selectedIndex: selectedIndex,
				itemsCallbackSingleChoice: (id, text) => userStore.updateUserInfo(item.field, id)
			})
		} else if (item.type == 'multiChoice') {

			// text -> id
			let selectedIndicesText = [], selectedIndicesId = [];
			try {
				selectedIndicesText = loginUser[item.field].split(',');
				selectedIndicesId = selectedIndicesText.map((t) => item.items.findIndex((tt) => tt == t));
			} catch (e) {
			}

			tools.showDialog({
				title: item.title,
				items: item.items,
				selectedIndices: selectedIndicesId,
				positiveText: "确定",
				itemsCallbackMultiChoice: (id, text) => userStore.updateUserInfo(item.field, text.filter((t) => t != null && t != '').join(','))
			})
		} else if (item.type == 'input') {
			tools.showDialog({
				title: item.title,
				input: {
					hint: item.title,
					prefill: loginUser[item.field] || '',
					allowEmptyInput: false,
					maxLength: 10,
					callback: (text) => userStore.updateUserInfo(item.field, text)
				}
			});

		}
	}

	substr(str) {
		if (str == null)
			str = '';
		else if (str == '0')
			str = '女';
		else if (str == '1')
			str = '男';
		else if (str.length > 10)
			str = str.substr(0, 10) + '...';
		return str
	}
}
