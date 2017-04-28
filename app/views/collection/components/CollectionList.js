import React, {PureComponent} from "react";
import {StyleSheet, View, ListView, RefreshControl} from "react-native";
import {observer} from "mobx-react/native";
import Loading from "./Loading";
import LoadFooter from "./LoadFooter";
import ArticleItem from "../../article/components/ArticleItem";
import CollectionListStore from "../../../mobx/collectionListStore";


/**
 * 收藏列表
 */
@observer
export default class CollectionList extends PureComponent {

	state = {
		dataSource: new ListView.DataSource({
			rowHasChanged: (row1, row2) => row1 !== row2,
		})
	}

	componentDidMount() {
		CollectionListStore.fetchCollectionList()
	}

	_renderRow(rowData) {
		return (
			<ArticleItem article={rowData.article}/>
		)
	}

	_onRefresh = () => {
		CollectionListStore.isRefreshing = true
		CollectionListStore.fetchCollectionList()
	}

	_onEndReach() {
		if (CollectionListStore.isLastPage) {
			return null
		}
		CollectionListStore.page++
	}

	_renderFooter() {
		return (
			<LoadFooter isEnd={CollectionListStore.isLastPage}/>
		)
	}

	_onPressCell = feed => {
		this.props.navigator.push({
			component: FeedDetail,
			passProps: {feed}
		})
	}

	render() {
		const {isRefreshing, isFetching, collectionList} = CollectionListStore
		return (
			<View style={styles.listView}>
				{!isFetching &&
				<ListView
					dataSource={this.state.dataSource.cloneWithRows(collectionList.slice(0))}
					renderRow={this._renderRow}
					renderFooter={this._renderFooter}
					enableEmptySections
					initialListSize={3}
					onScroll={this._onScroll}
					onEndReached={this._onEndReach}
					onEndReachedThreshold={30}
					refreshControl={
                        <RefreshControl
                            refreshing={isRefreshing}
                            onRefresh={this._onRefresh}
                            colors={['rgb(217, 51, 58)']}
                        />
                    }
				/>
				}
				<Loading isShow={isFetching}/>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	listView: {
		flex: 1,
	}
})