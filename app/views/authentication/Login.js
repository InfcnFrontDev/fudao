import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Container, Content,Text, Thumbnail, Button,CheckBox} from "native-base";
import {View, Alert,TextInput,TouchableOpacity,ToastAndroid} from "react-native";
import Header from "../../components/header/BaseHeader";
import {theme,request,urls,} from "../../utils/";
import  CommitButton from "./components/CommitButton";
import  UrseInput from "./components/UrseInput";
import {login} from "../../actions/user";
import {checkPhone} from "./components/public";

/**
 * 登录
 */
class Login extends PureComponent {
    constructor(props){
        super(props);
        this.state={
            phone:'',
            password:'',
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
                        <TouchableOpacity onPress={()=>Actions['passwordValidate']()}>
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

        if(phone==''){
            ToastAndroid.show("用户名不能为空", ToastAndroid.SHORT);
        }else if(!checkPhone(phone)){
            ToastAndroid.show("请输入正确的用户名", ToastAndroid.SHORT);
        }else if(password==''){
            ToastAndroid.show("密码不能为空", ToastAndroid.SHORT);
        }else{
            const {dispatch} = this.props;
            dispatch(login(phone,password,this.d.bind(this)));
        }
    }

    //根据是否有基本信息选择跳转页面
    d(){
        let {obj} = this.props;
        ToastAndroid.show(JSON.stringify(obj.userInformation), ToastAndroid.SHORT);
        var userInformation = obj.userInformation;
        if(userInformation != undefined) { //基本信息已经添加完成
            Actions['search']()
        } else { //没有基本信息表示第一次登录需要添写信息
            Actions['startInformation']()
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
// const mapStateToProps = (state => state);
const mapStateToProps = state => ({
    obj: state.user.obj,
});

export default connect(mapStateToProps)(Login);



