import React, {PureComponent} from "react";
import {observer} from "mobx-react/native";
import {Text, WebView, TouchableHighlight, View} from "react-native";
import {Container, Header, Content, Loading,} from "../../components/index";
import {Left, Button, Icon} from "native-base";
import {Actions} from "react-native-router-flux";
import userStore from "../../mobx/userStore";
import EvaluationResult from "./components/EvaluationResult"
/**
 * 自诊
 */
@observer
export default class Evaluation extends PureComponent {
    state = {
        flag: false,
    };
// <Button transparent onPress={() => Actions.pop({popNum: 2})}>
// <Icon name="arrow-back"/>
// </Button>

    render() {
        return (
            <Container>
                <Content>
                    <WebView
                        onMessage={(event) => this.gotoDeep(event.nativeEvent.data)}
                        source={{uri: urls.pages.HEALTH_APPRAISAL + "?token=" + userStore.token}}
                        style={{backgroundColor: 'rgba(0,0,0,0)'}}
                    />
                    <EvaluationResult ref={(e)=>this._EvaluationResult = e}/>
                </Content>
            </Container>
        )
    }


    gotoDeep(data) {
        if(data=="gotoHome"){
            Actions.pop()
        }else if(data=='sl'){
            this._EvaluationResult.show();
        }else if(data=='xl'){
            this._EvaluationResult.show();
        }else if(data=='sj'){
            this._EvaluationResult.show();
        }else if(data=='zc'){
            this._EvaluationResult.show();
        }else{
            Actions.deepDiagnosis();
        }
    }




}
const styles = {};
