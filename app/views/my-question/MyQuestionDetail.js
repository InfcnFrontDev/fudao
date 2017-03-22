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
      // this.props.question.showVal
        return (
            <Container style={styles.container}>
              <Header>
                  <Left>
                      <Button transparent onPress={()=>Actions.pop()}>
                          <Icon name='arrow-back' />
                      </Button>
                  </Left>
                  <Body>
                      <Title style={styles.title}>{this.props.question.showVal}</Title>
                  </Body>
                  <Right>
                  </Right>
              </Header>
              <View style={styles.content}>
                <QuestionMyself />
                <QuestionTab  question={this.props.question}/>
              </View>
            </Container>
        )
    }
}

const styles = {
  container:{
  },
  content:{
    backgroundColor:'#fff',
    flexDirection:'column',
    flex:1,
  },
};

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(MyQuestionDetail);
