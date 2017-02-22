import React, {Component} from "react";
import {TouchableHighlight} from "react-native";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Left, Right, Body, Grid, Col, Thumbnail, Item, Text, Icon} from "native-base";
import styles from "./styles";

/**
 * my grid menu
 */
class PhotoMenu extends Component {

    render() {

        return (
            <Item style={styles.photoMenu} onPress={()=> Actions.myInfo()}>
                <Grid>
                    <Col style={styles.myPhoto}>
                        <Thumbnail size={80} source={require('../../assets/photo.jpg')}/>
                    </Col>
                    <Col style={styles.myTitle}>
                        <Text style={styles.myTitleText}>可可杨</Text>
                    </Col>
                    <Col style={styles.myForward}>
                        <Icon name="ios-arrow-forward" style={styles.myForwardIcon}/>
                    </Col>
                </Grid>
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