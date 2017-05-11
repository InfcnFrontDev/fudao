import React, {PureComponent} from "react";
import {observer} from "mobx-react/native";
import {Text, WebView} from "react-native";
import {Container, Header, Content, Loading,} from "../../components/index";
import { Left, Button, Icon} from "native-base";
import {Actions} from "react-native-router-flux";
import userStore from "../../mobx/userStore";

/**
 * 自诊
 */
@observer
export default class Evaluation extends PureComponent {
    state = {
        flag:false,
    };

    // componentWillReceiveProps(nextProps){
    //     this.setState({
    //         flag:true,
    //     })
    // }

    render() {
        return (
            <Container>
                <Header {...this.props} title="返回首页" left={
                    <Left>
                        <Button transparent onPress={() => Actions.pop({popNum: 2})}>
                            <Icon name="arrow-back"/>
                        </Button>
                    </Left>
                }/>
                <Content>
                    {/*{this.state.flag?(*/}
                        {/*<WebView*/}
                            {/*onMessage={(event) => this.gotoDeep(event.nativeEvent.data)}*/}
                            {/*source={{uri: urls.pages.ASSESSMENT_RESULT+ "?flag=" +this.state.flag}}*/}
                            {/*style={{backgroundColor: 'rgba(0,0,0,0)'}}*/}
                        {/*/>*/}
                    {/*):(*/}
                        <WebView
                            onMessage={(event) => this.gotoDeep(event.nativeEvent.data)}
                            source={{uri: urls.pages.HEALTH_APPRAISAL + "?token=" + userStore.token}}
                            style={{backgroundColor: 'rgba(0,0,0,0)'}}
                        />
                    {/*)*/}
                    {/*}*/}

                </Content>
            </Container>
        )
    }

    gotoDeep(data) {
        Actions.deepDiagnosis();
    }


}
const styles = {};
