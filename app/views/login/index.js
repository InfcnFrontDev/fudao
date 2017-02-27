import React, {Component} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Container, Content, Left, Right, Body,  Row,Text, Thumbnail, Col, Button,Item,Label,Input,Form,CheckBox} from "native-base";
import {View, Alert,TextInput,TouchableOpacity,ToastAndroid} from "react-native";
import Header from "../../components/header/base";
import styles from "./styles";

/**
 * 登录
 */
class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            phone1:'',
            password:'',
            check:true,
        }
    }
    render() {

        return (
            <Container>
                <Header {...this.props}></Header>
                <Content padder>
                    <View style={styles.box2}>
                        <View style={styles.border1}>
                            <Text>用户名</Text>
                        </View>
                        <View style={{flex:1}}>
                            <TextInput style={styles.inputNum}
                                       keyboardType='numeric'
                                       underlineColorAndroid='transparent'
                                       placeholder='输入手机号'
                                       onChangeText={(value) => {
                                           this.setState({
                                               phone:value
                                           })
                                       }}
                            ></TextInput>
                        </View>
                    </View>
                    <View  style={styles.box3}>
                        <View style={styles.border1}>
                            <Text>密码</Text>
                        </View>
                        <View style={{flex:1}}>
                            <TextInput style={styles.inputYan}
                                       keyboardType='numeric'
                                       underlineColorAndroid='transparent'
                                       placeholder={'输入密码'}
                                       onChangeText={(value) => {
                                           this.setState({
                                               yannum:value
                                           })
                                       }}
                            ></TextInput>
                        </View>
                    </View>
                    <Button block success onPress={()=>Actions['startInformation']()} style={{marginTop:20}}>
                        <Text>登录</Text>
                    </Button>
                      <View style={styles.textdoc}>
                            <View style={{flexDirection:'row'}}>
                                <CheckBox  checked={this.state.check} onPress={(checked)=>{
                                    this.setState({
                                        check:!this.state.check
                                    })
                                }}></CheckBox>
                                <Text style={styles.text1}>记住密码</Text>
                            </View>
                            <Text  style={styles.text2}>忘记密码</Text>
                        </View>
                </Content>
            </Container>
        );
    }
    gotologin(){
        var user = {
            phone1:this.state.phone1,
            password:this.state.password,
            /*concat:this.state.concat?this.state.concat:null*/
        }
        if(user.phone1==''){
            ToastAndroid.show("用户名不能为空", ToastAndroid.SHORT);
        }else if(user.password==''){
            ToastAndroid.show("密码不能为空", ToastAndroid.SHORT);
        }else{


        }
    }
    _checkbox(){
        var check=this.state.check;
        return check;
    }
}


function bindAction(dispatch) {
    return {};
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(Login);
