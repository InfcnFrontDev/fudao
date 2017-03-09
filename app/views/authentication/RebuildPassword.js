/**
 * Created by Administrator on 2017/3/2.
 */
import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Container, Content, Left, Right, Body, Text, Button,Form} from "native-base";
import {View,TextInput,ToastAndroid} from "react-native";
import {theme,request,urls,tools} from "../../utils/";
import Header from "../../components/header/BaseHeader";
import {showLoading, hideLoading} from "../../actions/loading";
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
            tools.toast("两次输入密码不一致");
            this.setState({
                password1:''
            })
        }else{
            const {dispatch} = this.props;
            dispatch(showLoading());
            request.getJson(urls.apis.AUTH_NEW_PASSWORD,{
                    phone: phone,
                    pwd: hex_md5(phone+password)
                }).then((data)=>{
                dispatch(hideLoading());
                if(data.success) {
                        Actions['passwordSuccess']({text:"密码设置成功",phone:phone,password:password})
                    }else{
                        tools.toast("修改失败...");
                    }
                },(error)=>{
                    dispatch(hideLoading());
                })
        }


    }
}


const mapStateToProps = state => ({});
export default connect(mapStateToProps)(RebuildPassword);



