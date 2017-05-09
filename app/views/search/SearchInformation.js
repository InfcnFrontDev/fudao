import React, {PureComponent} from "react";
import {Container, Content} from "native-base";
import Header from "../../components/header/SearchHeader";
import Result from "./components/InformationResult";

/**
 * 搜索 -> 资讯
 */
export default class SearchInformation extends PureComponent {

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