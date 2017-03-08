/**
 * Created by Administrator on 2017/3/1.
 */
import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Container, Content, Left, Right, Body,  Row,Text, Thumbnail, Col, Button,Item,Label,Input,Form} from "native-base";
import {View, Alert,TextInput,TouchableOpacity,ToastAndroid} from "react-native";
import Header from "../../components/header/BaseHeader";
import {theme,request,urls} from "../../utils/";
import  CommitButton from "./components/CommitButton";
import  UrseInput from "./components/UrseInput"
import {checkPhone} from "./components/public";
/**
 * 注册
 */

class Register extends PureComponent {  // eslint-disable-line
    constructor(props){
        super(props);
        this.state={
            phone:'',
            yannum:'',
            title:this.props.title,
            text:this.props.text
        }
    }
    render() {
        return (
            <Container>
                <Header title={this.state.title}></Header>
                <Content padder>
                    <UrseInput text="手机号" btn={false}
                               onChangeText={(value)=>{
                                   this.setState({
                                       phone:value
                                   })
                               }}/>
                    <UrseInput text="验证码"  title="获取验证码" top={2} btn={true}
                               onChangeText={(value)=>{
                                   this.setState({
                                       yannum:value
                                   })
                               }}
                               onPress={this._yzm.bind(this)}
                    />
                    <CommitButton title='注册' block={true} border={false} top={20}  onPress={this._zhuce.bind(this)} />
                    <Text style={styles.tiaokuan}>点击注册代表您已同意《福道健康使用协议和隐私条款》</Text>
                </Content>
            </Container>
        );
    }
    _yzm(){
        let phone = this.state.phone;
        if(!checkPhone(phone)){
            ToastAndroid.show("请填入正确的手机号", ToastAndroid.SHORT);
        }else{
            request.getJson(urls.apis.CHECK_PHONE,{
                    phone:phone ,
                    type:'reg'
                },function(data){
                    ToastAndroid.show("。。。", ToastAndroid.SHORT);
                    if(data.success && "existence" == data.msg) {
                        ToastAndroid.show("手机号已被注册", ToastAndroid.SHORT);
                    } else if(data.success && "existence" != data.msg) {
                        ToastAndroid.show("正在发送验证码...", ToastAndroid.SHORT);
                    }
                }
            )
        }
    }
    _zhuce(){
        let phone = this.state.phone;
        let code = this.state.yannum;
        if(phone==""){
            ToastAndroid.show("手机号不能为空", ToastAndroid.SHORT);
        }else if(code==""){
            ToastAndroid.show("验证码不能为空", ToastAndroid.SHORT);
        }else{
            /*接口*/
            request.getJson(urls.apis.CHECK_CODE,{
                    account: phone,
                    code: code,
                    type: "reg"
                },function(data){
                    ToastAndroid.show("走接口...", ToastAndroid.SHORT);
                    if(data.success) {
                        ToastAndroid.show("验证码正确", ToastAndroid.SHORT);
                        Actions['setPassword']({phone:phone});
                    } else {
                        ToastAndroid.show("验证码错误...", ToastAndroid.SHORT);
                    }
                }
            )

        }
    }
    _gotoIndex() {


    }
}

const styles = {
    tiaokuan:{
        fontSize:theme.DefaultFontSize-3,
        textAlign:'center',
        marginTop:6,
        color:'#666'
    }
};

function bindAction(dispatch) {
    return {};
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(Register);

