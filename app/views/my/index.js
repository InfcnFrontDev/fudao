import React, {Component} from "react";
import {StyleSheet, View} from "react-native";
import {Content, List, ListItem, Left, Body, Right, Icon, Text} from "native-base";
import NavBarView from "../../components/NavBarView";
/**
 * 组件列表
 */
class MyView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <NavBarView {...this.props}>
                <View>

                </View>
                <View>

                </View>
                <Content>
                    <List>
                        <ListItem icon>
                            <Left>
                                <Icon name="planet"/>
                            </Left>
                            <Body>
                            <Text>Astronomy</Text>
                            </Body>
                            <Right>
                                <Text note>To The Moon</Text>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="planet"/>
                            </Left>
                            <Body>
                            <Text>Astronomy</Text>
                            </Body>
                            <Right>
                                <Text note>To The Moon</Text>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="planet"/>
                            </Left>
                            <Body>
                            <Text>Astronomy</Text>
                            </Body>
                            <Right>
                                <Text note>To The Moon</Text>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="planet"/>
                            </Left>
                            <Body>
                            <Text>Astronomy</Text>
                            </Body>
                            <Right>
                                <Text note>To The Moon</Text>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="planet"/>
                            </Left>
                            <Body>
                            <Text>Astronomy</Text>
                            </Body>
                            <Right>
                                <Text note>To The Moon</Text>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="planet"/>
                            </Left>
                            <Body>
                            <Text>Astronomy</Text>
                            </Body>
                            <Right>
                                <Text note>To The Moon</Text>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </NavBarView>
        )
    }
}

export default (MyView);