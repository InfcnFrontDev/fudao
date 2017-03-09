import React, {PureComponent} from "react";
import {TouchableOpacity} from "react-native";
import {connect} from "react-redux";
import {Container, Content, Left, Right, Body} from "native-base";
import Header from "../../components/header/SearchHeader";
import Category from "./components/SearchCategory";
import {searchAll, clearAll} from "../../actions/search";
import SymptomProblemResult from "./components/SymptomProblemResult";
import InformationResult from "./components/InformationResult";


/**
 * 搜索
 */
class Search extends PureComponent {

	constructor(props) {
		super(props);
		this.state = {
			query: '',
			results: null
		};
	}

	render() {
		let {symptomProblem, information, dailyLife, friendsCircle, healthCare, offlineService} = this.props._onSearch,
			results = [];
		if (symptomProblem.list.length > 0) {
			results.push(<SymptomProblemResult key="symptomproblem" list={symptomProblem.list}/>)
		}
		if (information.list.length > 0) {
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
		const {dispatch} = this.props;
		if (keyword == '') {
			dispatch(clearAll())
		} else {
			dispatch(searchAll(keyword))
		}
	}
}

const mapStateToProps = state => ({
	search: state._onSearch,
});
export default connect(mapStateToProps)(Search);