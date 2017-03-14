/**
 * Created by Administrator on 2017/3/2.
 */
import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import { Text, Button} from "native-base";
import {View,TextInput,ToastAndroid} from "react-native";
import {theme,request,urls,tools,toast} from "../../utils/";
import {Header,Container,Content} from "../../components/index";
import {showLoading, hideLoading} from "../../actions/loading";
import  CommitButton from "./components/CommitButton"
import  UserInput from "./components/UserInput"
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
                <Header back {...this.props}></Header>
                <Content>
                    <View style={styles.bag}>
                        <UserInput text="新密码" placeholder={"至少6位，由数字/字母/_组成"}  value={this.state.password} secureTextEntry={true}
                                   onChangeText={(value)=>{
                                       this.setState({
                                           password:value
                                       })
                                   }}/>
                        <UserInput text="重复密码" value={this.state.password1} secureTextEntry={true}
                                   onChangeText={(value)=>{
                                       this.setState({
                                           password1:value
                                       })
                                   }}/>
                        <CommitButton  border={false} block={true} top={20} title="提交" onPress={this._yzPassword.bind(this)}/>
                    </View>

                </Content>
            </Container>
        );
    }
    _yzPassword(){
        let {phone,password,password1}= this.state;
        if(password==""&& password==""){
            toast.show("请设置密码");
        }else if(password1!=password){
            toast.show("两次输入密码不一致");
            this.setState({
                password:'',
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
                        Actions['rebuildSuccess']({phone:phone,password:password})
                    }else{
                        toast.show("修改失败...");
                    }
                },(error)=>{
                    dispatch(hideLoading());
                })
        }


    }
}
const styles={
    bag:{
        padding:10,
    }
}


const mapStateToProps = state => ({});
export default connect(mapStateToProps)(RebuildPassword);



