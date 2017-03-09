import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Container, Left, Right, Body, View} from "native-base";
import Header from "../../components/header/SearchHeader";
import {searchSymptomProblem, clearSymptomProblem} from "../../actions/search";
import Result from "./components/SymptomProblemResult";
import {theme} from "../../utils/";

/**
 * 搜索 -> 症状和问题
 */
class SearchSymptomProblem extends PureComponent {

	render() {
		let {isLoading, symptomProblem} = this.props;
		return (
			<Container>
				<Header placeholder="搜索症状和问题" onSearch={this.search.bind(this)}/>
				<View style={styles.content}>
					{symptomProblem.list.length > 0 ? <Result list={symptomProblem.list}/> : null}
				</View>
			</Container>
		);
	}

	// 搜索
	search(keyword) {
		const {dispatch} = this.props;
		if (keyword == '') {
			dispatch(clearSymptomProblem())
		} else {
			dispatch(searchSymptomProblem(keyword))
		}
	}
}

const styles = {
	content: {
		flex: 1,
		backgroundColor: theme.contentBgColor,
	},
};

const mapStateToProps = state => ({
	isLoading: state._onSearch.isLoading,
	symptomProblem: state._onSearch.symptomProblem,
});
export default connect(mapStateToProps)(SearchSymptomProblem);