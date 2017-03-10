import React, {Component} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import ArticleTextItem from "./ArticleTextItem";
import ArticleSingleImageItem from "./ArticleSingleImageItem";
import ArticleMultiImageItem from "./ArticleMultiImageItem";
import {urls} from "../../../utils/index";

class ArticleItem extends Component {

	render() {
		let {article} = this.props;
		article.imgs = [];
		if (article.img) {
			article.imgs = article.img.split(',')
		}

		// 图片个数
		let imgLen = article.imgs.length;
		if (imgLen == 0)
			return <ArticleTextItem article={article} onPress={this._onPress.bind(this)}/>
		else if (imgLen >= 3)
			return <ArticleMultiImageItem article={article} onPress={this._onPress.bind(this)}/>
		else
			return <ArticleSingleImageItem article={article} onPress={this._onPress.bind(this)}/>
	}

	_onPress() {
		let {article, loginUser} = this.props;
		Actions.webview({
			title: '资讯详情',
			uri: urls.pages.ARTICLE_DETAIL + "?id=" + article.id + "&userId=" + loginUser.appid,
		})
	}
}

ArticleItem.propTypes = {
	article: React.PropTypes.object, // 资讯
	onPress: React.PropTypes.func,
}

const mapStateToProps = state => ({
	loginUser: state.userStore.loginUser,
});
export default connect(mapStateToProps)(ArticleItem);