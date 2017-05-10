import React, {PureComponent} from "react";
import {observer} from "mobx-react/native";
import {View, Image, Text} from "react-native";
import {Container, Content, Header,Modal} from "../../components/index";
import MyDiseaseList from "./components/MyDiseaseList";
import DiseaseMethodTabView from "./components/DiseaseMethodTabView";
import QuestionText from "../components/QuestionText"
import DetailModal from "./components/DetailsModal"
import expectMethodStore from "../../mobx/expectMethodStore";
import myExpectListStore from "../../mobx/myExpectListStore";
import allExpectListStore from "../../mobx/allExpectListStore";

/**
 * 我的问题
 */
@observer
export default class ExpectDetail extends PureComponent {

    componentDidMount(){
        expectMethodStore.fetchExpectMethod()
    }

    onTransPress(item){
        myExpectListStore.selectedItemName = item.name
        myExpectListStore.selectedItemId = item.id
        expectMethodStore.expectId = item.id
        expectMethodStore.fetchExpectMethod()
	}

    onItemRemove(item,i) {
        let {myDiseaseList,deleteMyDiseaseListItem} = myDiseaseListStore;
        myDiseaseList.splice(i, 1);
        deleteMyDiseaseListItem(item.id)
        allExpectListStore.fetchAllExpectList()
    }

	render() {
        let {myExpectList,selectedItemId,selectedItemName} = myExpectListStore;
        const {expectMethod,modalShow,questionId} = expectMethodStore;
        // alert(questionId)
		return (
			<Container>
                <Header title = {selectedItemName || this.props.title}/>
				<Content delay>
					<View>
						<Text style={styles.title}>我的问题</Text>
					</View>
					<MyDiseaseList
						data={myExpectList}
						onTransPress = {(item) => this.onTransPress(item)}
						onItemRemove={(item,i) => this.onItemRemove(item,i)}
						selectedItemId={selectedItemId}
					/>
					<DiseaseMethodTabView data={expectMethod} pageKey={'expect'}/>
				</Content>
                <DetailModal visible={modalShow} pageKey={'expect'}>
                    <QuestionText data={questionId} from={'expect'}/>
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
