import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Container, Content, Left, Right, Body, Text, Button,Form} from "native-base";
import {View,TextInput,ToastAndroid} from "react-native";
import Header from "../../components/header/BaseHeader";
import  CommitButton from "./components/CommitButton"
import  UrseInput from "./components/UrseInput"
import {theme,request,urls,tools} from "../../utils/";
import  {hex_md5} from "./components/md5"

/**
 * 设置密码
 */
class SetPassword extends PureComponent {
    constructor(props){
        super(props);
        this.state={
            password:'',
            password1:'',
        }
    }
    render() {
        return (
            <Container>
                <Header {...this.props}></Header>
                <Content padder>
                    <UrseInput text="设置密码" placeholder={"至少6位数字/字母/_"}
                               onChangeText={(value)=>{
                                    this.setState({
                                        password:value
                                    })
                    }}/>
                    <UrseInput text="重复密码"
                               onChangeText={(value)=>{
                                   this.setState({
                                       password1:value
                                   })
                               }}/>
                    <CommitButton  border={false} block={true}  top={20} title="提交" onPress={this._yzPassword.bind(this)}/>
                </Content>
            </Container>
        );
    }
    _yzPassword(){
        let {password,password1} = this.state;
        let {phone} = this.props;
        if(password1!=password){
            ToastAndroid.show("两次输入密码不一致", ToastAndroid.SHORT);
        }else{
            request.getJson(urls.apis.REG,{
                        appid:tools.uuid(),
                        account: phone,
                        pwd: hex_md5(phone+password)
                },function(data){
                    if(data.success) {
                        ToastAndroid.show("注册完成，请登录..", ToastAndroid.SHORT);
                        setTimeout(function() {
                            Actions['passwordSuccess']({text:"恭喜您注册成功",phone:phone,password:password})
                        }, 1000);
                    }else{
                        ToastAndroid.show("注册失败..", ToastAndroid.SHORT);
                    }
                }
            )
        }


    }
}
function bindAction(dispatch) {
    return {};
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(SetPassword);



