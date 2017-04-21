import React, {PureComponent} from "react";
import {Actions,ActionConst} from "react-native-router-flux";
import {Container,Content,Text, Thumbnail, Col, Button,Item,Label,Input,Form} from "native-base";
import {View, Alert,TextInput,ToastAndroid} from "react-native";
import  CommitButton from "./components/CommitButton";
import  {hex_md5} from "./components/md5";

/**
 * 设置密码
 */
export default class RebuildSuccess extends PureComponent {
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
        );
        this.interval();
        return (
            <Container style={styles.container}>
                <View style={styles.view}>
                    <Text style={styles.titleText}>密码设置成功！</Text>
                    <Text style={{textAlign:'center',marginTop:120}}>{this.state.number}s后自动登录...</Text>
                    <CommitButton title="登录" block={true} border={false} top={20}  onPress={this._login.bind(this,this.state.phone,this.state.password)} />
                </View>
            </Container>
        );
    }
    interval(){
        let self=this;
        let {number} = self.state;
        var c=setInterval(function(){
            if(number==0){
                self._login(self.state.phone,self.state.password)
                clearInterval(c);
            }else{
                number--;
                self.setState({
                    number:number,
                })
            }
        },1000)
    }
    _login(phone,password){
        request.getJson(urls.apis.USER_LOGIN, {
            phone: phone,
            password: hex_md5(phone + password),
        }).then((data) => {
                if (data.ok) {
                    var birthday = data.obj.birthday
                    if (!birthday) {
                        //没有基本信息表示第一次登录需要添写信息
                        Actions['startInformation']({phone:phone})
                    } else {
                        //基本信息已经添加完成
                       /* let user = Object.assign({}, {
                            ...data.obj
                        });
                        // 保存用户状态
                        this.props.dispatch(login(user));*/


                        // 跳到首页
                        Actions.index();
                    }

                } else {

                }
            }, (error) => {

            }
        );
    }
}
const styles = {
    container:{
        justifyContent:'center',
        alignItems:'center',

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







