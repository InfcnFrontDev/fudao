import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Container, Header, Title, Content, Left, Button, Icon, Body, Right} from "native-base";
import {View, Image} from "react-native";
import {Actions} from "react-native-router-flux";
import QuestionMyself from "./components/QuestionMyself";
import QuestionTab from "./components/QuestionTab";
import {getQuestionTreetment} from '../../actions/my-question.js'

/**
 * 我的问题
 */
class MyQuestionDetail extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentWillMount(){
      const {dispatch} = this.props;
      // dispatch(getQuestionTreetment('40',this.props.renqun))
      dispatch(getQuestionTreetment(this.props.question.id,this.props.renqun))
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

const mapStateToProps = state => ({
    renqun:state.user.loginUser.renqun,
    my_question:state.myQuestion.my_question,
    caipin:state.myQuestion.caipin,
    isShow:state.myQuestion.isShow,
});
export default connect(mapStateToProps)(MyQuestionDetail);
