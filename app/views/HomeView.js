import React, {Component} from "react";
import {StyleSheet, View, Text} from "react-native";
import NavBarView from "../components/NavBarView";
import Icon from "react-native-vector-icons/Ionicons";


/**
 */
class HomeView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <NavBarView {...this.props}>
                <Text>HomeView</Text>
                <Icon name="ios-person" size={30} color="#4F8EF7"/>
            </NavBarView>
        )
    }
}

export default (HomeView);