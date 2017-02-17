import React, {Component} from "react";
import {BackAndroid, StatusBar, NavigationExperimental, Platform} from "react-native";
import {StyleProvider, getTheme, variables, Drawer} from "native-base";
import {connect} from "react-redux";
import {Router, Scene} from "react-native-router-flux";
import {closeDrawer} from "./actions/drawer";
import material from "./themes/material";
import SideBar from "./views/sidebar/";
//
import Index from "./views/index/";
import About from "./views/about/";
import Protocol from "./views/protocol/";
import Declare from "./views/declare/";

const RouterWithRedux = connect()(Router);

class AppNavigator extends Component {

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', () => {
            const routes = this.props.navigation.routes;

            if (routes[routes.length - 1].key === 'home') {
                return false;
            }

            this.props.popRoute(this.props.navigation.key);
            return true;
        });
    }

    componentDidUpdate() {
        if (this.props.drawerState === 'opened') {
            this.openDrawer();
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
                        </Scene>
                    </RouterWithRedux>
                </Drawer>
            </StyleProvider>
        )
    }

}

const bindAction = dispatch => ({
    closeDrawer: () => dispatch(closeDrawer()),
});

const mapStateToProps = state => ({
    drawerState: state.drawer.drawerState,
    navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(AppNavigator);