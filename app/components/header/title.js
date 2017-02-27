import React, {Component} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Container,Header, Icon, Left, Right, Body, Form, Input, Item,Title,Text} from "native-base";

class SearchHeader extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Header>
                <Left style={{flex:1}}/>
                <Body style={{flex:1}}>
                <Title >基本信息</Title>
                </Body>
                <Right style={{flex:1}} />
            </Header>
        )
    }

    shouldComponentUpdate() {
        return false
    }
}

function bindAction(dispatch) {
    return {};
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(SearchHeader)
