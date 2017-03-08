/**
 * Created by Administrator on 2017/3/2.
 */
import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Container, Content, Left, Right, Body, Text, Button,Form} from "native-base";
import {View,TextInput,ToastAndroid} from "react-native";
import {theme,request,urls} from "../../utils/";
import Header from "../../components/header/BaseHeader";
import  CommitButton from "./components/CommitButton"
import  UrseInput from "./components/UrseInput"
import  {hex_md5} from "./components/md5"
/**
 * 设置密码
 */
class RebuildPassword extends PureComponent {
    constructor(props){
        super(props);
        this.state={
            password:'',
            password1:'',
            phone:this.props.phone
        }
    }
    render() {
        return (
            <Container>
                <Header {...this.props}></Header>
                <Content padder>
                    <UrseInput text="新密码" placeholder={""}
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
                    <CommitButton  border={false} block={true} top={20} title="提交" onPress={this._yzPassword.bind(this)}/>
                </Content>
            </Container>
        );
    }
    _yzPassword(){
        let {phone,password,password1}= this.state;
        if(password1!=password){
            ToastAndroid.show("两次输入密码不一致", ToastAndroid.SHORT);
            this.setState({
                password1:''
            })
        }else{
            request.getJson(urls.apis.NEW_PASSWORD,{
                    phone: phone,
                    pwd: hex_md5(phone+password)
                },function(data){
                    if(data.success) {
                            Actions['passwordSuccess']({text:"密码设置成功",phone:phone,password:password})
                    }else{
                        ToastAndroid.show("修改失败.", ToastAndroid.SHORT);
                    }
                }
            )
        }


    }
}
const styles = {



};
function bindAction(dispatch) {
    return {};
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(RebuildPassword);



