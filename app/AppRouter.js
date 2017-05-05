import React, {PureComponent} from "react";
import {Router, Scene, Reducer} from "react-native-router-flux";
import Index from "./views/index/Index";
import Login from "./views/authentication/Login";
import ArticleDetail from "./views/article/ArticleDetail";
import Collection from "./views/collection/Collection";
import Start from "./views/authentication/Start";
import Register from "./views/authentication/Register";
import SetPassword from "./views/authentication/SetPassword";
import PasswordSuccess from "./views/authentication/PasswordSuccess";
import StartInformation from "./views/authentication/StartInformation";
import RebuildPassword from "./views/authentication/RebuildPassword";
import RebuildSuccess from "./views/authentication/RebuildSuccess";
import PasswordValidate from "./views/authentication/PasswordValidate";
import WomanChoose from "./views/authentication/WomanChoose";
import Friend from "./views/friend/Friend";
import Emotion from "./views/emotion/Emotion";
import About from "./views/about/About";
import UserAgreement from "./views/about/UserAgreement";
import PrivacyStatement from "./views/about/PrivacyStatement";
import Record from "./views/record/Record";
import MedicalExamination from "./views/medical-examination/MedicalExamination";
import Homeapp from "./views/home/HomeDrag";
import SideBar from "./views/sidebar/SideBar";
import Diagnosis from "./views/diagnosis/Diagnosis";
import Evaluation from "./views/diagnosis/Evaluation";
import DeepDiagnosis from "./views/diagnosis/DeepDiagnosis";
import Settings from "./views/settings/Settings";
import Personal from "./views/base-info/BaseInfo";
import Disease from "./views/disease/Disease";
import DiseaseDetail from "./views/disease/DiseaseDetail";
import Energy from "./views/energy/Energy";
import FriendApply from "./views/friend/FriendApply";
import AgreeFriendApply from "./views/friend/AgreeFriendApply";
import NewFriend from "./views/friend/NewFriend";
import UserDetail from "./views/user/UserDetail";
import BaseInfo from "./views/base-info/BaseInfo"

/**
 * 路由
 */
export default class AppRouter extends PureComponent {

    // 最后一次触Back键的时间
    lastBackPressTime = 0;

    render() {
        return (
            <Router createReducer={this.reducerCreate.bind(this)} onExitApp={this.appExit.bind(this)}>
                <Scene key="root">

                    <Scene key="start" component={Start} title="启动页" hideNavBar initial/>

                    {/*首页*/}
                    <Scene key="index" component={Index} title="首页" hideNavBar/>
                    {/*启动注册*/}
                    <Scene key="register" component={Register} title="注册" hideNavBar/>
                    <Scene key="login" component={Login} title="登录" hideNavBar/>
                    <Scene key="setPassword" component={SetPassword} title="设置密码" hideNavBar/>
                    <Scene key="rebuildPassword" component={RebuildPassword} title="请设置新密码" hideNavBar/>
                    <Scene key="passwordSuccess" component={PasswordSuccess} hideNavBar/>
                    <Scene key="startInformation" component={StartInformation} title="基本信息" hideNavBar/>
                    <Scene key="passwordValidate" component={PasswordValidate} title="找回密码" hideNavBar/>
                    <Scene key="womanChoose" component={WomanChoose} title="阶段选择" hideNavBar/>
                    <Scene key="rebuildSuccess" component={RebuildSuccess} hideNavBar/>
                    {/*好友*/}
                    <Scene key="friend" component={Friend} title="好友" hideNavBar/>
                    <Scene key="friendApply" component={FriendApply} title="好友申请" hideNavBar/>
                    <Scene key="newFriend" component={NewFriend} title="新的朋友" hideNavBar/>
                    <Scene key="agreeFriendApply" component={AgreeFriendApply} title="好友验证" hideNavBar/>
                    {/*用户*/}
                    <Scene key="userDetail" component={UserDetail} title="用户详情" hideNavBar/>

                    <Scene key="sideBar" component={SideBar} title="侧边栏" hideNavBar/>

                    <Scene key="articleDetail" component={ArticleDetail} title="资讯详情"/>
                    <Scene key="collection" component={Collection} title="收藏" hideNavBar/>
                    <Scene title="资讯详情" key="articleDetail" component={ArticleDetail} hideNavBar/>
                    <Scene title="收藏" key="collection" component={Collection} hideNavBar/>
                    <Scene title="关于福道" key="about" component={About} hideNavBar/>
                    <Scene title="隐私声明" key="privacyStatement" component={PrivacyStatement} hideNavBar/>
                    <Scene title="用户协议" key="userAgreement" component={UserAgreement} hideNavBar/>

                    <Scene title="我的记录" key="record" component={Record} hideNavBar/>

                    <Scene title="基本信息" key="baseInfo" component={BaseInfo} hideNavBar/>

                    <Scene title="体检信息" key="medicalExamination" component={MedicalExamination} hideNavBar/>

                    <Scene title="主页" key="homeapp" component={Homeapp}/>


                    <Scene title="自疗" key="disease" component={Disease} hideNavBar/>
                    <Scene title="疾病详情" key="diseaseDetail" component={DiseaseDetail} hideNavBar/>
                    <Scene title="能量场" key="energy" component={Energy} hideNavBar/>
                    {/*自诊*/}
                    <Scene key="diagnosis" component={Diagnosis} title="自诊"  hideNavBar/>
                    <Scene key="evaluation" component={Evaluation} title="测评"  hideNavBar/>
                    <Scene key="deepDiagnosis" component={DeepDiagnosis} title="深度自诊"  hideNavBar/>

                </Scene>
            </Router>
        )
    }

    reducerCreate(params) {
        const defaultReducer = Reducer(params)
        return (state, action) => {
            // console.log(state);
            // console.log(action);
            return defaultReducer(state, action)
        }
    }

    appExit() {
        if (this.lastBackPressTime && this.lastBackPressTime + 2000 >= Date.now()) {
            return false;
        }
        this.lastBackPressTime = Date.now();
        tools.showToast('再按一次退出应用');
        return true;
    }

    shouldComponentUpdate() {
        return false
    }
}

