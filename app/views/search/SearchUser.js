import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Container, Content, Loading} from "../../components/index";
import Header from "../../components/header/SearchHeader";
import {searchSymptomProblem, clearSymptomProblem} from "../../actions/search";
import {theme} from "../../utils/";

/**
 * 搜索用户
 */
class SearchUser extends PureComponent {

	state = {
		isLoading: true,
	}

	render() {
		let {isLoading} = this.state;
		return (
			<Container>
				<Header placeholder="搜索" onSearch={this.search.bind(this)}/>
				<Content gray>
					{isLoading ? <Loading text="正在查找..."/> : null}
				</Content>
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
	isLoading: state.search.isLoading,
	symptomProblem: state.search.symptomProblem,
});
export default connect(mapStateToProps)(SearchUser);