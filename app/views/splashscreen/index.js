import React, {Component} from "react";
import {StyleSheet, View, Image, StatusBar} from "react-native";
import IndexView from "../index/index";
import styles from "./styles";

/**
 * 启动页
 */
class SplashScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    translucent={true}
                    hidden={true}
                    animated={true}
                />
                <Image source={require('../../assets/images/start.png')} style={styles.image}/>
            </View>
        )
    }

    //在UI初始化渲染结束后，系统自动调用此函数。主要是用于定时器、网络请求
    componentDidMount() {
        //设置定时器，相隔2s后切换到主页面
        setTimeout(() => {
            this.props.navigator.replace({
                component: IndexView,   //切换到具体的板块
            })
        }, 1);
    }
}

export default (SplashScreen);