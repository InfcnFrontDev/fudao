import React, {Component} from "react";
import {connect} from "react-redux";
import {Container, Content, Title, Left, Right, Body, Form, Item, Text} from "native-base";
import {openDrawer, closeDrawer} from "../../actions/drawer";
import Header from "../../components/header/";
import ScrollableTabView, {ScrollableTabBar} from "react-native-scrollable-tab-view";
import styles from "./styles";

/**
 * 资讯
 */
class Article extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container style={styles.container}>
                <Header>
                    <Title>{this.props.title}</Title>
                </Header>

                <Content>
                    <ScrollableTabView
                        style={{marginTop: 20, }}
                        initialPage={2}
                        renderTabBar={() => <ScrollableTabBar />}
                    >
                        <Text tabLabel='Tab #1'>My</Text>
                        <Text tabLabel='Tab #2 word word'>favorite</Text>
                        <Text tabLabel='Tab #3 word word word'>project</Text>
                        <Text tabLabel='Tab #4 word word word word'>favorite</Text>
                        <Text tabLabel='Tab #5'>project</Text>
                    </ScrollableTabView>
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
export default connect(mapStateToProps, bindAction)(Article);