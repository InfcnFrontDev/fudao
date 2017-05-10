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
			dailyLife: null,
			friendsCircle: null,
			healthCare: null,
			offlineService: null
		};
	}

	render() {
		let {symptomProblem, information, dailyLife, friendsCircle, healthCare, offlineService} = this.state,
			isShowCategory = symptomProblem == null
				&& information == null
				&& dailyLife == null
				&& friendsCircle == null
				&& healthCare == null
				&& offlineService == null;
		return (
			<Container>
				<SearchHeader placeholder="搜索" onSearch={this.search.bind(this)}/>
				<Content white>
					<ScrollView>
						<Category key="category" isShow={isShowCategory}/>
						<SymptomProblemResult key="symptomproblem" data={symptomProblem}/>
						<InformationResult key="information" data={information}/>
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
			dailyLife: null,
			friendsCircle: null,
			healthCare: null,
			offlineService: null
		})
	}

	searchAll(keyword) {
		// 查询所有类别
		// request.getJson(urls.apis.SEARCH_ALL, {keyword})
		// 	.then((result) => {
		// 		this.setState(result.obj)
		// 	})
	}
}