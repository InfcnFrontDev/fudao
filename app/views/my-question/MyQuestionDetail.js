import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Header, Title, Left, Button, Icon, Body, Right} from "native-base";
import {Container, Content, Loading} from "../../components/index";
import {View, Image} from "react-native";
import {Actions} from "react-native-router-flux";
import QuestionMyself from "./components/QuestionMyself";
import QuestionTab from "./components/QuestionTab";
import {getQuestionTreetment} from '../../actions/my-question.js'
import {request,urls,toast} from "../../utils/index";

/**
 * 我的问题
 */
class MyQuestionDetail extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          currentQuestion: props.question
        }
    }

    componentWillMount(){
        const {dispatch} = this.props;
        let {currentQuestion} = this.state;
        // dispatch(getQuestionTreetment('40',this.props.renqun))
        request.getJson(urls.apis.MY_QUESTION_TREETMENT,{
          diseaseId:currentQuestion.id,
          renqun:'aged',
          local:'北京'
        }).then((res)=>{
          this.setState({
           currentQuestion: Object.assign(res.obj, currentQuestion)
         })
      })
        // dispatch(getQuestionTreetment(this.props.question.id,this.props.renqun))
    }

    render() {
      let {currentQuestion} = this.state;
        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button transparent onPress={()=>Actions.pop()}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                    <Title style={styles.title}>{currentQuestion && currentQuestion.showVal}</Title>
                    </Body>
                    <Right />
                </Header>
                <Content delay>
                    <QuestionMyself onItemPress={(question) => this._onItemPress(question)}/>
                    <QuestionTab question={currentQuestion}/>
                </Content>
            </Container>
        )
    }

    _onItemPress(question){
      this.setState({
       currentQuestion: null
     })
      request.getJson(urls.apis.MY_QUESTION_TREETMENT,{
        diseaseId:question.id,
        renqun:'aged',
        local:'北京'
      }).then((res)=>{
        this.setState({
         currentQuestion: Object.assign(res.obj, question)
       })
    })
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
    currentDetail:state.myQuestion.currentDetail,
    isShow:state.myQuestion.isShow,
});
export default connect(mapStateToProps)(MyQuestionDetail);
