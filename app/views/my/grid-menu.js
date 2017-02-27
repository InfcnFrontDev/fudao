import React, {Component} from "react";
import {TouchableNativeFeedback} from "react-native";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Grid, Icon, Left, Right, Body, Text, Col} from "native-base";
import styles from "./styles";

/**
 * my grid menu
 */
class GridMenu extends Component {

    render() {

        return (
            <Grid style={{backgroundColor: '#fff', height: 80}}>
                {this.renderItem({
                    icon: 'heart',
                    iconColor: '#EC6149',
                    text: '收藏'
                })}
                {this.renderItem({
                    icon: 'people',
                    iconColor: '#79CDCD',
                    text: '好友'
                })}
                {this.renderItem({
                    icon: 'ios-settings',
                    iconColor: '#868686',
                    text: '设置'
                })}
            </Grid>
        )
    }


    renderItem(item) {
        let iconStyle = {fontSize: 40, color: item.iconColor};
        return (
            <TouchableNativeFeedback key={item.text} onPress={()=> Actions['about']()}>
                <Col style={styles.gridCol}>
                    <Icon name={item.icon} style={iconStyle}/>
                    <Text>{item.text}</Text>
                </Col>
            </TouchableNativeFeedback>
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
export default connect(mapStateToProps, bindAction)(GridMenu);