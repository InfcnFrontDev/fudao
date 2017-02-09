import React, {Component} from "react";
import {StyleSheet, View, Text} from "react-native";
import NavBarView from "../components/NavBarView";

/**
 * 组件列表
 */
class MyView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <NavBarView {...this.props}>
                <Text>MyView</Text>
            </NavBarView>
        )
    }
}

export default (MyView);