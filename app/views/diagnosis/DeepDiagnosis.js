import React, {PureComponent} from "react";
import {observer} from "mobx-react/native";
import {Text,WebView} from "react-native";
import {Container, Header, Content, Loading} from "../../components/index";

/**
 * 自诊
 */
@observer
export default class DeepDiagnosis extends PureComponent {

    render() {
        return (
            <Container>
                <Header {...this.props}/>
                <Content>
                    <WebView
                        onMessage={(event)=>this.gotoDeep(event.nativeEvent.data)}
                        source={{uri:urls.pages.DEEP_DIAGNOSIS}}
                        style={{backgroundColor:'rgba(0,0,0,0)'}}
                    />
                </Content>
            </Container>
        )
    }

    gotoDeep(data){
        // Actions
    }


}
const styles = {

};