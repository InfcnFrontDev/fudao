/**
 * Created by Administrator on 2017/3/1.
 */
//noinspection JSAnnotator

import React, {PureComponent} from "react";
import {Actions,ActionConst} from "react-native-router-flux";
import {observer} from "mobx-react/native";
import {Thumbnail, Text, Icon} from "native-base";
import {View, Image, TouchableOpacity, TouchableHighlight, ToastAndroid, DatePickerAndroid, Alert} from "react-native";
import {Header, Container, Content} from "../../components/index";
import CommitButton from "./components/CommitButton";
import UserStore from "../../mobx/userStore";
import WomanChoose from "./WomanChoose";

/**
 * 首次登录设置个人信息页
 */
@observer
export default class StartInformation extends PureComponent {

    constructor(props) {
        super(props);
        this.state={
            presetDate: new Date(2016, 3, 5),
            maxText: '',
            presetText: '选择日期,指定2016/3/5',
            showM:false,
            phone:this.props.phone,
            password:this.props.password,
            year1:'',
            year:'',
            month1:'',
            month:'',
            day1:'',
            sex:1,
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
        let position=UserStore.position.name;
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
                <TouchableOpacity onPress={this.woman.bind(this,this.state.phone)} style={{justifyContent:'center',
                    alignItems:'center'}}>
                   <View style={styles.mb}></View>
                    <Thumbnail style={styles.touxiang} size={80}  source={require('./assets/woman.png')}/>
                    <View style={{height:20,width:80}}>
                        <Text style={{textAlign:'center',color:"#fff"}}>{this.state.jieduan}</Text>
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
                <Content padder white>
                    <View style={styles.bigBox}>
                        <View style={styles.box}>
                            <View style={styles.photo}>
                                {mbM}
                                {mbW}
                            </View>
                            <View  style={styles.row1}>
                                <Text style={styles.text1}>请选择您的生日</Text>
                                <TouchableOpacity style={styles.btn}  onPress={this.showPicker.bind(this, 'max', {date: this.state.maxDate,maxDate:new Date(this.state.year1, this.state.month1, this.state.day1),mode:'spinner'},this.state.maxText)}>
                                    <Text style={styles.text2}>{this.state.maxText}</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.btn1} onPress={()=>Actions.cityPick()}>
                                <Icon  name='navigate' />
                                <Text  style={styles.text3}>{position}</Text>
                            </TouchableOpacity>
                            <CommitButton  border={false} block={true} top={20} title="提交" onPress={this.tishi.bind(this)}/>
                        </View>
                    </View>
                    <WomanChoose ref={(e)=>this._modal = e}  _jieduan={this._jieduan.bind(this)}/>
                </Content>
            </Container>
        )
    };
    woman(phone){
        let sex=2;
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
        if(sex==2){
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
        let {position, maxText, phone, password,sex, jieduan} = this.state;
        let crowd;
        if (sex == 2) {
            switch(jieduan)
            {
                case '未孕阶段':
                    crowd = "woman_un";
                    break;
                case '备孕阶段':
                    crowd = "woman_pre";
                    break;
                case  '已育阶段':
                    crowd = "woman_next";
                    break;
                case '待产阶段':
                    crowd = "woman_ing";
                    break;
                default:
                    crowd = "woman_ed";
                    break;

            }
        }
        request.getJson(urls.apis.USER_SETUSERBASEINFO, {
            phone:phone,
            sex: sex,
            crowd: crowd,
            birthday: maxText,
            regionId:UserStore.position.city_id
        }).then((data)=> {
            if (data.ok) {
                UserStore.login(phone,password, () => {
                    UserStore.fetchLoginUser();
                });
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
        fontSize:theme.DefaultFontSize+2,

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
/*
const mapStateToProps = state => ({
    loginUser: state.user.loginUser,
});
*/


