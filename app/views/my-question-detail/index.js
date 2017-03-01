//noinspection JSAnnotator
import React, {PureComponent} from "react";

import {connect} from "react-redux";
import {Container, Header, Title, Content, ListItem, Text, Left, Button, Icon, Body, Right} from "native-base";
import {View,Image,DeviceEventEmitter} from "react-native";
import {openDrawer, closeDrawer} from "../../actions/drawer";
import styles from "./styles";
import {Actions} from "react-native-router-flux";
import {store} from '../../store/configureStore.js';
import {newRealm} from '../../actions/realm.js'
import schema from '../../realm/schema.js'
//我的问题公共部分，结构待调整
import QuestionMyself from './question-myself'

/**
 * 我的问题
 */
class MyQuestion extends PureComponent {
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
                      <Title>{this.props.title}</Title>
                  </Body>
                  <Right style={styles.right}>
                  </Right>
              </Header>
              <Content style={styles.content}>
                <QuestionMyself />
              </Content>
            </Container>
        )
    }

}
function bindAction(dispatch) {
    return {
        newRealm: ()=>dispatch(newRealm(schema)),
        openDrawer: () => dispatch(openDrawer()),
        closeDrawer: key => dispatch(closeDrawer()),
    };

}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(MyQuestion);
