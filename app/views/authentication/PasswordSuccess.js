import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Container, Content, Left, Right, Body,  Row,Text, Thumbnail, Col, Button,Item,Label,Input,Form} from "native-base";
import {View, Alert,TextInput,ToastAndroid} from "react-native";
import {theme} from "../../utils/";
import  CommitButton from "./components/CommitButton"
import  {login} from "./components/public"

/**
 * 设置密码
 */
class SetPassword extends PureComponent {
    constructor(props){
        super(props);
        this.state={
            number:'3',
            text:this.props.text,
            phone:this.props.phone,
            password:this.props.password,
        }
    }
    render() {
        var title=(
            <Text style={styles.titleText}>{this.state.text}</Text>
        )
        this.interval();
        return (
            <Container style={styles.container}>
                <View style={styles.view}>
                    {title}
                    <Text style={{textAlign:'center',marginTop:120}}>{this.state.number}s后自动登录...</Text>
                    <CommitButton title="登录" block={true} border={false} top={20}  onPress={this._login.bind(this)} />
                </View>
            </Container>
        );
    }
    interval(){
        let self=this;
        let num = self.state.number;
        var c=setInterval(function(){
            if(num==0){
                login(self.state.phone,self.state.password)
                clearInterval(c);
            }else{
                num--;
                self.setState({
                    number:num
                })
            }
        },1000)
    }
    _login(){
        let phone = this.this.state.phone;
        let password = this.this.state.password;
        login(phone,password)
    }
}
const styles = {
    container:{
        justifyContent:'center',
        alignItems:'center'
    },
    view:{
        width:300,
        height:300,
    },
    titleText:{
        textAlign:'center',
        fontSize: theme.DefaultFontSize+8
    },
};
function bindAction(dispatch) {
    return {};
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(SetPassword);




