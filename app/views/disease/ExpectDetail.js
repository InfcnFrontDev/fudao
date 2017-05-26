import React, {PureComponent} from "react";
import {observer} from "mobx-react/native";
import {View, Image, Text} from "react-native";
import {Button} from "native-base";
import {Container, Content, Header,Modal} from "../../components/index";
import MyDiseaseList from "./components/MyDiseaseList";
import DiseaseMethodTabView from "./components/DiseaseMethodTabView";
import QuestionText from "../components/QuestionText"
import DetailModal from "./components/DetailModal"
import expectMethodStore from "../../mobx/expectMethodStore";
import myExpectListStore from "../../mobx/myExpectListStore";
import allExpectListStore from "../../mobx/allExpectListStore";
import questionStore from "../../mobx/questionStore";
import ExpectModal from "./components/ExpectModal"


@observer
export default class ExpectDetail extends PureComponent {

    componentDidMount(){
        expectMethodStore.fetchExpectMethod()
    }

    onTransPress(item){
        myExpectListStore.selectedItemName = item.name
        myExpectListStore.selectedItemId = item.id
        allExpectListStore.selectedItemName = item.name
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
        const {expectMethod} = expectMethodStore;
        const {modalShow,questionId} = questionStore;

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
					<Button transparent style={styles.btnStyle} onPress={()=> allExpectListStore.modalShow =true}>
						<Image source={require('../../assets/disease/jingluo.png')} style={styles.image}/>
					</Button>
				</Content>
                <DetailModal visible={modalShow}>
                    <QuestionText data={questionId} from={'expect'}/>
                </DetailModal>
				<ExpectModal visible={allExpectListStore.modalShow}/>
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
	},
    btnStyle:{
        width: 65,
        height: 65,
        position: 'absolute',
        right:0,
        bottom: 100,
        backgroundColor:'rgba(0,0,0,.0)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image:{
        width:50,
        height:50
    }
}
