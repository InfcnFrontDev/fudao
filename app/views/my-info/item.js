import React, {Component} from "react";
import {Left, Right, Body, ListItem, Text, Icon} from "native-base";

class MyInfoItem extends Component {

    render() {
        let {data, onPress} = this.props;
        return (
            <ListItem icon onPress={onPress}>
                <Body>
                <Text>{data.text}</Text>
                </Body>
                <Right>
                    <Text note>{data.note}</Text>
                    <Icon active name="ios-arrow-forward"/>
                </Right>
            </ListItem>
        );
    }
}

MyInfoItem.propTypes = {
    data: React.PropTypes.object,
}

MyInfoItem.defaultProps = {
    data: null,
}

export default (MyInfoItem);