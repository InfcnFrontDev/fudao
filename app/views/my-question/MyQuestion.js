//noinspection JSAnnotator
import React, {PureComponent} from "react";

import {connect} from "react-redux";
import {Container, Header, Title, Content, ListItem, Text, Left, Button, Icon, Body, Right} from "native-base";
import {View,Image,DeviceEventEmitter} from "react-native";
import {openDrawer, closeDrawer} from "../../actions/drawer";
import {Actions} from "react-native-router-flux";
import QuestionMyself from './components/QuestionMyself'
import QuestionAll from '../../components/QuestionAndExpectAll'
import {initialMyQuestion} from '../../actions/my-question.js'

/**
 * 我的问题
 */
class MyQuestion extends PureComponent {
    constructor(props) {
        super(props);

    }

    componentWillMount(){
      const {dispatch} = this.props;
      dispatch(initialMyQuestion(this.props.userId,this.props.my_question))
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
                <QuestionMyself />
                <QuestionAll from='myquestion'/>
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

const mapStateToProps = state => ({
  userId:state.user.loginUser.appid,
  my_question:state.myQuestion.my_question,
});
export default connect(mapStateToProps)(MyQuestion);
