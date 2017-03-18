//noinspection JSAnnotator
import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Container, Header, Title, Content, Left, Button, Icon, Body, Right} from "native-base";
import {View, Image, DeviceEventEmitter} from "react-native";
import {Actions} from "react-native-router-flux";
import ExpectMyself from './components/ExpectMyself'
import ExpectAll from '../../components/QuestionAndExpectAll'
import {initialMyExpect} from '../../actions/my-question.js'

/**
 * 我的问题
 */
class MyExpect extends PureComponent {
    constructor(props) {
        super(props);

    }

    componentWillMount(){
      const {dispatch} = this.props;
      dispatch(initialMyExpect(this.props.userId,this.props.my_expect))
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
                <ExpectAll from='myexpect' />
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
  my_expect:state.myQuestion.my_expect,
});
export default connect(mapStateToProps)(MyExpect);
