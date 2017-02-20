import React, {Component} from "react";
import {BackAndroid, StatusBar, NavigationExperimental, Platform, ToastAndroid} from "react-native";
import {StyleProvider, Drawer} from "native-base";
import {connect} from "react-redux";
import {Router, Scene} from "react-native-router-flux";
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
import ArticleDetail from "./views/article-detail/";

const RouterWithRedux = connect()(Router);
const {
    CardStack: NavigationCardStack,
} = NavigationExperimental;

var lastBackPressed = 0;
class AppNavigator extends Component {

    // componentDidMount() {
    //     BackAndroid.addEventListener('hardwareBackPress', this.handleBack);
    // }
    //
    // handleBack() {
    //     try {
    //         Actions.pop({});
    //     } catch (e) {
    //         if (lastBackPressed && lastBackPressed + 2000 >= Date.now()) {
    //             return false;
    //         }
    //
    //         lastBackPressed = Date.now();
    //         ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
    //     }
    //     return true;
    // };

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
                            {/*首页*/}
                            <Scene key="index" component={Index} hideNavBar initial={true}/>
                            {/*关于*/}
                            <Scene key="about" component={About}/>
                            {/*协议*/}
                            <Scene key="protocol" component={Protocol}/>
                            {/*声明*/}
                            <Scene key="declare" component={Declare}/>
                            {/*搜索*/}
                            <Scene key="search" component={Search}/>
                            {/*资讯细览*/}
                            <Scene key="articleDetailc -" component={ArticleDetail}/>
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