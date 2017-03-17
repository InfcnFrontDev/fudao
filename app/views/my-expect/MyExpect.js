//noinspection JSAnnotator
import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Container, Header, Title, Content, Left, Button, Icon, Body, Right} from "native-base";
import {View, Image, DeviceEventEmitter} from "react-native";
import {Actions} from "react-native-router-flux";
import {store} from "../../store/configureStore.js";
import {newRealm} from "../../actions/realm.js";
import schema from "../../realm/schema.js";
import ExpectMyself from "./components/ExpectMyself";
import ExpectAll from "./components/ExpectAll";

/**
 * 我的问题
 */
class MyExpect extends PureComponent {
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
                  <Right>
                  </Right>
              </Header>
              <Content style={styles.content}>
                <ExpectMyself />
                <ExpectAll />
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
  },
};
function bindAction(dispatch) {
    return {
        newRealm: ()=>dispatch(newRealm(schema)),
    };

}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(MyExpect);
