import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Container, Content, Left, Right, Body,  Row,Text, Thumbnail, Col, Button,Item,Label,Input,Form} from "native-base";
import {View, Alert,TextInput,TouchableOpacity,ToastAndroid} from "react-native";
import Header from "../../components/header/base";
import styles from "./styles";

/**
 * 注册
 */

class Register extends PureComponent {  // eslint-disable-line
    constructor(props){
        super(props);
        this.state={
            phone:'',
            yannum:'',
        }
    }
    render() {
        return (
            <Container>
                <Header {...this.props}></Header>
                <Content padder>
                    <View style={styles.box2}>
                        <View style={styles.border1}>
                            <Text>手机号</Text>
                        </View>
                        <View style={{flex:1}}>
                            <TextInput style={styles.inputNum}
                                       keyboardType='numeric'
                                       underlineColorAndroid='transparent'
                                       placeholder='输入手机号'
                                       onChangeText={(value)=>{
                                           this.setState({
                                               phone:value
                                           })
                                       }}
                            ></TextInput>
                        </View>
                    </View>
                    <View  style={styles.box3}>
                        <View style={styles.border1}>
                            <Text>验证码</Text>
                        </View>
                        <View style={{flex:1}}>
                            <TextInput style={styles.inputYan}
                                       keyboardType='numeric'
                                       underlineColorAndroid='transparent'
                                       placeholder={'输入验证码'}
                                       onChangeText={(value)=>{
                                           this.setState({
                                               yannum:value
                                           })
                                       }}
                            ></TextInput>
                        </View>
                        <View>
                            <Button success bordered  style={styles.btnYan}
                                    onPress={this._yzm.bind(this)} >
                                <Text>获取验证码</Text>
                            </Button >
                        </View>
                    </View>

                    <Button block success style={{marginTop:20}} onPress={this._zhuce.bind(this)} >
                        <Text>注册</Text>
                    </Button>
                    <Text style={styles.tiaokuan}>点击注册代表您已同意《福道健康使用协议和隐私条款》</Text>
                </Content>
            </Container>
        );
    }
    _yzm(){
        let phone = this.state.phone;
        if(phone.toString().length<11||phone.toString().length>11){
            ToastAndroid.show("请填入正确的手机号", ToastAndroid.SHORT);
        }else{
            ToastAndroid.show("发送验证码。。。", ToastAndroid.SHORT);
        }
    }
    _zhuce(){
        let phone = this.state.phone;
        let yannum = this.state.yannum;
        if(phone==""){
            ToastAndroid.show("手机号不能为空", ToastAndroid.SHORT);
        }else if(yannum==""){
            ToastAndroid.show("验证码不能为空", ToastAndroid.SHORT);
        }else{
            Actions['setPassword']();
        }
    }
    _gotoIndex(){

       /* var user = {
            phone:this.state.phone,
            yannum:this.state.yannum,
            /!*concat:this.state.concat?this.state.concat:null*!/
        }
        if(user.phone==''){

        }else if(user.yannum==''){
m  -
        }else{*/

           /* fetch('http://192.168.10.58:9095/api/LoginAction/register?User='+user)
                .then((res) => res.json())
                .then((res) => {
                    if(!res.err_code) {
                        if(res.ok){
                            this.props.navigator.push({
                                id: 'index',
                                index:0,
                                name:'indexView',
                                params:{
                                    user:{
                                        username:this.state.username,
                                        tokenStr:''
                                    }
                                }
                            })
                            // this.props.navigator.push({
                            //   id:'login'
                            // });
                        }else{
                            Alert.alert(
                                '提示',
                                "很遗憾，注册失败了......",
                                [
                                    {text: '确定'}
                                ]
                            )
                        }
                    }
                })*/

   /*     }*/
    }
}

function bindAction(dispatch) {
    return {};
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(Register);

