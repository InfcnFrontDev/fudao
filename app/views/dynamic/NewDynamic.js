import React, { Component } from 'react'
import {Container, Title,Header, Content, Left, Right, Body,Text,Button,Icon} from "native-base";
import { Image, View, DeviceEventEmitter, TextInput,TouchableHighlight,TouchableOpacity,Alert} from 'react-native'
import {connect} from "react-redux";
import Editor from './components/Editor'
import NewPicture from './components/NewPicture'
import {Actions} from "react-native-router-flux";
import {addNewDynamic} from '../../actions/dynamic.js'


class NewDynamic extends Component{
    constructor(props) {
        super(props)
        this.state = {
            text: '',
        }
    }

    render() {
      var r_but=(
        <Button transparent onPress={this.send.bind(this)}>
            <Text>发表</Text>
        </Button>
      );
      if(this.props.rightButton=='上传中'){
        r_but = (
          <Button transparent>
              <Text>上传中</Text>
          </Button>
        )
      }
        return (
          <Container style={styles.container}>
            <Header >
                <Left  style={{flex:1}}>
                    <Button transparent onPress={()=>Actions.pop()}>
                        <Text>取消</Text>
                    </Button>
                </Left>
                <Body style={{flex:1,alignItems:'center'}}>
                    <Title style={styles.title}>{this.props.title}</Title>
                </Body>
                <Right  style={{flex:1}}>
                  {r_but}
                </Right>
            </Header>
            <Content style={styles.content}>
                <Editor
                    placeholder="说点什么吧..."
                    onChangeText={(text)=>{this.setState({text:text})}}
                    text={this.state.text}/>
                <NewPicture />
            </Content>
          </Container>
        )
    }

    send(){
      if (this.state.text||this.props.renderPicture.length!=0) {
        const {dispatch} = this.props;
        dispatch(addNewDynamic(this.state.text,this.props.newnew,this.props.userId,this.props.renderPicture))
      }else{
        Alert.alert('','内容不能为空~~',[{text:'确定'}])
      }
    }

    onChangeText(text) {
        this.setState({
            text: text,
        })
    }

}

const styles={
  container:{
    flex:1,
  },
  content:{
    backgroundColor:'#fff'
  },
  textInput:{
    height:100,
  },
}

const mapStateToProps = state => ({
  userId:state.user.loginUser.appid,
  rightButton:state.dynamic.rightButton,
  renderPicture:state.dynamic.renderPicture,
});
export default connect(mapStateToProps)(NewDynamic);
