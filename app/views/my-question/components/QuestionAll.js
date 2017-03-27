import React, {PureComponent} from "react";
import {View, Image, ListView, TouchableHighlight} from "react-native";
import {Text, Button} from "native-base";
import {theme, urls} from "../../../utils/index";
/**
 * 所有问题
 */
class QuestionAll extends PureComponent {

	constructor(props) {
		super(props);

		this.ds = new ListView.DataSource({
			rowHasChanged: (row1, row2) => row1 !== row2,
			sectionHeaderHasChanged: (section1, section2) => section1 !== section2,
		});

		this.state = {
			rowsData: props.rowsData,
			dataSource: this.ds.cloneWithRowsAndSections(props.rowsData),
		}
	}

	render() {
		let {dataSource} = this.state;
		return (
			<ListView
				contentContainerStyle={styles.contentContainer}
				dataSource={dataSource}
				renderRow={this._renderRow.bind(this)}
				pageSize={4}
				renderSectionHeader={this._renderSectionHeader.bind(this)}
			/>
		)
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.rowsData !== nextProps.rowsData) {
			this.setState({
				dataSource: this.ds.cloneWithRowsAndSections(nextProps.rowsData.slice(0))
			})
		}
	}


	_renderSectionHeader(sectionData, sectionID) {
		return (
			<View style={styles.sectionHeader}>
				<Text style={{fontWeight: 'bold'}}>{sectionID}</Text>
			</View>
		)
	}

	_renderRow(rowData, sectionId, rowId) {
		let {selectedData, onAdd} = this.props;
		return (
			<View style={styles.row}>
				<Button transparent
						style={{padding:0,margin:6,backgroundColor:'#F1F7EE'}}
						onPress={()=>{}}>
					<View style={styles.rowView}>
						<Image source={{uri:urls.getImage(rowData.img)}} style={styles.rowimg}/>
						<Text style={styles.rowTitle}>{rowData.showVal}</Text>
						{rowData.selected ?
							<TouchableHighlight underlayColor='transparent'>
								<Image source={require('../../../assets/arrows_square_check.png')}
									   style={styles.choose}/>
							</TouchableHighlight>
							:
							<TouchableHighlight onPress={() => onAdd(rowData)} underlayColor='transparent'>
								<Image source={require('../../../assets/arrows_square_plus.png')}
									   style={styles.choose}/>
							</TouchableHighlight>
						}
					</View>
				</Button>
			</View>
		)
	}

	choose(rowData) {
		const {dispatch} = this.props;
		if (this.props.from == 'myquestion') {
			dispatch(addMyQuestion(rowData, this.props.my_question, this.props.id, this.props.allQuestions, this.refs.questions._postRefresh, this.props.userId, 'myquestion'))
		} else {
			dispatch(addMyQuestion(rowData, this.props.my_expect, this.props.id, this.props.allExpects, this.refs.questions._postRefresh, this.props.userId, 'myexpect'))

		}
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
		height: 30,
		paddingLeft: 8,
		justifyContent: 'center',
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

QuestionAll.propsTypes = {
	rowsData: React.PropTypes.object,
	selectedData: React.PropTypes.object,
	onAdd: React.PropTypes.func,
}
QuestionAll.defaultProps = {
	rowsData: {},
	selectedData: {},
	onAdd: () => {
	},
}

export default (QuestionAll);
