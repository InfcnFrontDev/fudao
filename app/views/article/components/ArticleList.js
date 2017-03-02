import React, {Component} from "react";
import {ScrollView, ListView, View, Text} from "react-native";
import {Left, Right, Body, Form, Item} from "native-base";
import {Actions} from "react-native-router-flux";
import GiftedListView from "../../../components/GiftedListView";
// import GiftedListView from "react-native-gifted-listview";
import ArticleTextItem from "./ArticleTextItem";
import ArticleSingleImageItem from "./ArticleSingleImageItem";
import ArticleMultiImageItem from "./ArticleMultiImageItem";
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
			callback(result.obj);
		});
	}

	_renderRowView(rowData) {
		rowData.imgs = [];
		if (rowData.img) {
			rowData.imgs = rowData.img.split(',')
		}

		// 图片个数
		let imgLen = rowData.imgs.length;
		if (imgLen == 0)
			return <ArticleTextItem article={rowData} onPress={this._onPress.bind(this)}/>
		else if (imgLen >= 3)
			return <ArticleMultiImageItem article={rowData} onPress={this._onPress.bind(this)}/>
		else
			return <ArticleSingleImageItem article={rowData} onPress={this._onPress.bind(this)}/>
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

	_onPress(article) {
		Actions.webview({
			title: '资讯详情',
			uri: urls.pages.ARTICLE_DETAIL + "?id=" + article.id,
		})
	}

}

ArticleList.propTypes = {
	label: React.PropTypes.string, // 资讯栏目
}

export default (ArticleList);