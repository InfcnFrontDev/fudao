/**
 * Created by Administrator on 2017/3/1.
 */
import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Text,  Button} from "native-base";
import {View, Alert,TextInput,TouchableOpacity,ToastAndroid} from "react-native";
import {Header,Container,Content} from "../../components/index";
import {showLoading, hideLoading} from "../../actions/loading";
import {theme,request,urls,tools,toast} from "../../utils/";
import  CommitButton from "./components/CommitButton";
import  UserInput from "./components/UserInput";
import  GetCode from "./components/GetCode";

/**
 * 注册
 */
const dismissKeyboard = require('dismissKeyboard');
class Register extends PureComponent {  // eslint-disable-line
    constructor(props){
        super(props);
        this.state={
            phone:'',
            code:'',
        }
    }
    render() {
        return (
            <Container>
                <Header {...this.props}></Header>
                <Content>
                    <View style={styles.bag}>
                        <UserInput text="手机号" btn={false}
                                   onChangeText={(value)=>{
                                       this.setState({
                                           phone:value
                                       })
                                   }}/>
                        <View style={styles.box}>
                            <View style={styles.border}>
                                <Text>验证码</Text>
                            </View>
                            <TextInput style={{flex:1}} underlineColorAndroid='transparent' keyboardType='numeric' value={this.state.code}
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
                    </View>

                </Content>
            </Container>
        );
    }
    _yzm(){
        let {phone} = this.state;
        if(phone.toString().length<11||phone.toString().length>11){
            toast.show("请填入正确的手机号");
        }else{
            //关闭软键盘
            dismissKeyboard();
            request.getJson(urls.apis.USER_CHECKPHONEREGISTERED,{
                    phone:phone,
            }).then((data)=>{
                if(data.ok) {
                    //发送验证码接口
                    toast.show("正在发送验证码...");
                    this._getGode._click();
                    request.getJson(urls.apis.USER_SENDCODE,{
                        phone:phone ,
                    }).then((data)=>{
                    },(error)=>{

                    })
                }else{
                    toast.show("手机号没有被注册");
                }
            },(error)=>{

            })
        }
    }
    _find(){
        const {dispatch} = this.props;
        let {phone,code} = this.state;
        if(phone==""){
            ToastAndroid.show("手机号不能为空", ToastAndroid.SHORT);
        }else if(code==""){
            ToastAndroid.show("验证码不能为空", ToastAndroid.SHORT);
        }else{
            /*接口*/
            dispatch(showLoading());
            request.getJson(urls.apis.USER_CHECKCODE,{
                phone: phone,
                code: code,
                }).then((data)=>{
                    dispatch(hideLoading());
                    if(data.ok) {
                        this._getGode.clearTimer();
                        Actions['rebuildPassword']({phone:phone});
                    } else {
                        toast.show("验证码错误...");
                        this.setState({
                            code:'',
                        })
                    }
                },(error)=>{
                    dispatch(hideLoading());
                })
        }
    }
}

const styles = {
    box:{
        height:54,
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
    bag:{
        padding:10,
    }
};


const mapStateToProps = state => ({});
export default connect(mapStateToProps)(Register);

