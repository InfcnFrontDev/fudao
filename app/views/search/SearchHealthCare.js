import React, {PureComponent} from "react";
import {Container, Content, Text} from "native-base";
import Header from "../../components/header/SearchHeader";

/**
 * 搜索 -> 保健方法
 */
export default class SearchHealthCare extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container>
                <Header placeholder="搜索保健方法" />
                <Content>
                    <Text>保健方法</Text>
                </Content>
            </Container>
        );
    }
}