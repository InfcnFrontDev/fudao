/**
 * Created by Administrator on 2017/3/1.
 */
import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Text,  Button,Item,Label,Input} from "native-base";
import {View, Alert,TextInput,TouchableOpacity,ToastAndroid} from "react-native";
import Header from "../../components/header/BaseHeader";
import {Container, Content, Loading} from "../../components/index";
import {theme,request,urls,tools} from "../../utils/";
import  CommitButton from "./components/CommitButton";
import  UrseInput from "./components/UrseInput";
import  GetCode from "./components/GetCode";

/**
 * 注册
 */

class Register extends PureComponent {  // eslint-disable-line
    constructor(props){
        super(props);
        this.state={
            isFetching: false,
            phone:'',
            code:'',
        }
    }
    render() {
        let {isFetching} = this.state;
        return (
            <Container>
                <Header {...this.props}></Header>
                <Content padder>
                    <UrseInput text="手机号" btn={false}
                               onChangeText={(value)=>{
                                   this.setState({
                                       phone:value
                                   })
                               }}/>
                    <View style={styles.box}>
                        <View style={styles.border}>
                            <Text>验证码</Text>
                        </View>
                        <TextInput style={{flex:1}} underlineColorAndroid='transparent' keyboardType='numeric'
                                   onChangeText={(value)=>{
                                       this.setState({
                                           code:value
                                       })
                                   }}
                        ></TextInput>
                        <GetCode  border={true} block={false}  title='获取验证码' ref={(e) => this._getGode = e}
                                  onPress={this._yzm.bind(this)} >
                        </GetCode >
                    </View>
                    <CommitButton title='找回密码' block={true} border={false} top={20}  onPress={this._find.bind(this)} />
                    <Loading text={'正在登录...'} isShow={isFetching}/>
                </Content>
            </Container>
        );
    }
    _yzm(){
        let {phone} = this.state;
        if(phone.toString().length<11||phone.toString().length>11){
            tools.toast("请填入正确的手机号");
        }else{
            this.showLoading();
            request.getJson(urls.apis.AUTH_CHECK_PHONE,{
                    phone:phone ,
                    type:'findPwd'
                },function(data){
                this.hideLoading();
                    if(data.success && "existence" == data.msg) {
                        tools.toast("手机号已被注册");
                    } else if(data.success && "existence" != data.msg) {
                        tools.toast("正在发送验证码...");
                    }
                }
            )
        }
    }
    showLoading() {
        this.setState({
            isFetching: true
        })
    }

    hideLoading() {
        this.setState({
            isFetching: false
        })
    }
    _find(){
        let {phone,code} = this.state;
        if(phone==""){
            ToastAndroid.show("手机号不能为空", ToastAndroid.SHORT);
        }else if(code==""){
            ToastAndroid.show("验证码不能为空", ToastAndroid.SHORT);
        }else{
            /*接口*/
            request.getJson(urls.apis.AUTH_CHECK_CODE,{
                    account: phone,
                    code: code,
                    type: 'findPwd',
                },function(data){
                    if(data.success) {
                        Actions['rebuildPassword']({phone:phone});
                    } else {
                        ToastAndroid.show("验证码错误...", ToastAndroid.SHORT);
                    }
                }
            )

        }
    }
}

const styles = {
    box:{
        height:46,
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

function bindAction(dispatch) {
    return {};
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(Register);

