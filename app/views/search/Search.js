import React, {PureComponent} from "react";
import {TouchableOpacity, ScrollView} from "react-native";
import {Container, Content, SearchHeader} from "../../components/index";
import Category from "./components/SearchCategory";
import SymptomProblemResult from "./components/SymptomProblemResult";
import InformationResult from "./components/InformationResult";


/**
 * 搜索
 */
export default class Search extends PureComponent {

	constructor(props) {
		super(props);
		this.state = {
			isFetching: false,
			symptomProblem: null,
			information: null,
			dailyMethod: null,
			friendsCircle: null,
		};
	}

	render() {
		let {symptomProblem, information, dailyMethod, friendsCircle} = this.state,
			isShowCategory = symptomProblem == null && information == null && dailyMethod == null && friendsCircle == null;
		return (
			<Container>
				<SearchHeader placeholder="搜索" onSearch={this.search.bind(this)}/>
				<Content white>
					<ScrollView>
						{isShowCategory && <Category key="category"/>}
						{symptomProblem && <SymptomProblemResult key="symptomproblem" data={symptomProblem}/>}
						{information && <InformationResult key="information" data={information}/>}
					</ScrollView>
				</Content>
			</Container>
		)
	}

	// 搜索
	search(keyword) {
		if (keyword == '') {
			this.clearAll()
		} else {
			this.searchAll(keyword)
		}
	}

	clearAll() {
		this.setState({
			symptomProblem: null,
			information: null,
			dailyMethod: null,
			friendsCircle: null,
		})
	}

	searchAll(keyword) {
		// 查询所有类别
		// request.getJson(urls.apis.SEARCH_ALL, {keyword})
		// 	.then((result) => {
		// 		this.setState(result.obj)
		// 	})
		this.setState({
			information: {
				list: [
					{
						id: '387',
						title: '民间流传的养生秘诀',
						img: 'zixun/31.1.jpg',
						source: '养生堂',
						createTime: '2017-04-13 11:43:49',
					},
					{
						id: '405',
						title: '老祖宗的长寿菜',
						img: 'zixun/49.1.jpg,zixun/49.2.jpg,zixun/49.3.jpg',
						source: '养生堂',
						createTime: '2017-04-13 11:43:49',
					},
					{
						id: '390',
						title: '健康生活大全，非常实用，值得收藏！',
						img: 'zixun/35.1.jpg,zixun/35.2.jpg,zixun/35.3.jpeg',
						source: '养生堂',
						createTime: '2017-04-13 11:43:49',
					},
					{
						id: '416',
						title: '一碗淘米水等于十种药',
						img: 'zixun/60.1.jpg,zixun /60.2.jpg,zixun/60.3.jpg',
						source: '养生堂',
						createTime: '2017-04-13 11:43:49',
					}
				],
				page: 1,
				pageSize: 10,
				pageCount: 1,
				count: 1
			}
		})
	}
}