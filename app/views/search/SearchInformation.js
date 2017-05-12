import React, {PureComponent} from "react";
import {ScrollView} from "react-native";
import {Container, Content, SearchHeader} from "../../components/index";
import InformationResult from "./components/InformationResult";
import {observer} from "mobx-react/native";
import searchStore from "../../mobx/searchStore";


/**
 * 搜索 -> 资讯
 */

@observer
export default class SearchInformation extends PureComponent {

    // 搜索
    search() {
        searchStore.fetchInformation()
        // const {dispatch} = this.props;
        // if (keyword == '') {
        // 	dispatch(clearInformation())
        // } else {
        // 	dispatch(searchInformation(keyword))
        // }
    }

	render() {
		let {information} = searchStore;
		return (
			<Container>
				<SearchHeader placeholder="搜索资讯" onSearch={this.search.bind(this)} onChangeText ={(keyword) =>  searchStore.keyword = keyword}/>
                <Content white>
                    <ScrollView>
                        <InformationResult key="information" data={information}/>
                    </ScrollView>
                </Content>
			</Container>
		);
	}
}