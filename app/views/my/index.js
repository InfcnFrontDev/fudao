import React, {Component} from "react";
import {View, TouchableNativeFeedback} from "react-native";
import {connect} from "react-redux";
import {Container, Title, Content, Icon, Left, Right, Body, Text, Thumbnail, Grid, Col, ListItem} from "native-base";
import {openDrawer, closeDrawer} from "../../actions/drawer";
import Header from "../../components/header/";
import styles from "./styles";
import ListMenu from "./list-menu";
import GridMenu from "./grid-menu";

/**
 * 我的
 */
class My extends Component {

    render() {
        return (
            <Container style={styles.container}>
                <Header>
                    <Title>{this.props.title}</Title>
                </Header>

                <Content style={styles.content}>
                    {this.renderMyView()}
                    <GridMenu/>
                    {this.renderSeparator()}
                    <ListMenu />
                </Content>
            </Container>
        )
    }

    renderMyView() {
        return (
            <View style={styles.myView}>
                <View style={styles.thumbnailView}>
                    <TouchableNativeFeedback onPress={()=> Actions['about']()}>
                        <Thumbnail size={100} source={require('../../assets/photo.jpg')}/>
                    </TouchableNativeFeedback>
                </View>
            </View>
        )
    }

    renderSeparator() {
        return (
            <View style={{height:20}}/>
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