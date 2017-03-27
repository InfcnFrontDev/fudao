/**
 * Created by Administrator on 2017/3/1.
 */
//noinspection JSAnnotator

import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions,ActionConst} from "react-native-router-flux";
import {Thumbnail, Text, Icon} from "native-base";
import {View, Image, TouchableOpacity, TouchableHighlight, ToastAndroid, DatePickerAndroid, Alert} from "react-native";
import {Header, Container, Content} from "../../components/index";
import {theme, urls, request, toast} from "../../utils/";
import CommitButton from "./components/CommitButton";
import {login} from "../../actions/user";
import WomanChoose from "./WomanChoose";
import {clearMyQuestion} from "../../actions/my-question";
import {clearMyEmotion} from "../../actions/emotion";
import {clearFriend} from "../../actions/friend";
import {clearDynamic} from "../../actions/dynamic";
import {clearPosition} from "../../actions/position";
/**
 * 首次登录设置个人信息页
 */
class StartInformation extends PureComponent {

    constructor(props) {
        super(props);
        this.state={
            presetDate: new Date(2016, 3, 5),
            maxText: '',
            presetText: '选择日期,指定2016/3/5',
            showM:false,
            position:'北京市',
            appid:this.props.appid,
            year1:'',
            year:'',
            month1:'',
            month:'',
            day1:'',
            sex:0,
            jieduan:'未孕阶段',
        }
    }

    componentDidMount(){
        let date=new Date;
        this.date(date,this.state.sex)
    }
    async showPicker(stateKey, options,text) {
        try {
            var newState = {};
            const {action, year, month, day} = await DatePickerAndroid.open(options);
            if (action === DatePickerAndroid.dismissedAction) {
                newState[stateKey + 'Text'] = text;
            } else {
                var date = new Date(year, month, day);
                var year = date.getFullYear() ;
                var month = date.getMonth() +1 ;
                var day = date.getDate() ;
                var formatedStr = year + '-' + month +'-' + day ;
                newState[stateKey + 'Text'] = formatedStr;
                newState[stateKey + 'Date'] = date;
            }
            this.setState(newState);
        } catch ({code, message}) {
            console.warn(`Error in example '${stateKey}': `, message);
        }
    }


