import React, {PureComponent} from "react";
import {StyleSheet, ListView} from "react-native";
import {connect} from "react-redux";
import {Container, Content, Header, Loading} from "../../components/index";
import ArticleItem from "../article/components/ArticleItem";
import {config, request, urls} from "../../utils/";


/**
 * 我的收藏
 */
class MyCollection extends PureComponent {

	state = {
		isLoading: true,
		dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2,}),
		list: []
	}

	render() {
		let {dataSource, list, isLoading} = this.state;
		return (
			<Container>
				<Header back {...this.props}/>
				<Content>
					{!isLoading &&
					<ListView
						dataSource={dataSource.cloneWithRows(list.slice(0))}
						enableEmptySections={true}
						renderRow={this._renderRow.bind(this)}
						renderFooter={this._renderFooter.bind(this)}
						onEndReachedThreshold={0}
						onEndReached={this._onEndReached.bind(this)}

					/>
					}
					<Loading isShow={isLoading}/>
				</Content>
			</Container>
		)
	}

	_renderRow(rowData) {
		return (
			<ArticleItem article={rowData}/>
		)
	}

	componentDidMount() {
		setTimeout(() => {
			this.fetchList(1, () => {
				this.setState({isLoading: false});
			})
		}, config.loadingDelayTime)
	}

	_endReached() {
		if (this.state.foot != 0) {
			return;
		}
		this.setState({
			foot: 2,
		});
		this.timer = setTimeout(
			() => {
				pageNum++;
				this._fetchListData();
			}, 500);
	}

	_renderFooter() {
		if (this.state.foot === 1) {//加载完毕
			return (
				<View style={{height:40,alignItems:'center',justifyContent:'flex-start',}}>
					<Text style={{color:'#999999',fontSize:12,marginTop:10}}>
						{this.state.moreText}
					</Text>
				</View>);
		} else if (this.state.foot === 2) {//加载中
			return (
				<View style={{height:40,alignItems:'center',justifyContent:'center',}}>
					<Image source={{uri:loadgif}} style={{width:20,height:20}}/>
				</View>);
		}
	}

	fetchList(page = 1, callback, options) {
		let {loginUser} = this.props;
		request.getJson(urls.apis.MY_COLLECTION_LIST, {
			appid: loginUser.appid,
			page
		}).then(result => {
			let {datas, totalPages} = result.obj;
			this.setState({
				list: datas
			})
			if (callback)
				callback()
		});
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
	...state.user,
});
export default connect(mapStateToProps)(MyCollection);
