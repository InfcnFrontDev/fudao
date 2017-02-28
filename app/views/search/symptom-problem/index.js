import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Container, Left, Right, Body, View} from "native-base";
import Header from "../../../components/header/search";
import {searchSymptomProblem, clearSearchResult} from "../../../actions/search";
import Result from "./result";
import styles from "./styles";
/**
 * 搜索 -> 症状和问题
 */
class SearchSymptomProblem extends PureComponent {

	render() {
		const {dispatch, search} = this.props;
		return (
			<Container>
				<Header placeholder="搜索症状和问题" onSearch={this.search.bind(this)}/>
				<View style={styles.content}>
					{search.list.length > 0 ? <Result list={search.list}/> : null}
				</View>
			</Container>
		);
	}

	// 搜索
	search(keyword) {
		const {dispatch} = this.props;
		if (keyword == '') {
			dispatch(clearSearchResult())
		} else {
			dispatch(searchSymptomProblem(keyword))
		}
	}
}

const mapStateToProps = state => ({
	search: state.search
});
export default connect(mapStateToProps)(SearchSymptomProblem);