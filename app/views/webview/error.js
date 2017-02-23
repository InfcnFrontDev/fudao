import React, {PureComponent} from "react";
import {Image, View, Text} from "react-native";
import styles from "./styles";

class Error extends PureComponent {

    render() {
        return (
            <View style={styles.errorView}>
                <Image style={styles.errorImage} source={require('../../assets/error.png')}/>
                <Text>网络不给力，请稍后再重试。</Text>
            </View>
        )
    }
}

export default (Error);