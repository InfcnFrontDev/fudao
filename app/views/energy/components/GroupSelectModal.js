import React, {PureComponent} from "react";
import {Modal, View, Image, ListView} from "react-native";
import {Icon, Button, ListItem, Text} from "native-base";
import {theme} from "../../../utils/index";
import _ from "lodash";

/**
 * 我的能量场 > 资料填写
 */
class GroupSelectModal extends PureComponent {

	constructor(props) {
		super(props);

		this.ds = new ListView.DataSource({
			rowHasChanged: (row1, row2) => row1 !== row2,
			sectionHeaderHasChanged: (section1, section2) => section1 !== section2,
		});

		this.state = {
			...props,
			visible: false,
			rowsData: this.groupByItems(props.items)
		}
	}

	/**
	 * 分组
	 */
	groupByItems(items) {
		return _.groupBy(items, (item) => item.type);
	}

	render() {
		let {visible, rowsData} = this.state;

		return (
			<Modal
				animationType={'fade'}
				transparent={true}
				visible={visible}
				onRequestClose={() => this.hide()}
			>
				<View style={styles.opacityView}/>
				<View style={styles.content}>
					<View style={styles.header}>
						<View style={{flex:1}}>
							<Text style={styles.headerText}>选择您的行业</Text>
						</View>
						<View style={{width:25}}>
							<Button
								onPress={() => this.hide()}
								style={styles.closeButton}>
								<Icon name="close" style={{color:'#FFF', fontSize: 20}}/>
							</Button>
						</View>
					</View>
					<ListView
						dataSource={this.ds.cloneWithRowsAndSections(rowsData)}
						renderRow={this._renderRow.bind(this)}
						pageSize={10}
						enableEmptySections
						renderSectionHeader={this._renderSectionHeader.bind(this)}
					/>
				</View>
			</Modal>
		)
	}

	/**
	 * 打开对话框
	 * @param data
	 */
	show(data, onSelect) {
		let state = {
			visible: true,
			onSelect
		};
		if (data)
			state.rowsData = this.groupByItems(data);
		this.setState(state)
	}

	/**
	 * 关闭对话框
	 */
	hide() {
		this.setState({
			visible: false
		})
	}

	_renderRow(rowData, sectionId, rowId) {
		let {rowsData} = this.state;

		return (
			<ListItem last={rowId == rowsData[sectionId].length-1}
					  onPress={() => this._onListItemPress(rowData)}>
				<Text style={styles.listItemText}>{rowData.title}</Text>
			</ListItem>
		)
	}

	_renderSectionHeader(sectionData, sectionID) {
		return (
			<ListItem itemDivider style={{height: 30}}>
				<Text style={{fontWeight: 'bold'}}>{sectionID}</Text>
			</ListItem>
		)
	}

	_onListItemPress(rowData) {
		this.state.onSelect(rowData);
		this.hide();
	}
}


const styles = {
	opacityView: {
		flex: 1,
		backgroundColor: '#6c6c6c',
		opacity: 0.5,
	},
	content: {
		position: "absolute",
		backgroundColor: '#FFFFFF',
		top: 30,
		bottom: 30,
		left: 20,
		right: 20,
		borderRadius: 3,
		opacity: 1,
		flex: 1,
		flexDirection: 'column',
	},
	header: {
		paddingLeft: 10,
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 6,
		borderBottomWidth: theme.borderWidth,
		borderBottomColor: theme.listBorderColor,
		flexDirection: 'row',
	},
	headerText: {
		fontSize: theme.fontSizeH4
	},
	closeButton: {
		backgroundColor: '#C8C8C8',
		justifyContent: 'center',
		borderRadius: 12,
		width: 24,
		height: 24,
		paddingLeft: 0,
		paddingRight: 0,
	},
};

GroupSelectModal.propTypes = {
	items: React.PropTypes.array,
	onSelect: React.PropTypes.func,

};
GroupSelectModal.defaultProps = {
	items: [],
	onSelect: (rowData) => alert(rowData),
}

export default  (GroupSelectModal);
