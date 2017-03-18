import React, {Component} from "react";
import {ScrollView, ListView, View, Text,ToastAndroid} from "react-native";
import GiftedListView from "../../../components/GiftedListView";
import {request, urls} from "../../../utils/";
import MyRecordeListRow from './MyRecordeListRow'
class MyRecordeList extends Component {

	render() {
		return (
			<GiftedListView
				rowView={this._renderRowView.bind(this)}
				onFetch={this._onFetch.bind(this)}
				firstLoader={true}
				pagination={true}
				refreshable={true}
				withSections={false}
				sectionHeaderView={this._renderSectionHeaderView}
				enableEmptySections={true}
				locked={true}
				paginationAllLoadedView={this._renderPaginationAllLoadedView}
			/>
		)
	}

	_onFetch(page = 1, callback, options) {
		let {label} = this.props;
		var day=[1,2,3,4,5,6,7,8]
		callback(day,{
			allLoaded:true
		})
	}

	_renderRowView(rowData,sectionID,rowID) {
		return (
			<MyRecordeListRow row={rowData} type={this.props.type}/>
		)
	}

	_renderSectionHeaderView(sectionData, sectionID){
		return (
		<View style={styles.sectionHeader} >
				<Text style={styles.sectionHeaderText}>
						{sectionID}
				</Text>
		</View>
)
	}

	_renderPaginationAllLoadedView() {
		return (null);
	}

	_paginationFetchingView() {
		return (
			<Text>_paginationFetchingView</Text>
		)
	}

	_paginationWaitingView() {
		return (
			<Text>Waiting</Text>
		)
	}

}

const styles={

}

MyRecordeList.propTypes = {
	label: React.PropTypes.string, // 资讯栏目
}

export default (MyRecordeList);
