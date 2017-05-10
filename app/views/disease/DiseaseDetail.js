import React, {PureComponent} from "react";
import {observer} from "mobx-react/native";
import {View, Image, DeviceEventEmitter, ScrollView, Text} from "react-native";
import {Container, Content, Header,Modal} from "../../components/index";
import MyDiseaseList from "./components/MyDiseaseList";
import DiseaseMethodTabView from "./components/DiseaseMethodTabView";
import diseaseMethodStore from "../../mobx/diseaseMethodStore";
import QuestionText from "../components/QuestionText"
import DetailModal from "./components/DetailsModal"
import myDiseaseListStore from "../../mobx/myDiseaseListStore";
import allDiseaseListStore from "../../mobx/allDiseaseListStore";


/**
 * 我的问题
 */
@observer
export default class DiseaseDetail extends PureComponent {

    componentDidMount(){
        diseaseMethodStore.fetchDiseaseMethod()
    }

    onTransPress(item){
        myDiseaseListStore.selectedItemName = item.name
        myDiseaseListStore.selectedItemId = item.id
        diseaseMethodStore.diseaseId = item.id
        diseaseMethodStore.fetchDiseaseMethod()
	}

    onItemRemove(item,i) {
        let {myDiseaseList,deleteMyDiseaseListItem} = myDiseaseListStore;
        myDiseaseList.splice(i, 1);
        deleteMyDiseaseListItem(item.id)
        allDiseaseListStore.fetchAllDiseaseList()
    }

	render() {
        let {myDiseaseList,selectedItemId,selectedItemName} = myDiseaseListStore;
        const {diseaseMethod,modalShow,questionId} = diseaseMethodStore;
		return (
			<Container>
				<Header title = {selectedItemName || this.props.title}/>
				<Content delay>
					<View>
						<Text style={styles.title}>我的问题</Text>
					</View>
					<MyDiseaseList
						data={myDiseaseList}
						onTransPress = {(item) => this.onTransPress(item)}
						onItemRemove={(item,i) => this.onItemRemove(item,i)}
						selectedItemId={selectedItemId}
					/>
					<DiseaseMethodTabView data={diseaseMethod} pageKey={'disease'}/>
				</Content>
                <DetailModal visible={modalShow} pageKey={'disease'}>
                    <QuestionText data={questionId} from={'question'}/>
                </DetailModal>
			</Container>
		)
	}
}

const styles = {
	title: {
		fontSize: theme.DefaultFontSize,
		color: '#FFF',
		fontWeight: '400',
		marginTop: 10,
		marginBottom: 10,
		marginLeft: 12,
	}
}
