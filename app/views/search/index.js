import React, {Component} from "react";
import {connect} from "react-redux";
import {Container, Content, Left, Right, Body} from "native-base";
import Header from "../../components/header/search";
import styles from "./styles";

/**
 * 搜索
 */
class Search extends Component {

    render() {
        return (
            <Container style={styles.container}>
                <Header/>
                <Content padder>

                </Content>
            </Container>
        );
    }
}

function bindAction(dispatch) {
    return {};
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(Search);