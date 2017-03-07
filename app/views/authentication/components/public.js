import {ToastAndroid} from "react-native";
import {Actions} from "react-native-router-flux";
import  {hex_md5} from "./md5"
import {request,urls,} from "../../../utils/";
// const pub={
 export function login(phoneVale,passwordVale){
            let  phone=phoneVale;
            let  password=passwordVale;
        ToastAndroid.show("进来了", ToastAndroid.SHORT);
            /*concat:this.state.concat?this.state.concat:null*/

                request.getJson(urls.apis.LOGIN,{
                        account:phone,
                        pwd:hex_md5(phone+password),
                    },function(data){
                        if(data.success) {
                            ToastAndroid.show("登录", ToastAndroid.SHORT);
                            /*  ToastAndroid.show("用户信息"+JSON.stringify(data.obj), ToastAndroid.SHORT);
                             ToastAndroid.show("用户名"+JSON.stringify(data.obj.accountInfo), ToastAndroid.SHORT);
                             ToastAndroid.show("习惯"+JSON.stringify(data.obj.hbbit), ToastAndroid.SHORT);
                             ToastAndroid.show("基本信息"+JSON.stringify(data.obj.userInformation), ToastAndroid.SHORT);*/


                            /* //账号
                             var users_objs = data.obj.accountInfo;
                             //本地存储
                             saveUser(users_objs);
                             //习惯
                             var hbbit = data.obj.hbbit;
                             //本地存储
                             saveMyhabit(hbbit);
                             //添加的健康环
                             saveAddHealthRing(users_objs.appid,data.obj.addHealthRing);
                             //基本信息*/
                            var userInformation = data.obj.userInformation;
                            if(userInformation != undefined) { //基本信息已经添加完成
                                Actions['search']()
                                /*  userInformation.img = ADDR + "uploadimg/" + userInformation.img;
                                 if(data.obj.userScore != null) { //是否进行了“一键查查”
                                 userInformation['countSocre'] = data.obj.userScore.score;
                                 userInformation['checkDate'] = data.obj.userScore.checkDate;
                                 userInformation['zhengzhuangSocre'] = data.obj.userScore.zhengzhuang;
                                 userInformation['xinliSocre'] = data.obj.userScore.xinli;
                                 userInformation['shehuiSocre'] = data.obj.userScore.shehui;
                                 userInformation['ziceSocre'] = data.obj.userScore.zice;
                                 var _myAnswer = data.obj.userScore.answers || '{}';
                                 saveAnswer(JSON.parse(_myAnswer));
                                 }
                                 if(userInformation.territory != undefined) {
                                 userInformation['territory'] = JSON.parse(userInformation['territory']);
                                 }
                                 if(userInformation.haveDisease != undefined) {
                                 userInformation['haveDisease'] = JSON.parse(userInformation['haveDisease']);
                                 userInformation['haveDiseaseBaihua'] = JSON.parse(userInformation['haveDiseaseBaihua']);
                                 }
                                 saveUserInformation(users_objs.appid, userInformation);
                                 var obj = plus.webview.getWebviewById("main");
                                 if(obj != null) {
                                 window.location.href = "main.html";
                                 } else {
                                 jumpPage("main.html", "none", {}, false);
                                 }*/
                            } else { //没有基本信息表示第一次登录需要添写信息
                                Actions['startInformation']()
                            }
                        }else{
                            ToastAndroid.show("密码不正确", ToastAndroid.SHORT);
                        }
                    }
                )
            }
    // }
// export default pub;