import React, {PureComponent} from "react";
import {Container, Content, Text} from "native-base";
import Header from "../../components/header/SearchHeader";

/**
 * 搜索 -> 朋友圈
 */
export default class SearchFriendsCircle extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container>
                <Header placeholder="搜索朋友圈" />
                <Content>
                    <Text>朋友圈</Text>
                </Content>
            </Container>
        );
    }
}