import React, {PureComponent} from "react";
import {TouchableOpacity, ScrollView,View} from "react-native";
import {Container, Content, SearchHeader} from "../../components/index";
import Category from "./components/SearchCategory";
import Separator from "../../components/Separator";

import SymptomProblemResult from "./components/SymptomProblemResult";
import DailyMethodResult from "./components/DailyMethodResult";
import InformationResult from "./components/InformationResult";
import {observer} from "mobx-react/native";
import searchStore from "../../mobx/searchStore";

import diseaseMethodStore from "../../mobx/diseaseMethodStore";
import expectMethodStore from "../../mobx/expectMethodStore";
import healthMethodStore from "../../mobx/healthMethodStore";
import QuestionText from "../components/QuestionText"
import DetailModal from "../disease/components/DetailsModal"
/**
 * 搜索
 */
@observer
export default class Search extends PureComponent {

    componentWillMount(){
        searchStore.symptomProblem = {}
        searchStore.information = {}
        searchStore.dailyMethod = {}
    }
    onChangeText(keyword){
        searchStore.keyword = keyword
    }
    // 搜索
    search() {
        let keyword = searchStore.keyword
        if (!keyword) {
            searchStore.symptomProblem = {}
            searchStore.information = {}
            searchStore.dailyMethod = {}
        } else {
            searchStore.fetchAll()
        }
    }

   isEmptyObject(obj) {
        for (var key in obj) {
            return false;
        }
        return true;
    }

	render() {
		let {symptomProblem, information, dailyMethod} = searchStore
		let	isShowCategory = this.isEmptyObject(symptomProblem)&& this.isEmptyObject(information) && !dailyMethod.length > 0
		return (
			<Container>
				<SearchHeader placeholder="搜索" onSearch={this.search.bind(this)} onChangeText ={(keyword) => this.onChangeText(keyword)}/>
				<Content white>
					<ScrollView>
                        {isShowCategory && <Category key="category"/>}
                        {this.isEmptyObject(symptomProblem) ? <View/>: <View>
                            <Separator title="症状和问题"/>
                            <SymptomProblemResult key="symptomProblem" data={symptomProblem}/>
                        </View>}
                        {dailyMethod.length > 0 ? <View>
                            <Separator title="保健方法"/>
                            <DailyMethodResult key="dailyMethod" data={dailyMethod}/>
                        </View>: <View/>}
                        {this.isEmptyObject(information) ? <View/>: <View>
                            <Separator title="咨询"/>
                            <InformationResult key="information" data={information}/>
                        </View>}

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
		)
	}
}