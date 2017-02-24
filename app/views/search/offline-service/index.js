import React, {PureComponent} from "react";
import {Container, Content, Left, Right, Body, Text} from "native-base";
import Header from "../../../components/header/search";
import styles from "./styles";

/**
 * 搜索 -> 线下服务
 */
class SearchOfflineService extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container>
                <Header/>
                <Content padder style={styles.content}>
                    <Text>线下服务</Text>
                </Content>
            </Container>
        );
    }
}

export default (SearchOfflineService);