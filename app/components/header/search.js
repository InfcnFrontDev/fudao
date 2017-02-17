import React, {Component} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Header, Icon, Left, Right, Body, Form, Input, Item} from "native-base";

class SearchHeader extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Header searchBar rounded>
                <Item>
                    <Icon active name="arrow-back" onPress={() => Actions.pop()}/>
                    <Input placeholder="Search"/>
                    <Icon active name="search"/>
                </Item>
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