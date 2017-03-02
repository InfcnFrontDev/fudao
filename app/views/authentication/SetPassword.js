import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Container, Content, Left, Right, Body, Text, Button,Form} from "native-base";
import {View,TextInput,ToastAndroid} from "react-native";
import Header from "../../components/header/BaseHeader";
import  CommitButton from "./components/CommitButton"
import  UrseInput from "./components/UrseInput"

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
                    <CommitButton  border={false} block={true}  top={20} title="提交" onPress={this._yzpassword.bind(this)}/>
                </Content>
            </Container>
        );
    }
    _yzpassword(){
        let phone = this.state.password;
        let password = this.state.password;
        let password1= this.state.password1;
        if(password1!=password){
            ToastAndroid.show("两次输入密码不一致", ToastAndroid.SHORT);
        }else{
           //接口
            request.getJson(urls.REG,{
                    phone:this.props.phone ,

                    pwd: hex_md5(_phone + passwordValue)
                },function(data){
                    ToastAndroid.show("。。。", ToastAndroid.SHORT);
                    console.log('123445')
                    if(data.success && "existence" == data.msg) {
                        ToastAndroid.show("手机号已被注册", ToastAndroid.SHORT);
                        document.activeElement.blur();
                    } else if(data.success && "existence" != data.msg) {
                        ToastAndroid.show("正在发送验证码...", ToastAndroid.SHORT);
                    }
                }
            )
            Actions['passwordSuccess']({text:"恭喜您注册成功"})
        }


    }
}
const styles = {



};
function bindAction(dispatch) {
    return {};
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(SetPassword);



