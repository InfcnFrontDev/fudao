import React, {
	Component
} from 'react'

import {
	StyleSheet,
	View,
	ScrollView,
	Text,
	Image,
	Platform,
	TouchableHighlight
} from 'react-native'

import {connect} from 'react-redux'
import NavBarView from '../components/NavBarView'
import GiftedListView from 'react-native-gifted-listview'
import global from '../utils/global'
import util from '../utils/util'
import iconfont from '../utils/iconfont'
import globalStyles from '../utils/globalStyles'

class IconsView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rows: this.iconfontToRows()
		}
	}

	iconfontToRows() {
		let colNum = 4,
			rows = [],
			row = {rowNum: 0, cells: []};

		for (let key in iconfont) {
			row.cells.push(key);
			if (row.cells.length == 4) {
				rows.push(row);
				row = {rowNum: row.rowNum + 1, cells: []};
			}
		}
		if (row.cells.length > 0) {
			let celsLen = row.cells.length;
			for (let i = 0; i < colNum - celsLen; i++) {
				row.cells.push('');
			}
			rows.push(row);
		}

		return rows;
	}

	render() {
		let {title} = this.props;
		return (
			<NavBarView title={title} leftButton={global.backButton}>
				<GiftedListView
					enableEmptySections={true}
					rowView={this.renderRowView.bind(this)}
					onFetch={this.onFetch.bind(this)}
					refreshable={false}
					firstLoader={true}
					withSections={false}
					paginationAllLoadedView={this.renderPaginationAllLoadedView}
				/>
			</NavBarView>
		)
	}

	onFetch(page = 1, callback, options) {
		callback(this.state.rows, {
			allLoaded: true
		})
	}

	renderRowView(row) {
		return (
			<View style={styles.rowView}>
				{row.cells.map(cell => this.renderCellView(cell))}
			</View>
		)
	}

	renderCellView(cell) {
		return (
			<View key={util.uuid()} style={[styles.cellView, cell == '' ? styles.noDataCellView : {}]}>
				<Text style={styles.cellIcon}>{iconfont[cell]}</Text>
				<Text style={styles.cellText}>{cell}</Text>
			</View>
		)
	}

	renderPaginationAllLoadedView() {
		return (
			<View style={styles.allLoadedView}>
				<Text style={styles.allLoadedText}>{global.allLoadedText}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	contentView: {
		flex: 1
	},
	rowView: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		marginLeft: 5,
		marginRight: 5
	},
	cellView: {
		flex: 1,
		borderWidth: 1,
		borderColor: '#dddddd',
		borderRadius: 10,
		backgroundColor: '#ffffff',
		margin: 5,
		paddingTop: 5,
		paddingBottom: 5
	},
	noDataCellView: {
		borderColor: 'transparent',
		backgroundColor: 'transparent'
	},
	cellIcon: {
		...globalStyles.iconfont,
		color: '#ff9630',
		fontSize: 36,
		textAlign: 'center',
	},
	cellText: {
		textAlign: 'center',
		fontSize: 12,
		paddingTop: 5
	},
	allLoadedView: {
		height: 44,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFF',
		padding: 20,
	},
	allLoadedText: {
		fontSize: 14,
	}
});
function mapStateToProps(state) {
	const {user} = state;
	return {
		user
	}
}
export default connect(mapStateToProps)(IconsView);