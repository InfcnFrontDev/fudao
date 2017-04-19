import React, {PureComponent} from "react";
import {StyleSheet, View, Alert} from "react-native";
import GiftedListView from "../../components/GiftedListView";
import {Container, Content, Header} from "../../components/index";
import ArticleItem from "../article/components/ArticleItem";


/**
 * 收藏
 */
export default class Collection extends PureComponent {

	render() {
		return (
			<Container>
				<Header {...this.props}/>
				<Content delay>
					<GiftedListView
						ref={(e) => this._giftedListview = e}
						onFetch={this._onFetch.bind(this)}
						rowView={this._renderRowView.bind(this)}
					/>
				</Content>
			</Container>
		)
	}

	_onFetch(page = 1, callback, options) {
		let {loginUser} = this.props;
		request.getJson(urls.apis.COLLECTION_GETMYCOLLECTIONLIST, {
			page
		}).then((result) => {
			let {list, totalPages} = result.obj;
			callback(list);

		});
	}

	_renderRowView(rowData) {
		return (
			<ArticleItem article={rowData.article} onLongPress={() => this._onLongPress(rowData)}/>
		)
	}

	_onLongPress(rowData) {
		Alert.alert('操作提示', '您确定要取消该收藏吗', [
			{text: '取消'},
			{text: '删除', onPress: () => this.removeMyCollection(rowData)},
		])
	}

	removeMyCollection(rowData) {
		request.getJson(urls.apis.COLLECTION_DELETEMYCOLLECTION, {
			id: rowData.id
		}).then((result) => {
			toast.show('删除成功');
		});

		this._giftedListview._refresh();

	}
}
const styles = StyleSheet.create({
	listView: {
		flex: 1,
		paddingLeft: 5,
		paddingRight: 5,
	}
})

const mapStateToProps = state => ({
	...state.user
});

