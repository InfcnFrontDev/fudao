import React, {PureComponent} from "react";
import {Container, Content, Left, Right, Body, Text} from "native-base";
import Header from "../../../components/header/search";
import styles from "./styles";

/**
 * 搜索 -> 朋友圈
 */
class SearchFriendsCircle extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container>
                <Header/>
                <Content padder style={styles.content}>
                    <Text>朋友圈</Text>
                </Content>
            </Container>
        );
    }
}

export default (SearchFriendsCircle);