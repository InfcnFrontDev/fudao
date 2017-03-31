import React, {PureComponent} from "react";
import {TouchableOpacity} from "react-native";
import {connect} from "react-redux";
import {Container, Content} from "native-base";
import Header from "../../components/header/SearchHeader";
import Category from "./components/SearchCategory";
import SymptomProblemResult from "./components/SymptomProblemResult";
import InformationResult from "./components/InformationResult";
import {request, urls} from "../../utils/index";


/**
 * 搜索
 */
class Search extends PureComponent {

	constructor(props) {
		super(props);
		this.state = {
			query: '',
			isLoading: false,
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
			results = [];
		if (symptomProblem) {
			results.push(<SymptomProblemResult key="symptomproblem" list={symptomProblem.list}/>)
		}
		if (information) {
			results.push(<InformationResult key="information" list={information.list}/>)
		}
		if (results.length == 0) {
			results.push(<Category key="category"/>)
		}
		return (
			<Container>
				<Header placeholder="搜索" onSearch={this.search.bind(this)}/>
				<Content>
					{results}
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
		request.getJson(urls.apis.SEARCH_ALL, {keyword})
			.then((result) => {
				this.setState(result.obj)
			})
	}
}

const mapStateToProps = state => ({
	search: state.search,
});
export default connect(mapStateToProps)(Search);