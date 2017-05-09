import React, {PureComponent} from "react";
import {observer} from "mobx-react/native";
import {View, Image, DeviceEventEmitter, ScrollView, Text} from "react-native";
import {Container, Content, Header,Modal} from "../../components/index";
import MyDiseaseList from "./components/MyDiseaseList";
import DiseaseMethodTabView from "./components/DiseaseMethodTabView";
import QuestionText from "../components/QuestionText"
import DetailModal from "./components/DetailsModal"
import healthMethodStore from "../../mobx/healthMethodStore";

/**
 * 我的问题
 */
@observer
export default class Health extends PureComponent {

    componentDidMount(){
        healthMethodStore.fetchHealthMethod()
    }


	render() {
        let {healthMethod,modalShow,questionId} = healthMethodStore;
		return (
			<Container>
				<Header {...this.props}/>
				<Content delay>
                    <View style={{height: 140}}>

                    </View>
					<DiseaseMethodTabView data={healthMethod}  pageKey={'health'}/>
				</Content>
                <DetailModal visible={modalShow} pageKey={'health'}>
                    <QuestionText data={questionId} from={'health'}/>
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
