import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions,ActionConst} from "react-native-router-flux";
import {Container,Content,Text, Thumbnail, Col, Button,Item,Label,Input,Form} from "native-base";
import {theme,request,urls,tools,toast} from "../../utils/";
import {View, Alert,TextInput,ToastAndroid} from "react-native";
import  CommitButton from "./components/CommitButton"
import  {hex_md5} from "./components/md5"
import {login} from "../../actions/user";
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
        this.interval();
    }
    render() {
        var title=(
            <Text style={styles.titleText}>{this.state.text}</Text>
        );

        return (
            <Container style={styles.container}>
                <View style={styles.view}>
                    <Text style={styles.titleText}>恭喜你注册成功！</Text>
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
                    toast.show("!=0")
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
        let {dispatch}=this.props;
        request.getJson(urls.apis.USER_LOGIN,{
            phone:phone,
            password:hex_md5(phone+password),
        }).then((data)=>{
            toast.show(JSON.stringify(data))
            if(data.ok) {
                var authorization = data.obj;
                request.getJson(urls.apis.USER_GETLOGINUSER,{
                    authorization:authorization,
                }).then((data)=>{
                 // 保存用户状态
                 dispatch(login(data.obj));
                if (!data.obj) {
                    //没有基本信息表示第一次登录需要添写信息
                    Actions['startInformation']({
                        phone:phone
                    })
                } else {
                    //基本信息已经添加完成
                    // 跳到首页
                    Actions.index();
                }
                },(error)=>{

                })
            }else{

            }
        },(error)=>{

        })
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
function bindAction(dispatch) {
    return {};
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(SetPassword);




