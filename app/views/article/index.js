import React, {Component} from "react";
import {StyleSheet, View, Text} from "react-native";
import NavBarView from "../../components/NavBarView";

/**
 * 资讯
 */
class Article extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <NavBarView {...this.props}>
                <Text>Article</Text>
            </NavBarView>
        )
    }
}

export default (Article);