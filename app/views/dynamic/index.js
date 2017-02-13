import React, {Component} from "react";
import {StyleSheet, View, Text} from "react-native";
import NavBarView from "../../components/NavBarView";

/**
 */
class DynamicView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <NavBarView {...this.props}>
                <Text>DynamicView</Text>
            </NavBarView>
        )
    }
}

export default (DynamicView);