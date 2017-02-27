import React, {Component} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Container, Content, Left, Right, Body,  Row,Text, Thumbnail, Col, Button,Item,Label,Input,Form} from "native-base";
import {View, Alert,TextInput,ToastAndroid} from "react-native";
import styles from "./styles";

/**
 * 设置密码
 */
class SetPassword extends Component {
    constructor(props){
        super(props);
        this.state={
            number:'4'
        }
    }
    render() {

        this.interval();
        return (
            <Container style={styles.container}>
                <View style={styles.view}>
                    <Text style={styles.titleText}>恭喜你注册成功</Text>
                    <Text style={{textAlign:'center',marginTop:120}}>{this.state.number}s后自动登录...</Text>
                    <Button block success style={{marginTop:10}}
                    onPress={()=>Actions['startInformation']()}
                    >
                        <Text>登录</Text>
                    </Button>
                </View>
            </Container>
        );
    }

    interval(){
        let self=this;
        let num = self.state.number;
        var c=setInterval(function(){
            if(num==0){
                Actions['startInformation']();
                clearInterval(c);
            }else{
                num--;
                self.setState({
                    number:num
                })
            }
        },1000)
    }
}

function bindAction(dispatch) {
    return {};
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(SetPassword);



