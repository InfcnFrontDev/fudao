import React, {Component} from "react";
import {BackAndroid, Navigator, Platform, View, ToastAndroid} from "react-native";
import StartView from "./views/StartView";
import BackButton from "./components/BackButton";
import global from "./utils/global";
import configureRealm from "./realm/configureRealm";


var firstClick = 0
export default class Root extends Component {

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
            <View style={styles.container}>
                <Navigator
                    ref='navigator'
                    initialRoute={{component: StartView}}
                    configureScene={this.configureScene}
                    renderScene={this.renderScene}
                />
            </View>
        )
    }

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', this.handleBack)

        global.navigator = this.refs.navigator;
        global.backButton = <BackButton />;
    }

    handleBack() {
        const {navigator} = this.refs
        if (navigator && navigator.getCurrentRoutes().length > 1) {
            navigator.pop()
            return true
        } else {
            var timestamp = (new Date()).valueOf()
            if (timestamp - firstClick > 2000) {
                firstClick = timestamp
                ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT)
                return true
            } else {
                return false
            }
        }
    }

    renderScene(route, navigator) {
        let Component = route.component;
        return (
            <Component navigator={navigator} route={route} {...route}/>
        )
    }

    configureScene(route, routeStack) {
        return route.sceneConfig || Navigator.SceneConfigs.PushFromRight
    }
}

const styles = {
    container: {
        flexGrow: 1
    }
}
