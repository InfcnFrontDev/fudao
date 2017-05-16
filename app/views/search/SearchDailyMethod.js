import React, {PureComponent} from "react";
import {ScrollView} from "react-native";
import {Container, Content, SearchHeader} from "../../components/index";
import DailyMethodResult from "./components/DailyMethodResult";
import {observer} from "mobx-react/native";
import searchStore from "../../mobx/searchStore";
import diseaseMethodStore from "../../mobx/diseaseMethodStore";
import expectMethodStore from "../../mobx/expectMethodStore";
import healthMethodStore from "../../mobx/healthMethodStore";
import QuestionText from "../components/QuestionText"
import DetailModal from "../disease/components/DetailModal"

@observer
export default class SearchDailyMethod extends PureComponent {

    search() {
        let keyword = searchStore.keyword
        if (!keyword) {
            searchStore.symptomProblem = {}
            searchStore.information = {}
            searchStore.dailyMethod = {}
        } else {
            searchStore.fetchDailyMethod()
        }
    }

	render() {
        let {dailyMethod} = searchStore;
        return (
			<Container>
				<SearchHeader placeholder="搜索保健方法" onSearch={this.search.bind(this)} onChangeText ={(keyword) =>  searchStore.keyword = keyword}/>
                <Content white>
                    <ScrollView>
                        <DailyMethodResult key="dailyMethod" data={dailyMethod}/>
                        <DetailModal visible={diseaseMethodStore.modalShow} pageKey={'disease'}>
                            <QuestionText data={diseaseMethodStore.questionId} from={'disease'}/>
                        </DetailModal>
                        <DetailModal visible={expectMethodStore.modalShow} pageKey={'expect'}>
                            <QuestionText data={expectMethodStore.questionId} from={'expect'}/>
                        </DetailModal>
                        <DetailModal visible={healthMethodStore.modalShow} pageKey={'health'}>
                            <QuestionText data={healthMethodStore.questionId} from={'health'}/>
                        </DetailModal>
                    </ScrollView>
                </Content>
			</Container>
		);
	}
}