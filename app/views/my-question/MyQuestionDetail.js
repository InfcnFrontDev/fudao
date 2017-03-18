import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Container, Header, Title, Content, Left, Button, Icon, Body, Right} from "native-base";
import {View, Image} from "react-native";
import {Actions} from "react-native-router-flux";
import QuestionMyself from "./components/QuestionMyself";
import QuestionTab from "./components/QuestionTab";

/**
 * 我的问题
 */
class MyQuestionDetail extends PureComponent {
    constructor(props) {
        super(props);
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
    flex:1,
  },
};

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(MyQuestionDetail);
