import React, {PureComponent} from "react";
import {Container, Content, Left, Right, Body, Text} from "native-base";
import Header from "../../../components/header/search";
import Result from "./result";
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
                <Header placeholder="搜索资讯" />
                <Content>
                    <Result/>
                </Content>
            </Container>
        );
    }
}

export default (SearchInformation);