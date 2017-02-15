import React, {Component} from "react";
import {BackAndroid, StatusBar, Navigator, Platform, View, ToastAndroid} from "react-native";
import BackButton from "./components/BackButton";
import global from "./utils/global";
import {StyleProvider} from "native-base";
import getTheme from "./theme/components";
import material from "./theme/variables/material";
import SplashScreenView from "./views/SplashScreenView";

var firstClick = 0;
export default class AppNavigator extends Component {

    constructor(props) {
        super(props);
        this.handleBack = this.handleBack.bind(this);
    }

    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress', this.handleBack);

        global.realm = configureRealm('yangkk');

    }

    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <View style={{flexGrow:1}}>
                    <StatusBar
                        backgroundColor='#1E90FF'
                    />
                    <Navigator
                        ref='navigator'
                        initialRoute={{component: SplashScreenView}}
                        configureScene={this._configureScene}
                        renderScene={this._renderScene}
                    />
                </View>
            </StyleProvider>
        )
    }

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', this.handleBack)

        global.navigator = this.refs.navigator;
        global.backButton = <BackButton />;
    }

    handleBack() {
        const {navigator} = this.refs;
        if (navigator && navigator.getCurrentRoutes().length > 1) {
            navigator.pop();
            return true;
        } else {
            var timestamp = (new Date()).valueOf();
            if (timestamp - firstClick > 2000) {
                firstClick = timestamp;
                ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT)
                return true
            } else {
                return false
            }
        }
    }

    _renderScene(route, navigator) {
        let Component = route.component;
        return (
            <Component navigator={navigator} route={route} {...route}/>
        )
    }

    _configureScene(route, routeStack) {
        return route.sceneConfig || Navigator.SceneConfigs.PushFromRight
    }
}
