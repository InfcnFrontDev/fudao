/**
 * 2017/2/17. 提交按钮
 */
import React, {Component} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import global from "../utils/global";

export default class CommitButton extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <TouchableOpacity
                    onPress={this.handler.bind(this)}
                    style={[styles.button]}>
                    <Text style={styles.buttonText}>确定</Text>
                </TouchableOpacity>
            </View>

        )
    }

    handler() {
        global.navigator.pop();
    }
}

const styles = {
    button: {
        width:80,
        height:40,
        backgroundColor:"green",
        borderRadius:10,
        justifyContent:"center"
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
        textAlign:"center",
    }
}