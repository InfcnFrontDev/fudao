import React, {Component} from "react";
import {View, TouchableNativeFeedback} from "react-native";
import {connect} from "react-redux";
import {Container, Title, Content, Left, Right, Body, Separator} from "native-base";
import {openDrawer, closeDrawer} from "../../actions/drawer";
import Header from "../../components/header/";
import styles from "./styles";
import PhotoMenu from "./photo-menu";
import ListMenu from "./list-menu";
import GridMenu from "./grid-menu";

/**
 * 我的
 */
class My extends Component {

    render() {
        return (
            <Container>
                <Header>
                    <Title>{this.props.title}</Title>
                </Header>

                <Content style={styles.content}>
                    <PhotoMenu/>
                    <GridMenu/>
                    <Separator bordered/>
                    <ListMenu />
                    <Separator bordered noBottomBorder/>
                </Content>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: () => dispatch(openDrawer()),
        closeDrawer: key => dispatch(closeDrawer()),
    };
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(My);