    render() {

        var mbM=(
            <TouchableOpacity onPress={this.man.bind(this)}>
                <Thumbnail style={styles.touxiang} size={80} source={require('./assets/man.png')}/>
            </TouchableOpacity>
        );
        var mbW=(
            <TouchableOpacity onPress={this.woman.bind(this)}>
                <Thumbnail style={styles.touxiang} size={80} source={require('./assets/woman.png')}/>
                <View style={{height:20,width:90}}>
                    <Text style={{textAlign:'center'}}>{this.state.jieduan}</Text>
                </View>
            </TouchableOpacity>
        );

        if(this.state.showM){

            mbW= (
                <TouchableOpacity onPress={this.woman.bind(this,this.state.appid)} style={{justifyContent:'center',
                    alignItems:'center'}}>
                    <View style={styles.mb}></View>
                    <Thumbnail style={styles.touxiang} size={80}  source={require('./assets/woman.png')}/>
                    <View style={{height:20,width:80}}>
                        <Text style={{textAlign:'center'}}>{this.state.jieduan}</Text>
                    </View>
                </TouchableOpacity>
            )
        }else{
            mbM =(
                <TouchableOpacity onPress={this.man.bind(this)}>
                    <View style={styles.mb}></View>
                    <Thumbnail style={styles.touxiang} size={80} source={require('./assets/man.png')}/>
                </TouchableOpacity>
            )
        }

        return (
            <Container style={styles.container}>
                <Header  {...this.props}></Header>
                <Content padder >
                    <View style={styles.bigBox}>
                        <View style={styles.box}>
                            <View style={styles.photo}>
                                {mbW}
                                {mbM}
                            </View>
                            <View  style={styles.row1}>
                                <Text style={styles.text1}>请选择您的生日</Text>
                                <TouchableOpacity style={styles.btn}  onPress={this.showPicker.bind(this, 'max', {date: this.state.maxDate,maxDate:new Date(this.state.year1, this.state.month1, this.state.day1),mode:'spinner'},this.state.maxText)}>
                                    <Text style={styles.text2}>{this.state.maxText}</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.btn1}>
                                <Icon  name='navigate' />
                                <Text  style={styles.text3}>{this.state.position}</Text>
                            </TouchableOpacity>
                            <CommitButton  border={false} block={true} top={20} title="提交" onPress={this.tishi.bind(this)}/>
                        </View>
                    </View>
                    <WomanChoose ref={(e)=>this._modal = e}  _jieduan={this._jieduan.bind(this)}/>
                </Content>
            </Container>
        )
    };
    woman(appid){
        let sex=0;
        this.setState({
            showM:false,
            sex:sex,
        })
        let data=new Date();
        this.date(data,sex)
        this._modal.show();
    }
    man(){
        let sex=1;
        this.setState({
            showM:true,
            sex:sex,
            jieduan:''
        })
        let data=new Date();
        this.date(data,sex)
    }
    date(myDate,sex){
        let year,year1,month,month1,day,num,year0=(null);
        if(sex==0){
            num=14
        }else if(sex==1){
            num=16
        }
        year=myDate.getFullYear()-num;
        month1=myDate.getMonth();
        month=month1+1;
        day=myDate.getDate();
        this.setState({
            maxText:year+"-"+month+"-"+day,
            month1:month1,
            day1:day,
            year1:year,
        })
    }


    _jieduan(text){
        this.setState({
            jieduan:text
        })
    }


    tishi(){
        Alert.alert(
            '悄悄告诉你:',
            "基本信息保存后不可修改哦，确认提交吗？",
            [
                {text: '取消', onPress: () => null},
                {text: '提交', onPress: () => this.commit()},
            ]
        )
    }
    commit() {
        let {dispatch}=this.props;
        let loginUser=this.props.loginUser;
        let {position, maxText, appid, sex, jieduan} = this.state;
        let womanType;
        if (sex == 0) {
            if (jieduan == '未孕阶段' || jieduan == '备孕阶段' || jieduan == '已孕阶段') {
                womanType = 1
            } else if (jieduan == '待产阶段') {
                womanType = 2
            } else {
                womanType = 3
            }
        }

        //获取地理位置

        let userInformation = {};

        if (womanType) {
            userInformation.womanType = womanType;
            userInformation.appid = loginUser.appid;
            userInformation.sex = sex;
            userInformation.birthdate = maxText;
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
        } else {
            userInformation.appid = appid;
            userInformation.sex = sex;
            userInformation.birthdate = maxText;
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
        }

        request.postJson(urls.apis.AUTH_USER_INFORMATION, {
            jsonStr: JSON.stringify(userInformation),
            ishealthRing: "yes",
            appid: appid,
            city: position
        }).then((data)=> {
            if (data.success) {
                let loginUser=this.props.loginUser;

                request.getJson(urls.apis.AUTH_LOGIN, {
                    account: loginUser.phone,
                    pwd: loginUser.pwd,
                }).then((data) => {

                        let user = Object.assign({}, {
                            ...data.obj.accountInfo,
                            ...data.obj.userInformation,
                            ...data.obj
                        });

                        // 保存用户状态
                        this.props.dispatch(login(user));
                    //初始化用户信息
                    this.props.dispatch(clearMyQuestion());
                    this.props.dispatch(clearMyEmotion());
                    this.props.dispatch(clearFriend());
                    this.props.dispatch(clearDynamic());
                    this.props.dispatch(clearPosition());
                        // 跳到首页
                        Actions.index();
                    }, (error) => {

                    }
                );
            }
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
        height:100,
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
        fontSize:theme.DefaultFontSize+2

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
    loginUser: state.user.loginUser,
});
export default connect(mapStateToProps)(StartInformation);

