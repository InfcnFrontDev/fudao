import React, {PureComponent} from "react";
import {
	StyleSheet,
	View,
	Text,
	ListView,
	TouchableOpacity,
	RefreshControl
} from 'react-native'
import {Left, Right, Body, Form, Item} from "native-base";
import ArticleSingleImageItem from "./ArticleSingleImageItem";

const datas = [
	{
		text: '李维嘉发伤心感慨 节目现场崩溃大哭 何炅谢娜话里露玄机',
		note: 'Its time to build a difference . .',
	},
	{
		text: '杭州5名公交司机照片挂车厢征婚 一人已脱单',
		note: 'One needs courage to be happy and smiling all time . . ',
	},
	{
		text: '儿童误将药丸当糖豆带到幼儿园分享 致4人中毒',
		note: 'Live a life style that matchs your vision',
	},
	{
		text: '河南夫妻吵架醉酒丈夫挥刀断指 已被成功接活',
		note: 'Failure is temporary, giving up makes it permanent',
	},
	{
		text: '女子虐打男童被拘：孩子系花钱买来 是否涉拐卖儿童待查',
		note: 'The biggest risk is a missed opportunity !!',
	},
	{
		text: '男子硕士学历月薪上万 占共享单车喷漆还加儿童座',
		note: ''
	}
];

class ArticleList extends PureComponent {

	state = {
		dataSource: new ListView.DataSource({
			rowHasChanged: (row1, row2) => row1 !== row2,
		}),
		feedDelicacyList: datas,
		isRefreshing: false,
	}

	render() {
		return (
			<View style={styles.listView}>
				<ListView
					dataSource={this.state.dataSource.cloneWithRows(this.state.feedDelicacyList.slice(0))}
					renderRow={this._renderRow}
					renderFooter={this._renderFooter}
					enableEmptySections
					initialListSize={3}
					onScroll={this._onScroll}
					onEndReached={this._onEndReach}
					onEndReachedThreshold={30}
					refreshControl={
						<RefreshControl
							refreshing={this.state.isRefreshing}
							onRefresh={this._onRefresh}
							colors={['rgb(217, 51, 58)']}
						/>
					}
				/>
			</View>
		)
	}

	componentDidMount() {
		//FeedDelicacyListStore.fetchDelicacyList()
	}

	_renderRow(row) {
		return <ArticleSingleImageItem onPress={this._onPressCell} data={row}/>
	}

	_onRefresh() {
		console.log("_onRefresh");
		let me = this;
		setTimeout(()=> {
			console.log("setTimeout");
			me.setState({
				feedDelicacyList: datas
			});
		}, 1000)
	}

	_onEndReach() {
		return 1
	}

	_renderFooter() {
		return (
			<View>
				<Text>End</Text>
			</View>
		)
	}


	_onPressCell(feed) {
		alert('feed')
	}
}

const styles = StyleSheet.create({
	listView: {
		flex: 1,
		backgroundColor: '#f5f5f5'
	}
})

export default (ArticleList);