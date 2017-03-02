import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Container, Content, Left, Right, Body,  Row,Text, Thumbnail, Col, Button,Item,Label,Input,Form,CheckBox} from "native-base";
import {View, Alert,TextInput,TouchableOpacity,ToastAndroid} from "react-native";
import Header from "../../components/header/BaseHeader";
import {theme} from "../../utils/"
import  CommitButton from "./components/CommitButton";
import  UrseInput from "./components/UrseInput"



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
                            <CheckBox checked={this.state.check}  onPress={(checked)=>{
                                this.setState({
                                    check:!this.state.check
                                })
                            }}></CheckBox>
                            <Text style={styles.text1}>记住密码</Text>
                        </View>
                        <TouchableOpacity onPress={()=>Actions['rebuildPassword']()}>
                            <Text  style={styles.text2}>忘记密码</Text>
                        </TouchableOpacity>
                    </View>
                </Content>
            </Container>
        );
    }
    _login(){
        var user = {
            phone:this.state.phone,
            password:this.state.password,
            /*concat:this.state.concat?this.state.concat:null*/
        }
        if(user.phone==''){
            ToastAndroid.show("用户名不能为空", ToastAndroid.SHORT);
        }else if(user.password==''){
            ToastAndroid.show("密码不能为空", ToastAndroid.SHORT);
        }else{
            //接口
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
function bindAction(dispatch) {
    return {};
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(Login);



