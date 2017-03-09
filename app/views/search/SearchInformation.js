import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Container, Content, Left, Right, Body} from "native-base";
import Header from "../../components/header/SearchHeader";
import {searchInformation, clearInformation} from "../../actions/search";
import Result from "./components/InformationResult";

/**
 * 搜索 -> 资讯
 */
class SearchInformation extends PureComponent {

	render() {
		let {isLoading, information} = this.props;
		return (
			<Container>
				<Header placeholder="搜索资讯" onSearch={this.search.bind(this)}/>
				<Content>
					{information.list.length > 0 ? <Result list={information.list}/> : null}
				</Content>
			</Container>
		);
	}

	// 搜索
	search(keyword) {
		const {dispatch} = this.props;
		if (keyword == '') {
			dispatch(clearInformation())
		} else {
			dispatch(searchInformation(keyword))
		}
	}
}

const mapStateToProps = state => ({
	isLoading: state._onSearch.isLoading,
	information: state._onSearch.information,
});
export default connect(mapStateToProps)(SearchInformation);