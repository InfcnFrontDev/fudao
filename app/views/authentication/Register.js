/**
 * Created by Administrator on 2017/3/1.
 */
import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions, ActionConst} from "react-native-router-flux";
import {Text, Thumbnail, Col, Button,Item,Label,Input,Form} from "native-base";
import {View, Alert,TextInput,TouchableOpacity,ToastAndroid} from "react-native";
import {showLoading, hideLoading} from "../../actions/loading";
import {Header,Container,Content} from "../../components/index";
import {theme,request,urls,tools,toast} from "../../utils/";
import  CommitButton from "./components/CommitButton";
import  UrseInput from "./components/UrseInput"
import {checkPhone} from "./components/public";
import  GetCode from "./components/GetCode";

/**
 * 注册
 */

class Register extends PureComponent {  // eslint-disable-line
    constructor(props){
        super(props);
        this.state={
            phone:'',
            code:'',
            title:this.props.title,
            text:this.props.text
        }
    }
    render() {
        return (
            <Container>
                <Header back title={this.state.title}></Header>
                <Content>
                    <View style={styles.bag}>
                        <UrseInput text="手机号"
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
                        <CommitButton title='注册' block={true} border={false} top={20}  onPress={this._zhuce.bind(this)} />
                        <TouchableOpacity onPress={()=> this.protocol()}>
                            <Text  style={styles.tiaokuan}>点击注册代表您已同意《福道健康使用协议和隐私条款》</Text>
                        </TouchableOpacity>
                    </View>

                </Content>
            </Container>
        );
    }
    _yzm(){
        let phone = this.state.phone;
        if(!checkPhone(phone)){
            toast.show("请填入正确的手机号");
        }else{
            request.getJson(urls.apis.AUTH_CHECK_PHONE,{
                    phone:phone ,
                    type:'reg'
                }).then((data)=>{
                    if(data.success && "existence" == data.msg) {
                        toast.show("手机号已被注册");
                    } else if(data.success && "existence" != data.msg) {
                        toast.show("正在发送验证码...");
                        this._getGode._click();
                    }
                },(error)=>{

                })

        }
    }
    _zhuce(){
        let {phone,code} = this.state;
        const {dispatch} = this.props;
        if(phone==""){
            toast.show("手机号不能为空");

        }else if(code==""){
            toast.show("验证码不能为空");
        }else{
            /*接口*/
            dispatch(showLoading());
            request.getJson(urls.apis.AUTH_CHECK_CODE,{
                    account: phone,
                    code: code,
                    type: "reg"
                }).then((data)=>{
                    dispatch(hideLoading());
                    if(data.success) {
                        this._getGode.clearTimer();
                        Actions['setPassword']({
                            phone:phone,
                        });
                    } else {
                        toast.show("验证码错误...");
                        this.setState({
                            code:''
                        })
                    }
                },(error)=>{
                    dispatch(hideLoading());
                })
        }
    }
    protocol() {
        Actions.webview({
            title: '用户协议',
            uri: urls.pages.PROTOCOL,
        })
    }

}

const styles = {
    tiaokuan:{
        fontSize:theme.DefaultFontSize-4,
        textAlign:'center',
        marginTop:6,
        color:'#666'
    },
    box:{
        height:54,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderColor:'#D4D4D4',
        borderBottomWidth:1,

    },
    bag:{
        padding:10,
    },
    border:{
        width:80,
        flexDirection:'row',
        justifyContent:'center',
        borderRightWidth:1,
        borderRightColor:"#D4D4D4",

    },
};

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(Register);

