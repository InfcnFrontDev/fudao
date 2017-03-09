import React, { Component } from 'react'
import {Container, Title,Header, Content, Left, Right, Body,Text,Button,Icon} from "native-base";
import { Image, View, DeviceEventEmitter, TextInput,TouchableHighlight,TouchableOpacity} from 'react-native'
import {connect} from "react-redux";
import Editor from './components/Editor'
import NewPicture from './components/NewPicture'
const charFromUtf16 = utf16 => String.fromCodePoint(...utf16.split('-').map(u => '0x' + u))

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
                  <Button transparent onPress={()=>Actions.pop()}>
                      <Text>确定</Text>
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
