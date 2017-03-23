import React, {PureComponent} from "react";
import {Modal, View, Image, ListView} from "react-native";
import {Icon, Button, ListItem, Text} from "native-base";
import {theme} from "../../../utils/index";

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

		let rowsAndSections = {
			'企业型': [
				'政府机关及其工作机构负责人',
				'司法机关及其工作机构负责人',
				'人民代表大会机关及其工作机构负责人',
				'街道、乡镇级人大机关及其工作机构负责人',
				'中共党组织负责人',
				'民主党派组织负责人',
				'社会团体组织负责人（各级各类行业、专业协会，民间组织等）',
				'工会、共青团、妇联、工商联、组织负责人',
				'企业单位及其工作机构负责人',
				'事业单位及其工作机构负责人',
				'商业工作人员',
			],
			'研究型': [
				'社会科学研究人员',
				'自然科学研究人员',
				'工程技术人员',
				'飞机和船舶技术人员',
				'医疗卫生技术人员',
				'农林牧副渔技术人员',
				'科学技术管理人员',
				'经济业务人员',
				'体育工作人员',
			],
			'常规型': [
				'政府机关的办事人员',
				'司法机关的办事人员',
				'中共党的机关的行政办事人员',
				'社会团体机构的办事人员',
				'行政执行人员和行政业务管理人员',
				'行政执行人员和业务管理人员',
				'人事行政工作人员',
				'文化工作人员',
			],
			'艺术型': [
				'文艺工作人员'
			],
			'社会型': [
				'社会工作者',
				'法律工作人员',
				'教学人员',
				'宗教职业者',
				'警察',
				'军人',
			],
			'现实型': [
				'服务性工作人员',
				'生产人员',
			]
		};

		this.state = {
			...props,
			dataSource: this.ds.cloneWithRowsAndSections(rowsAndSections),
		}
	}

	render() {
		let {visible, transparent, animationType, dataSource} = this.state;

		return (
			<Modal
				animationType={animationType}
				transparent={transparent}
				visible={visible}
				onRequestClose={() => this.hide()}
			>
				<View style={styles.opacityView}></View>
				<View style={styles.content}>
					<View
						style={styles.header}>
						<Text>选择您的行业</Text>
					</View>
					<View style={{flex:1}}>
						<ListView
							dataSource={dataSource}
							renderRow={this._renderRow.bind(this)}
							pageSize={4}
							enableEmptySections
							renderSectionHeader={this._renderSectionHeader.bind(this)}
						/>
					</View>
					<Button
						onPress={() => this.hide()}
						style={{
								backgroundColor:'#C8C8C8',
								justifyContent:'center',
								borderRadius: 12,
								width: 24,
								height: 24,
								paddingLeft:0,
								paddingRight:0,
								position:'absolute',
								top: 10,
								right: 10,
							}}>
						<Icon name="close" style={{color:'#FFF', fontSize: 20}}/>
					</Button>
				</View>
			</Modal>
		)
	}

	/**
	 * 打开对话框
	 * @param data
	 */
	show(data) {
		this.setState({
			visible: true,
			data
		})
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
		return (
			<ListItem onPress={() => this._onItemPress(rowData)}>
				<Text style={styles.listItemText}>{rowData}</Text>
			</ListItem>
		)
	}

	_renderSectionHeader(sectionData, sectionID) {
		return (
			<ListItem itemDivider style={{height: 30}}>
				<Text style={styles.itemDividerText}>{sectionID}</Text>
			</ListItem>
		)
	}

	_onItemPress(rowData) {
		alert(rowData)
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
		borderRadius: 5,
		opacity: 1,
		flex: 1,
		flexDirection: 'column',
	},
	header: {
		padding: 10,
		borderBottomWidth: theme.borderWidth,
		borderBottomColor: theme.listBorderColor
	},
	listItemText: {
		fontSize: theme.fontSizeBase - 2
	},
	itemDividerText: {
		fontSize: theme.fontSizeBase - 1,
		fontWeight: 'bold'
	},
};

GroupSelectModal.propTypes = {
	visible: React.PropTypes.bool,
	transparent: React.PropTypes.bool,
	animationType: React.PropTypes.oneOf(['none', 'slide', 'fade']),

};
GroupSelectModal.defaultProps = {
	visible: false,
	transparent: false,
	animationType: 'fade',
}

export default  (GroupSelectModal);
