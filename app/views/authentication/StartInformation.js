/**
 * Created by Administrator on 2017/3/1.
 */
//noinspection JSAnnotator
'use strict';
import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Thumbnail,Text,Icon} from "native-base";
import {View,Image,TouchableOpacity,TouchableHighlight,ToastAndroid, DatePickerAndroid,} from "react-native";
import {Header,Container,Content} from "../../components/index";
import {openDrawer, closeDrawer} from "../../actions/drawer";
import {theme,urls,tools,request,toast} from "../../utils/";
import  CommitButton from "./components/CommitButton"
/**
 * 首次登录设置个人信息页
 */


class StartInformation extends PureComponent {
    constructor(props) {
        super(props);
        this.state={
            showM:true,
            simpleText:"03/22/06",
            position:'北京市',

        }
    }
    async showPicker(stateKey, options) {
        let option={
            options,
            mode:'spinner'
        }
        try {
            var newState = {};
            const {action, year, month, day} = await DatePickerAndroid.open(option);
            if (action === DatePickerAndroid.dismissedAction) {
                newState[stateKey + 'Text'] = 'dismissed';
            } else {
                var date = new Date(year, month, day);
                newState[stateKey + 'Text'] = date.toLocaleDateString();
                newState[stateKey + 'Date'] = date;
            }
            this.setState(newState);
        } catch ({code, message}) {
            console.warn(`Error in example '${stateKey}': `, message);
        }
    }

    render() {
        var mbM=(
            <TouchableOpacity onPress={()=>{
                this.setState({
                    showM:true,
                    language:12
                })
            }}>
                <Thumbnail style={styles.touxiang} size={80} source={require('./assets/man.png')}/>
            </TouchableOpacity>
        );
        var mbW=(
            <TouchableOpacity onPress={()=>{
                this.setState({
                    showM:false,
                })
            }}>
                <Thumbnail style={styles.touxiang} size={80} source={require('./assets/woman.png')}/>
            </TouchableOpacity>
        );

        if(this.state.showM){
            mbW= (
                <TouchableOpacity onPress={()=>{
                    this.setState({
                        showM:false,
                    })
                }}>
                    <View style={styles.mb}></View>
                    <Thumbnail style={styles.touxiang} size={80}  source={require('./assets/woman.png')}/>
                </TouchableOpacity>
            )
        }else{
            mbM =(
                <TouchableOpacity onPress={()=>{
                    this.setState({
                        showM:true,
                    })
                }}>
                    <View style={styles.mb}></View>
                    <Thumbnail style={styles.touxiang} size={80} source={require('./assets/man.png')}/>
                </TouchableOpacity>
            )
        }
        return (
            <Container style={styles.container}>
                <Header back {...this.props}></Header>
                <Content padder >
                    <View style={styles.bigBox}>
                        <View style={styles.box}>
                            <View style={styles.photo}>
                                {mbM}
                                {mbW}
                            </View>
                            <View  style={styles.row1}>
                                <Text style={styles.text1}>请选择您的生日</Text>
                                <TouchableOpacity style={styles.btn}  onPress={this.showPicker.bind(this, 'simple', {date: this.state.simpleDate})}>
                                    <Text style={styles.text2}>{this.state.simpleText}</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.btn1}>
                                <Icon  name='navigate' />
                                <Text  style={styles.text3}>{this.state.position}</Text>
                            </TouchableOpacity>
                            <CommitButton  border={false} block={true} top={20} title="提交" onPress={this.commit.bind(this)}/>
                        </View>
                    </View>
                </Content>
            </Container>
        )
    };
    commit(){
        let {dispatch, loginUser} = this.props;
        let sex,birth,position = null;
         if(this.state.showM){
         sex = 1
         }else{
         sex = 0
         }
        birth = this.state.simpleText;
        position=this.state.position
        //获取地理位置


        let userInformation ={};
        userInformation.appid =loginUser.appid;
        userInformation.sex = sex
        userInformation.birthdate = birth
        userInformation.location = position
        userInformation.tops = '';
        userInformation.bmi = '';
        userInformation.weight = '';
        userInformation.title = '';
        // 个人史
        userInformation.personal_history = '';
        // 家族史
        userInformation.family_history = '';
        // 婚育史
        userInformation.obstetrical_history = '';
        // 用药史
        userInformation.medication_history = '';
        // 饮食
        userInformation.diet = '';
        // 运动
        userInformation.motion = '';
        // 睡眠
        userInformation.sleep = '';
        // 吸烟
        userInformation.smoke = '';
        // 饮酒
        userInformation.drink = '';
        // 精神状况
        userInformation.mental_state = '';
        request.getJson(urls.apis.AUTH_CHECK_PHONE,{
            jsonStr: JSON.stringify(userInformation),
            ishealthRing: "yes",
            appid: loginUser.appid,
            city: position
        }).then((data)=>{
            if(data.success) {
                toast.show("保存成功");
            }else{
                toast.show("保存失败");
            }
        },(error)=>{

        })

    }
}
const styles = {
    bigBox:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    box:{
        width:280,
        height:500,
    },
    photo:{
        marginTop:40,
        flexDirection:'row',
        justifyContent:'space-around',

    },
    touxiang:{
        width:80,
        height:80,
        borderRadius:40,
    },
    row1:{
        marginTop:40,
        justifyContent:'center',
    },
    pop:{
        width:280,
        height:50,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'yellow'
    },
    text1:{
        textAlign:'center',
        fontSize:theme.DefaultFontSize+3

    },
    text2:{
        textAlign:'center',
        fontSize:theme.DefaultFontSize+2,
    },
    text3:{
        textAlign:'center',
        fontSize:theme.DefaultFontSize-3,
    },
    btn:{
        borderWidth:1,
        borderColor:'#A1CC00',
        padding:10,
        marginTop:30,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',

    },
    btn1:{
        marginTop:100,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    mb:{
        width:80,
        height:80,
        borderRadius:40,
        backgroundColor:'#fff',
        opacity:0.7,
        position:'absolute',
        left:0,
        top:0,
        zIndex:1000
    },
};
const mapStateToProps = state => ({
    loginUser: state.userStore.loginUser,
    ...state.friendStore,
});
export default connect(mapStateToProps)(StartInformation);

