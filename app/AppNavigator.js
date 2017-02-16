import React, {Component} from "react";
import {BackAndroid, StatusBar, NavigationExperimental, Platform} from "react-native";
import {StyleProvider, getTheme, variables, Drawer} from "native-base";
import {connect} from "react-redux";
import {actions} from "react-native-navigation-redux-helpers";
import {Router, Scene} from "react-native-router-flux";
import {openDrawer, closeDrawer} from "./actions/drawer";
import material from "./themes/material";
import SideBar from "./views/sidebar/";
//
import Index from "./views/index/";
import About from "./views/about/";

const {
    popRoute,
} = actions;

const RouterWithRedux = connect()(Router);

const {
    CardStack: NavigationCardStack,
} = NavigationExperimental;

class AppNavigator extends Component {

    static propTypes = {
        drawerState: React.PropTypes.string,
        popRoute: React.PropTypes.func,
        closeDrawer: React.PropTypes.func,
        themeState: React.PropTypes.string,
        navigation: React.PropTypes.shape({
            key: React.PropTypes.string,
            routes: React.PropTypes.array,
        }),
    }

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

    popRoute() {
        this.props.popRoute();
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
    popRoute: key => dispatch(popRoute(key)),
});

const mapStateToProps = state => ({
    drawerState: state.drawer.drawerState,
    navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(AppNavigator);