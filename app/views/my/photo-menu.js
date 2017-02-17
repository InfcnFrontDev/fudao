import React, {Component} from "react";
import {TouchableHighlight} from "react-native";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Left, Right, Body, View, Thumbnail, Item} from "native-base";
import styles from "./styles";

/**
 * my grid menu
 */
class PhotoMenu extends Component {

    render() {

        return (
            <Item style={styles.photoMenu} onPress={()=> Actions.about()}>
                <View style={styles.thumbnailView}>
                    <Thumbnail size={100} source={require('../../assets/photo.jpg')}/>
                </View>
            </Item>
        )
    }

    shouldComponentUpdate() {
        return false
    }
}
function bindAction(dispatch) {
    return {};
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(PhotoMenu);