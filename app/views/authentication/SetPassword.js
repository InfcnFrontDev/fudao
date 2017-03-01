import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Container, Content, Left, Right, Body, Text, Button,Form} from "native-base";
import {View,TextInput,ToastAndroid} from "react-native";
import Header from "../../../components/header/BaseHeader";

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
                <Content padder>
                    <View style={styles.box2}>
                        <View style={styles.border1}>
                            <Text>输入密码</Text>
                        </View>
                        <View style={{flex:1}}>
                            <TextInput underlineColorAndroid='transparent' placeholder={'至少6位数字/字母/_'}
                                       onChangeText={(value)=>{
                                           this.setState({
                                               password:value
                                           })
                                       }}
                            ></TextInput>
                        </View>
                    </View>
                    <View  style={styles.box3}>
                        <View style={styles.border1}>
                            <Text>重复密码</Text>
                        </View>
                        <View  style={{flex:1}}>
                            <TextInput underlineColorAndroid='transparent'
                                       value={this.state.password1}
                                       onChangeText={(value)=>{
                                           this.setState({
                                               password1:value
                                           })
                                       }}
                            ></TextInput>
                        </View>
                    </View>

                    <Button block success onPress={this._yzpassword.bind(this)} style={{marginTop:20}}>
                        <Text>提交</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
    _yzpassword(){
        let password = this.state.password;
        let password1= this.state.password1;
        if(password1!=password){
            ToastAndroid.show("两次输入密码不一致", ToastAndroid.SHORT);
            this.setState({
                password1:''
            })
        }else{
            Actions['passwordSuccess']()
        }


    }
}
const styles = {

    titleText:{
        textAlign:'center',
        fontSize: 28
    },
    box2:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderColor:'#D4D4D4',
        borderBottomWidth:1,

    },
    box3:{
        flexDirection:'row',

        justifyContent:'space-between',
        alignItems:'center',
        /*  paddingTop:10,
         paddingBottom:10,*/
        borderColor:'#D4D4D4',
        borderBottomWidth:1,

    },
    border1:{
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
export default connect(mapStateToProps, bindAction)(SetPassword);



