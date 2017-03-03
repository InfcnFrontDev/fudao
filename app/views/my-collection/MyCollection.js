import React, {PureComponent} from "react";
import {StyleSheet, ListView, View, RefreshControl} from "react-native";
import {connect} from "react-redux";
import {Container, Left, Right, Body, Text} from "native-base";
import Header from "../../components/header/BaseHeader";
import Loading from "../../components/Loading";
import {fetchMyCollectionList, refreshMyCollectionList} from "../../actions/collection";
import ArticleItem from "../article/components/ArticleItem";


/**
 * 我的收藏
 */
class MyCollection extends PureComponent {

	state = {
		dataSource: new ListView.DataSource({
			rowHasChanged: (row1, row2) => row1 !== row2,
		})
	}

	render() {
		let {account, collection} = this.props;
		let {isFetching, isRefreshing, collectionList} = collection;
		return (
			<Container>
				<Header {...this.props}/>
				<View style={styles.listView}>
					{!isFetching &&
					<ListView
						dataSource={this.state.dataSource.cloneWithRows(collectionList)}
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
			</Container>
		)
	}

	componentDidMount() {
		let {dispatch, account} = this.props;
		dispatch(fetchMyCollectionList('86516602126601339963921'));
	}

	_onRefresh = () => {
		let {dispatch} = this.props;
		dispatch(refreshMyCollectionList());
	}
	_onEndReach = () => {

	}

	_renderFooter = () => {
		return <Text>load more</Text>
	}
	_renderRow = article => {
		return <ArticleItem article={article}/>
	}
}
const styles = StyleSheet.create({
	listView: {
		flex: 1,
		backgroundColor: '#f5f5f5'
	}
})

const mapStateToProps = state => ({
	account: state.account,
	collection: state.collection,
});
export default connect(mapStateToProps)(MyCollection);
