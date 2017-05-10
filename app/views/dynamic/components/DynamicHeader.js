import React, {PureComponent} from "react";
import {Text} from "native-base";
import {View, Image} from "react-native";
import styles from "../assets/styles";

/**
 * 动态头部
 */
export default class DynamicHeader extends PureComponent {
    render() {
        let {user} = this.props;
        return (
            <View>
                <View style={styles.content1}>
                    <Image source={require('../../../assets/dy2.jpg')} style={styles.bgImg}/>
                </View>
                <View style={styles.person}>
                    <Text style={styles.color9b}>{user.nickname||user.username}</Text>
                </View>
                <View style={styles.touxiangView}>
                    <Image source={{uri: urls.getImage(user.img, 700, 500)}} style={styles.touxiang}/>
                </View>
            </View>
        )
    }
}

DynamicHeader.propTypes = {
    article: React.PropTypes.object, // 资讯
    onPress: React.PropTypes.func,
    onLongPress: React.PropTypes.func,
}
