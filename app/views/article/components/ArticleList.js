import React, {Component} from "react";
import {ScrollView, ListView, View, Text} from "react-native";
import {Left, Right, Body, Form, Item} from "native-base";
import GiftedListView from "../../../components/GiftedListView";
import ArticleItem from "./ArticleItem";
import {request, urls} from "../../../utils/";

class ArticleList extends Component {

	render() {
		return (
			<GiftedListView
				rowView={this._renderRowView.bind(this)}
				onFetch={this._onFetch.bind(this)}
				firstLoader={true}
				pagination={true}
				refreshable={true}
				withSections={false}
				enableEmptySections={true}
				locked={true}
			/>
		)
	}

	_onFetch(page = 1, callback, options) {
		let {label} = this.props;
		request.getJson(urls.apis.ARTICLE_LIST, {
			name: label,
			page
		}, (result) => {
			if (page === result.obj.totalPages) {
				callback(result.obj.datas, {
					allLoaded: true
				});
			} else {
				callback(result.obj.datas);
			}
		});
	}

	_renderRowView(rowData) {
		return (
			<ArticleItem article={rowData}/>
		)
	}


	_renderPaginationAllLoadedView() {
		return (
			<Text>END</Text>
		)
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

ArticleList.propTypes = {
	label: React.PropTypes.string, // 资讯栏目
}

export default (ArticleList);