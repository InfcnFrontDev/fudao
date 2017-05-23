import React, {PureComponent} from "react";
import {observer} from "mobx-react/native";
import {Actions} from "react-native-router-flux";
import {Text,WebView} from "react-native";
import {Container, Header, Content, Loading} from "../../components/index";

/**
 * 自诊
 */
@observer
export default class DeepDiagnosis extends PureComponent {

    render() {
        alert("请到我的页去完善基本信息")
        return (
            <Container>
                <Header {...this.props}/>
                <Content>
                    <WebView
                        onMessage={(event) => this.gotoDeep(event.nativeEvent.data)}
                        source={{uri:urls.pages.DEEP_DIAGNOSIS}}
                        style={{backgroundColor:'rgba(0,0,0,0)'}}
                    />
                </Content>
            </Container>
        )
    }

    gotoDeep(data){
        if(data==2){
            Actions.disease()
        }
    }


}
const styles = {

};
