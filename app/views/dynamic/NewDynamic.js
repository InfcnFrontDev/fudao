import React, { Component } from 'react'
import {Container, Title,Header, Content, Left, Right, Body,Text,Button,Icon} from "native-base";
import { StyleSheet, View, DeviceEventEmitter, TextInput} from 'react-native'
import {connect} from "react-redux";
import Editor from './components/Editor'
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
                onChangeText={this.onChangeText.bind(this)}
                text={this.state.text}/>
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
  textInput:{
    height:100,
  },
}

function bindAction(dispatch) {
    return {
        openDrawer: () => dispatch(openDrawer()),
        closeDrawer: key => dispatch(closeDrawer()),
    };
}

const mapStateToProps = state => ({
  realm:state.realm
});
export default connect(mapStateToProps, bindAction)(NewDynamic);
