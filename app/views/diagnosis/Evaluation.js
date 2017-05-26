import React, {PureComponent} from "react";
import {observer} from "mobx-react/native";
import {Text, WebView, TouchableHighlight, View} from "react-native";
import {Container, Header, Content, Loading,} from "../../components/index";
import {Left, Button, Icon} from "native-base";
import {Actions} from "react-native-router-flux";
import userStore from "../../mobx/userStore";

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
                    <Button transparent style={{position:'absolute',top:0,left:0,zIndex:999999}} onPress={()=>Actions.pop({popNum: 2})}>
                        <View style={{flexDirection:'row'}}>
                            <Icon name="arrow-back" style={{color:"#fff",fontSize:25,}}/>
                            <Text style={{color:"#fff",fontSize:18,paddingLeft:30}}>返回首页</Text>
                        </View>
                    </Button>
                    <WebView
                        onMessage={(event) => this.gotoDeep(event.nativeEvent.data)}
                        source={{uri: urls.pages.HEALTH_APPRAISAL + "?token=" + userStore.token}}
                        style={{backgroundColor: 'rgba(0,0,0,0)'}}
                    />

                </Content>
            </Container>
        )
    }


    gotoDeep(data) {
        Actions.deepDiagnosis();
    }


}
const styles = {};
