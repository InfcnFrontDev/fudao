import React, {PureComponent} from "react";
import {Container, Content, Left, Right, Body, Text} from "native-base";
import Header from "../../../components/header/search";
import styles from "./styles";

/**
 * 搜索 -> 资讯
 */
class SearchInformation extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container>
                <Header/>
                <Content padder style={styles.content}>
                    <Text>资讯</Text>
                </Content>
            </Container>
        );
    }
}

export default (SearchInformation);