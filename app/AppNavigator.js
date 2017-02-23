import React, {Component} from "react";
import {BackAndroid, StatusBar, NavigationExperimental, Platform, ToastAndroid} from "react-native";
import {StyleProvider, Drawer} from "native-base";
import {connect} from "react-redux";
import {Router, Scene, Actions} from "react-native-router-flux";
import {openDrawer, closeDrawer} from "./actions/drawer";
import getTheme from "../native-base-theme/components/";
import material from "./themes/material";
import SideBar from "./views/sidebar/";
//
import Index from "./views/index/";
import About from "./views/about/";
import Protocol from "./views/protocol/";
import Declare from "./views/declare/";
import Search from "./views/search/";
import Picture from "./views/picture/";
import Start from "./views/start/";
import Login from "./views/login/";
import Register from "./views/register/";
import SetPassword from "./views/set-password/";
import ArticleDetail from "./views/article-detail/";
import PasswordSuccess from "./views/password-success/";
import StartInformation from "./views/start-information/";
import MyInfo from "./views/my-info/";
import Webview from "./views/webview/";


const RouterWithRedux = connect()(Router);
const {
    CardStack: NavigationCardStack,
} = NavigationExperimental;

var lastBackPressed = 0;
class AppNavigator extends Component {

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', this.handleBack);
    }

    handleBack() {
        try {
            Actions.pop({});
        } catch (e) {
            if (lastBackPressed && lastBackPressed + 2000 >= Date.now()) {
                return false;
            }

            lastBackPressed = Date.now();
            ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
        }
        return true;
    };

    componentDidUpdate() {
        if (this.props.drawerState === 'opened') {
            this._drawer._root.open();
        }

        if (this.props.drawerState === 'closed') {
            this._drawer._root.close();
        }
    }

    openDrawer() {
        this._drawer._root.open();
    }

    closeDrawer() {
        if (this.props.drawerState === 'opened') {
            this.props.closeDrawer();
        }
    }

    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <Drawer
                    ref={(ref) => {
						this._drawer = ref;
					}}
                    content={<SideBar navigator={this._navigator}/>}
                    onClose={() => this.closeDrawer()}
                >
                    <StatusBar
                        hidden={(this.props.drawerState === 'opened' && Platform.OS === 'ios') ? true : false}
                        backgroundColor={material.statusBarColor}
                    />
                    <RouterWithRedux >
                        <Scene key="root">
                            <Scene key="index" component={Index} hideNavBar initial={true} title="首页"/>
                            <Scene key="about" component={About} title="关于福道"/>
                            <Scene key="protocol" component={Protocol} title="用户协议"/>
                            <Scene key="declare" component={Declare} title="隐式声明"/>
                            <Scene key="search" component={Search} title="搜索"/>
                            <Scene key="articleDetail" component={ArticleDetail} title="资讯详情"/>
                            <Scene key="picture" component={Picture} title="图片预览"/>
                            {/*启动后开始页*/}
                            <Scene key="start" component={Start}/>
                            {/*登录页*/}
                            <Scene key="login" component={Login}/>
                            {/*注册页*/}
                            <Scene key="register" component={Register}/>
                            {/*设置密码*/}
                            <Scene key="setPassword" component={SetPassword}/>
                            {/*注册成功*/}
                            <Scene key="passwordSuccess" component={PasswordSuccess}/>
                            {/*首次登录添个人信息*/}
                            <Scene key="startInformation" component={StartInformation}/>
                            <Scene key="myInfo" component={MyInfo} title="个人信息"/>
                            <Scene key="webview" component={Webview}/>
                        </Scene>
                    </RouterWithRedux>
                </Drawer>
            </StyleProvider>
        )
    }

}

const bindAction = dispatch => ({
    openDrawer: () => dispatch(openDrawer()),
    closeDrawer: () => dispatch(closeDrawer()),
});

const mapStateToProps = state => ({
    drawerState: state.drawer.drawerState,
});

export default connect(mapStateToProps, bindAction)(AppNavigator);
