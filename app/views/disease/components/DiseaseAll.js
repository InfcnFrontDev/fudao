import React, {PureComponent} from "react";
import {View, Image, ListView, TouchableHighlight} from "react-native";
import {Text, Button} from "native-base";

const bgColors = ['#F1F7EE', '#F9F1EF', '#EDF4FE', '#F4F5E5'];
/**
 * 所有问题列表组件
 */
export default class DiseaseAll extends PureComponent {

	constructor(props) {
		super(props);

		this.ds = new ListView.DataSource({
			rowHasChanged: (row1, row2) => row1 !== row2,
			sectionHeaderHasChanged: (section1, section2) => section1 !== section2,
		});

		this.state = {
			items: props.items,
		}
	}

	render() {
		let {items} = this.state;
		return (
			<ListView
				contentContainerStyle={styles.contentContainer}
				dataSource={this.ds.cloneWithRowsAndSections(items)}
				renderRow={this._renderRow.bind(this)}
				pageSize={4}
				renderSectionHeader={this._renderSectionHeader.bind(this)}
			/>
		)
	}

	_renderSectionHeader(sectionData, sectionID) {
		return (
			<View style={styles.sectionHeader}>
				<Text style={{fontWeight: 'bold'}}>{sectionID}</Text>
			</View>
		)
	}

	_renderRow(rowData, sectionId, rowId) {
		let {selectedItem, onItemAdd, onItemPress} = this.props;
		// alert(rowData.img)
		return (
			<View style={styles.row}>
				<Button transparent
						style={{padding: 0, margin: 6, backgroundColor: bgColors[rowId % 4]}}
						onPress={() => onItemPress(rowData)}>
					<View style={styles.rowView}>
						<Image source={{uri: urls.getImage(rowData.img)}} style={styles.rowimg}/>
						<Text style={styles.rowTitle}>{rowData.name}</Text>
						{selectedItem[rowData.id] ?
							<TouchableHighlight underlayColor='transparent'>
								<Image source={require('../../../assets/arrows_square_check.png')}
									   style={styles.choose}/>
							</TouchableHighlight>
							:
							<TouchableHighlight onPress={() => onItemAdd(rowData)} underlayColor='transparent'>
								<Image source={require('../../../assets/arrows_square_plus.png')}
									   style={styles.choose}/>
							</TouchableHighlight>
						}
					</View>
				</Button>
			</View>
		)
	}
}

const styles = {
	contentContainer: {
		flexDirection: 'row', //设置横向布局
		flexWrap: 'wrap',    //设置换行显示
		width: theme.deviceWidth + 5
	},
	sectionHeader: {
		borderBottomColor: theme.listBorderColor,
		borderBottomWidth: theme.borderWidth,
		width: theme.deviceWidth + 5,
		height: 40,
		paddingLeft: 8,
		justifyContent: 'center',
		alignItems: 'center',
	},
	row: {
		width: (theme.deviceWidth - 10) / 2,
		height: 60,
		marginLeft: 5,
	},
	rowView: {
		marginLeft: 8,
		marginRight: 8,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	rowTitle: {
		color: '#000',
		flex: 1,
	},
	rowimg: {
		width: 36,
		height: 36,
		marginRight: 4,
	},
	choose: {
		width: 20,
		height: 20,
		justifyContent: 'flex-end',
	}
};

DiseaseAll.propsTypes = {
	items: React.PropTypes.object,
	selectedItem: React.PropTypes.object,
	onItemAdd: React.PropTypes.func,
	onItemPress: React.PropTypes.func,
}
DiseaseAll.defaultProps = {
	items: {},
	selectedItem: {},
	onItemAdd: () => {
	},
	onItemPress: () => {
	},
}

