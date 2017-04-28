import React, {PureComponent} from "react";
import {observer} from "mobx-react/native";
import {Text} from "react-native";
import {Container, Header, Content, Loading} from "../../components/index";

/**
 * 自诊
 */
@observer
export default class Evaluation extends PureComponent {

    render() {
        return (
            <Container>
                <Header {...this.props}/>
                <Content>
                    <Text>aaaaaaaaaa</Text>
                </Content>
            </Container>
        )
    }


}
const styles = {

};
