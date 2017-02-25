import React, {PureComponent} from "react";
import {Container, Content, Left, Right, Body, Text} from "native-base";
import Header from "../../../components/header/search";
import styles from "./styles";

/**
 * 搜索 -> 保健方法
 */
class SearchHealthCare extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container>
                <Header placeholder="搜索保健方法" />
                <Content padder style={styles.content}>
                    <Text>保健方法</Text>
                </Content>
            </Container>
        );
    }
}

export default (SearchHealthCare);