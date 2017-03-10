import React, { Component } from 'react'
import {Container, Title,Header, Content, Left, Right, Body,Text,Button,Icon} from "native-base";
import { Image, View, DeviceEventEmitter, TextInput,TouchableHighlight,TouchableOpacity} from 'react-native'
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
                  <Button transparent onPress={this.send.bind(this)}>
                      <Text>发表</Text>
                  </Button>
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
      const {dispatch} = this.props;
      // var newDynamic ={
      //   "content":this.state.text,
      //   "dynamicComments":{},
      //   "dynamicImg":"还未处理",
      //   "dynamicPraises":{},
      //   "id":"34b71c7f9342472dbf778406bd245fae",
      //   "nick":"12345678",
      //   "publishTime":1489045800000,
      //   "type":1,
      //   "userId":"867516022307943,86751602230794380640149",
      //   flag:false,
      //   show:false
      // }
      dispatch(addNewDynamic(this.state.text,this.props.newnew))
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
});
export default connect(mapStateToProps)(NewDynamic);
