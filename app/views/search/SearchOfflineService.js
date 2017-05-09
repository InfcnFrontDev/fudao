import React, {PureComponent} from "react";
import {Container, Content, Left, Right, Body, Text} from "native-base";
import Header from "../../components/header/SearchHeader";

/**
 * 搜索 -> 线下服务
 */
export default class SearchOfflineService extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container>
                <Header placeholder="搜索线下服务" />
                <Content>
                    <Text>线下服务</Text>
                </Content>
            </Container>
        );
    }
}