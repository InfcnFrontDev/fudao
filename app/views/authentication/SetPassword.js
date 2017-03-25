import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions,ActionConst} from "react-native-router-flux";
import { Text, Button} from "native-base";
import {View,TextInput,ToastAndroid} from "react-native";
import {Header,Container,Content} from "../../components/index";
import  CommitButton from "./components/CommitButton"
import  UserInput from "./components/UserInput"
import {theme,request,urls,tools,toast} from "../../utils/";
import  {hex_md5} from "./components/md5";
import {checkPwd} from "./components/public";
import {showLoading, hideLoading} from "../../actions/loading";


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
                <Content>
                    <View style={styles.bag}>
                        <UserInput text="设置密码" placeholder={"6-12位由字母或数字或下划线组成"} secureTextEntry={true}  value={this.state.password}
                                   onChangeText={(value)=>{
                                       this.setState({
                                           password:value
                                       })
                                   }}/>
                        <UserInput text="重复密码" placeholder={"6-12位由字母或数字或下划线组成"} secureTextEntry={true} value={this.state.password1}
                                   onChangeText={(value)=>{
                                       this.setState({
                                           password1:value
                                       })
                                   }}/>
                        <CommitButton  border={false} block={true}  top={20} title="提交" onPress={this._yzPassword.bind(this)}/>
                    </View>

                </Content>
            </Container>
        );
    }
    _yzPassword(){
        let {password,password1} = this.state;
        let {phone} = this.props;
        if(password==""&& password==""){
            toast.show("请设置密码");
        }else if(password1!=password){
            toast.show("两次输入密码不一致");
            this.setState({
                password1:''
            })
        }else if(!checkPwd(password)){
            toast.show("请填入6-12由字母或数字或下划线组成的密码！");
        }else{
            const {dispatch} = this.props;
            /*dispatch(showLoading());*/
            let appid=tools.uuid();
            request.getJson(urls.apis.AUTH_REG,{
                        appid:appid,
                        account: phone,
                        pwd: hex_md5(phone+password)
                }).then((data)=>{
                /*dispatch(hideLoading());*/
                    if(data.success) {
                        setTimeout(function() {
                           /* Actions.passwordSuccess({
                                type: ActionConst.POP_AND_REPLACE,
                                phone:phone,
                                password:password
                            })*/
                           Actions['passwordSuccess']({phone:phone,password:password})
                        }, 1000);
                    }else{
                        toast.show("注册失败");
                    }
                },(error)=>{
                    /*dispatch(hideLoading());*/
                })
        }


    }
}
const styles={
    bag:{
        padding:10,
    },
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(SetPassword);



