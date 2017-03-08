
//noinspection JSAnnotator
'use strict';
import React, {PureComponent} from "react";
import {Actions} from "react-native-router-flux";
import {Container, Title, Content, Left, Right, Body, Form, Input, Item,Thumbnail,Button,Text} from "native-base";
import {View,TextInput} from "react-native";
import  CommitButton from "./CommitButton"



/**
 *用户输入框
 */
class UrseInput extends PureComponent {
    constructor(props) {
        super(props);
        this.state={
            btn:this.props.btn,
            text:this.props.text,
        }
    }
    render() {
        var button1=(null);
        var key='default'
        if(this.state.btn){
            var button1=(
                <CommitButton  border={true} block={false} top={this.props.top} title={this.props.title}
                               onPress={this.props.onPress} >
                </CommitButton >
            )
        }
        if(this.state.text=="手机号"||this.state.text=="验证码"||this.state.text=="用户名"){
          key='numeric'
        }

        return (
            <View style={styles.box}>
                <View style={styles.border}>
                    <Text>{this.props.text}</Text>
                </View>
                <TextInput style={{flex:1}} underlineColorAndroid='transparent' placeholder={this.props.placeholder} keyboardType={key}
                           onChangeText={this.props.onChangeText}
                ></TextInput>
                {button1}
            </View>




        )
    }
}
const styles = {
    box:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderColor:'#D4D4D4',
        borderBottomWidth:1,

    },
    border:{
        width:80,
        flexDirection:'row',
        justifyContent:'center',
        borderRightWidth:1,
        borderRightColor:"#D4D4D4",

    },

};
export default UrseInput
