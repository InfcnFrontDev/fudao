import React, {Component} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Header, Button, Icon, Left, Right, Body} from "native-base";
import {openDrawer, closeDrawer} from "../../actions/drawer";

class IndexHeader extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Header>
                <Left>
                    <Button transparent onPress={() => this.props.openDrawer()}>
                        <Icon name="menu"/>
                    </Button>
                </Left>
                <Body>
                {this.props.children}
                </Body>
                <Right>
                    <Button transparent onPress={()=>Actions.search()}><Icon name="search"/></Button>
                    <Button transparent><Icon name="ios-chatboxes"/></Button>
                </Right>
            </Header>
        )
    }

    shouldComponentUpdate() {
        return false
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: () => dispatch(openDrawer()),
        closeDrawer: key => dispatch(closeDrawer()),
    };
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(IndexHeader)