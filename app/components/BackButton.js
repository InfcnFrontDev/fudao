import React, {Component} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {Icon} from "native-base";
import global from "../utils/global";

export default class BackButton extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <TouchableOpacity
                onPress={this.handler.bind(this)}
                style={[styles.button]}>
                <Icon name="ios-arrow-back-outline" style={{color: '#ffffff'}}/>
            </TouchableOpacity>
        )
    }

    handler() {
        global.navigator.pop();
    }
}

const styles = {
    button: {
        width: 35,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonIcon: {
        fontSize: 26,
        fontFamily: 'iconfont'
    },
    buttonText: {
        fontSize: 16,
        color: '#333'
    }
}