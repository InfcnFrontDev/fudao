import React, {Component} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Header, Button, Icon, Left, Right, Body, Title} from "native-base";


class BaseHeader extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Header>
                <Left>
                    <Button transparent onPress={() => Actions.pop()}>
                        <Icon name="arrow-back"/>
                    </Button>
                </Left>
                <Body>
                <Title>{this.props.title}</Title>
                </Body>
                <Right>
                </Right>
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
export default connect(mapStateToProps, bindAction)(BaseHeader)