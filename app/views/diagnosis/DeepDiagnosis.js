import React, {PureComponent} from "react";
import {observer} from "mobx-react/native";
import {Actions} from "react-native-router-flux";
import {Text, WebView, Alert} from "react-native";
import {Container, Header, Content, Loading} from "../../components/index";
import userStore from "../../mobx/userStore";
import allDiseaseListStore from "../../mobx/allDiseaseListStore";
import diseaseMethodStore from "../../mobx/diseaseMethodStore";
import myDiseaseListStore from "../../mobx/myDiseaseListStore";

/**
 * 自诊
 */
@observer
export default class DeepDiagnosis extends PureComponent {

    componentWillMount() {
        Alert.alert('', '完善体检信息，会让您的测评更准确哦！', [
            {text: '取消'},
            {
                text: '去完善>>',
                onPress: () => Actions.medicalExamination()
            }
        ])
        // myDiseaseListStore.fetchMyDiseaseList();
    }

    render() {
        return (
            <Container>
                <Header {...this.props}/>
                <Content>
                    <WebView
                        onMessage={(event) => this.gotoDeep(event.nativeEvent.data)}
                        source={{uri: urls.pages.DEEP_DIAGNOSIS + "?token=" + userStore.token}}
                        style={{backgroundColor: 'rgba(0,0,0,0)'}}
                    />
                </Content>
            </Container>
        )
    }

    gotoDeep(data) {
        if (data == 2) {
            request.getJson(urls.apis.DISEASE_GETMYDISEASELIST).then((res) => {
                var item = res.obj[0];
                myDiseaseListStore.myDiseaseList = res.obj
                myDiseaseListStore.selectedItemName = item.name
                myDiseaseListStore.selectedItemId = item.id
                allDiseaseListStore.selectedItemName = item.name
                diseaseMethodStore.diseaseId = item.id
                Actions.diseaseDetail({title: item.name, data: item})
            })

        }
    }


}
const styles = {};
