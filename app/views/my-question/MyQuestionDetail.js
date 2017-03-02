//noinspection JSAnnotator
import React, {PureComponent} from "react";

import {connect} from "react-redux";
import {Container, Header, Title, Content, ListItem, Text, Left, Button, Icon, Body, Right} from "native-base";
import {View,Image,DeviceEventEmitter} from "react-native";
import {openDrawer, closeDrawer} from "../../actions/drawer";
import {Actions} from "react-native-router-flux";
import {store} from '../../store/configureStore.js';
import {newRealm} from '../../actions/realm.js'
import schema from '../../realm/schema.js'
import QuestionMyself from './components/QuestionMyself'
import QuestionTab from './components/QuestionTab'

/**
 * 我的问题
 */
class MyQuestionDetail extends PureComponent {
    constructor(props) {
        super(props);
        this.props.newRealm();
    }

    render() {
        return (
            <Container style={styles.container}>
              <Header>
                  <Left>
                      <Button transparent onPress={()=>Actions.pop()}>
                          <Icon name='arrow-back' />
                      </Button>
                  </Left>
                  <Body>
                      <Title style={styles.title}>{this.props.question_title}</Title>
                  </Body>
                  <Right>
                  </Right>
              </Header>
              <Content style={styles.content}>
                <QuestionMyself />
                <QuestionTab />
              </Content>
            </Container>
        )
    }
}

const styles = {
  container:{
    backgroundColor:'#fff',
  },
  content:{
    backgroundColor:'#fff',
    flexDirection:'column',
  },
};

function bindAction(dispatch) {
    return {
        newRealm: ()=>dispatch(newRealm(schema)),
        openDrawer: () => dispatch(openDrawer()),
        closeDrawer: key => dispatch(closeDrawer()),
    };

}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(MyQuestionDetail);
