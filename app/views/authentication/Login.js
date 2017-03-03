import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Container, Content, Left, Right, Body,  Row,Text, Thumbnail, Col, Button,Item,Label,Input,Form,CheckBox} from "native-base";
import {View, Alert,TextInput,TouchableOpacity,ToastAndroid} from "react-native";
import Header from "../../components/header/BaseHeader";
import {theme,request,urls,} from "../../utils/";
import  CommitButton from "./components/CommitButton";
import  UrseInput from "./components/UrseInput"
import  {hex_md5} from "./components/md5"


/**
 * 登录
 */
class Login extends PureComponent {
    constructor(props){
        super(props);
        this.state={
            phone:'',
            password:'',
            check:true,
        }
    }
    render() {
        return (
            <Container>
                <Header {...this.props}></Header>
                <Content padder>
                    <UrseInput text="用户名"
                               onChangeText={(value)=>{
                                   this.setState({
                                       phone:value
                                   })
                               }}/>
                    <UrseInput text="密码"
                               onChangeText={(value)=>{
                                   this.setState({
                                       password:value
                                   })
                               }}/>
                    <CommitButton title="登录" block={true} border={false}  top={20}  onPress={this._login.bind(this)} />
                    <View style={styles.textdoc}>
                        <View style={{flexDirection:'row'}}>
                        </View>
                        <TouchableOpacity onPress={()=>Actions['register']({text:'找回密码',
                        title:'通过验证码找回密码'})}>
                            <Text  style={styles.text2}>忘记密码</Text>
                        </TouchableOpacity>
                    </View>
                </Content>
            </Container>
        );
    }
    _login(){
             let  phone=this.state.phone;
             let  password=this.state.password;
            /*concat:this.state.concat?this.state.concat:null*/

        if(phone==''){
            ToastAndroid.show("用户名不能为空", ToastAndroid.SHORT);
        }else if(password==''){
            ToastAndroid.show("密码不能为空", ToastAndroid.SHORT);
        }else{
            //接口
            ToastAndroid.show("zoujiekou", ToastAndroid.SHORT);
            request.getJson(urls.apis.LOGIN,{
                    account:phone,
                    pwd:hex_md5(phone+password),
                },function(data){
                    ToastAndroid.show("", ToastAndroid.SHORT);
                    if(data.success) {
                        ToastAndroid.show("登录", ToastAndroid.SHORT);
                        setTimeout(function() {
                            Actions['passwordSuccess']({text:"恭喜您成功"})
                        }, 1000);
                    }else{
                        ToastAndroid.show("失败..", ToastAndroid.SHORT);
                    }
                }
            )
           /* Actions['startInformation']()*/
        }
    }
}
const styles = {

    textdoc:{
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    text1:{
        fontSize:theme.DefaultFontSize-2,
        color:'#666'
    },
    text2:{
        fontSize:theme.DefaultFontSize-2,
        color:'#666',
        textDecorationLine:'underline'
    },
};
function bindAction(dispatch) {
    return {};
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(Login);



