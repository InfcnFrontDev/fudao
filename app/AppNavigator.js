import React, {Component} from "react";
import {BackAndroid, StatusBar, NavigationExperimental, Platform} from "react-native";
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
import Picture from "./views/picture/";

const RouterWithRedux = connect()(Router);

class AppNavigator extends Component {

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
                    ref={(ref) => { this._drawer = ref; }}
                    content={<SideBar navigator={this._navigator} />}
                    onClose={() => this.closeDrawer()}
                >
                    <StatusBar
                        hidden={(this.props.drawerState === 'opened' && Platform.OS === 'ios') ? true : false}
                        backgroundColor={material.statusBarColor}
                    />
                    <RouterWithRedux>
                        <Scene key="root">
                            <Scene key="index" component={Index} hideNavBar initial={true}/>
                            <Scene key="about" component={About}/>
                            <Scene key="protocol" component={Protocol}/>
                            <Scene key="declare" component={Declare}/>
                            <Scene key="search" component={Search}/>
                            <Scene key="picture" component={Picture}/>
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
