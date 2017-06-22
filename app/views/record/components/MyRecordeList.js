import React, {Component} from "react";
import {ScrollView, ListView, View, Text, ToastAndroid} from "react-native";
import GiftedListView from "../../../components/GiftedListView";
import MyRecordeListRow from "./MyRecordeListRow";
import DetailsModal from "../../home/components/DetailsModal";
import {Actions} from "react-native-router-flux";


var len = 1;

export default class MyRecordeList extends Component {

	render() {
		return (
			<View style={{flex:1}}>
				<GiftedListView
					rowView={this._renderRowView.bind(this)}
					onFetch={this._onFetch.bind(this)}
					firstLoader={true}
					pagination={true}
					refreshable={true}
					withSections={true}
					sectionHeaderView={this._renderSectionHeaderView}
					enableEmptySections={true}
					paginationAllLoadedView={this._renderPaginationAllLoadedView}
				/>
				<DetailsModal ref={(e)=>this._groupSelectModal = e}/>
			</View>

		)
	}

	_onFetch(page = 1, callback, options) {
		let {btn,month,year} = this.props;
		let c;
		if(btn>=9){
			c=btn-9;
		}else{
			c=btn;
		}
		let dateTime =year+'-'+month+'-'+(btn+1);
		request.getJson(urls.apis.TIMEPERIODAPI_GETMYRECORD,{
			dateTime:dateTime
		}).then((res) => {
			len = JSON.stringify(res.obj);
			callback(res.obj, {
				allLoaded: true
			})
		});
	}

	_renderRowView(rowData, sectionID, rowID) {
		return (
			<MyRecordeListRow
				row={rowData}
				gotoDetail={this.gotoDetail.bind(this,rowData)}
				type={this.props.type}/>
		)
	}

	_renderSectionHeaderView(sectionData, sectionID) {
		return (
			<View style={styles.sectionHeader}>
				<Text style={styles.sectionHeaderText}>
					{sectionID}
				</Text>
			</View>
		)
	}

	_renderPaginationAllLoadedView() {
		// alert(len)
		if(len=="{}"){
			return <View style={{}}>
				<Text style={{textAlign:'center',marginTop:20}}>暂无记录</Text>
			</View>;
		}

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

	gotoDetail(data){
		if (data.type==0){
			var thressAll = [];

			var thress = JSON.parse(data.threeCharacterClassic);
			if (thress instanceof Array) {
				thressAll = thress.join('，');
			} else {
				if (thress.dishes.length > 0) {
					thressAll = thress.dishes;
				}
				if (thress.staple.length > 0) {
					thressAll = thressAll.length > 0 ? thressAll.concat(thress.staple) : thress.staple;
				}
			}
			Actions.menuKinds({
				idOrName: thressAll[0],
				arr: thressAll
			})

		}else{
			this._groupSelectModal.show(JSON.stringify(data));


		}

	}

}

const styles = {
	sectionHeader: {
		marginTop: 20,
		marginLeft: 36,
		backgroundColor:'transparent'
	},
	sectionHeaderText: {
		color: '#000',
		fontSize: 16,
	}
}

MyRecordeList.propTypes = {
	label: React.PropTypes.string, // 资讯栏目
}

