import React, {Component} from "react";
import {StyleSheet, View, Text} from "react-native";
import NavBarView from "../components/NavBarView";
import global from "../utils/global";

/**
 * about fudao
 */
class AboutView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <NavBarView {...this.props} leftButton={global.backButton}>
                <Text>AboutView</Text>
            </NavBarView>
        )
    }
}

export default (AboutView);