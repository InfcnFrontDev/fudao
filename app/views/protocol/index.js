import React, {Component} from "react";
import {WebView} from "react-native";
import {Container, Left, Right, Body} from "native-base";
import Header from "../../components/header/base";
import html from "./html";

class Declare extends Component {

    render() {
        return (
            <Container>
                <Header {...this.props}/>
                <WebView source={{html}}/>
            </Container>
        );
    }
}
export default (Declare);