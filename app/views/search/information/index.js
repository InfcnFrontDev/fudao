import React, {PureComponent} from "react";
import {Container, Content, Left, Right, Body} from "native-base";
import Header from "../../../components/header/search";
import {clearSearchResult} from "../../../actions/search";
import Result from "./result";

/**
 * 搜索 -> 资讯
 */
class SearchInformation extends PureComponent {

	render() {
		return (
			<Container>
				<Header placeholder="搜索资讯" onSearch={this.search.bind(this)}/>
				<Content>
					<Result/>
				</Content>
			</Container>
		);
	}

	// 搜索
	search(keyword) {
		const {dispatch} = this.props;
		if (keyword == '') {
			dispatch(clearSearchResult())
		} else {
			dispatch(searchInformation(keyword))
		}
	}
}

const mapStateToProps = state => ({
	search: state.search,
});
export default connect(mapStateToProps)(SearchInformation);