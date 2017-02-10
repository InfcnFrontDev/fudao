import React, {Component} from "react";
import {StyleSheet, View, Image} from "react-native";
import IndexView from "../views/IndexView";

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

/**
 * start page
 */
class StartView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/images/start.png')} style={styles.image}/>
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
        }, 1000);
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: width,
        height: width / (440 / 766)
    }
})

export default (StartView);