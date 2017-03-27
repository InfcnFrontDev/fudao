import React, {PureComponent} from "react";
import {ScrollView, DatePickerAndrofield, ListView} from "react-native";
import {connect} from "react-redux";
import {ListItem, Body, Right, Text, Icon} from "native-base";
import {Container, Content, Separator, Header, Loading} from "../../components/index";
import {updateUserCheck} from "../../actions/user";
import {dialogs, toast, tools, theme} from "../../utils/index";
import {rowsData, tablesData} from "./components/data";


/**
 * 体检信息
 */
class Check extends PureComponent {

	constructor(props) {
		super(props);

		this.ds = new ListView.DataSource({
			rowHasChanged: (row1, row2) => row1 !== row2,
			sectionHeaderHasChanged: (section1, section2) => section1 !== section2,
		});

		this.state = {
			isLoading: true,
			rowsData
		}
	}

	render() {
		let {isLoading} = this.state;
		return (
			<Container>
				<Header {...this.props}/>
				<Content>
					{!isLoading &&
					<ListView
						dataSource={this.ds.cloneWithRowsAndSections(rowsData)}
						renderRow={this._renderRow.bind(this)}
						pageSize={10}
						renderSectionHeader={this._renderSectionHeader.bind(this)}
					/>
					}
					<Loading isShow={isLoading}/>
				</Content>
			</Container>
		)
	}

	componentDidMount() {
		// 延迟加载
		tools.delayLoad(()=> {
			this.setState({
				isLoading: false
			})
		})
	}

	_renderRow(rowData, sectionId, rowId) {
		let {loginUser} = this.props,
			{rowsData} = this.state,
			text = '',
			tab = loginUser[tablesData[sectionId]];

		if (tab) {
			switch (rowData.limit) {
				case ("zc_yc"):
					text = tab[rowData.field] == 0 ? "正常" : "异常";
					break;
				case ("zc_sr_sm"):
					text = tab[rowData.field] == 0 ? "正常" : tab[rowData.field] == 1 ? "色弱" : "色盲";
					break;
				case ("qi_bqi"):
					text = tab[rowData.field] == 0 ? "齐" : "不齐";
					break;
				case ("yinx_yangx"):
					text = tab[rowData.field] == 0 ? "阴性" : "阳性";
					break;
				default:
					text = tab[rowData.field]
			}
		}

		return (
			<ListItem
				key={rowData.title}
				icon
				onPress={() => this.editItem(rowData, sectionId)}
				last={rowId == rowsData[sectionId].length - 1}
			>
				<Body>
				<Text style={{fontSize: theme.fontSizeH5}}>{rowData.title}</Text>
				</Body>
				<Right>
					<Text note>{text}</Text>
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
		let {dispatch, loginUser} = this.props;
		let tab = loginUser[group.tableName];

		if (item.type == 'input') {
			dialogs.showDialog({
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

			dialogs.showDialog({
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

const mapStateToProps = state => ({
	loginUser: state.user.loginUser
});
export default connect(mapStateToProps)(Check);
