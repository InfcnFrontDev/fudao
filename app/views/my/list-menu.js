import React, {Component} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {View, Icon, Left, Right, Body, Text, ListItem} from "native-base";

/**
 * my datas menu
 */
class MyList extends Component {

    render() {
        return (
            <View style={{backgroundColor: '#fff'}}>
                {this.renderItem({
                    icon: 'ios-list-box-outline',
                    text: '基本信息',
                    bordered: true,
                    route: 'about'
                })}
                {this.renderItem({
                    icon: 'ios-stopwatch-outline',
                    text: '体检信息',
                    bordered: true,
                    route: 'about'
                })}
                {this.renderItem({
                    icon: 'ios-tablet-portrait-outline',
                    text: '智能设备',
                    bordered: true,
                    route: 'about'
                })}
                {this.renderItem({
                    icon: 'ios-chatboxes-outline',
                    text: '推送通知',
                    bordered: true,
                    route: 'about'
                })}
                {this.renderItem({
                    icon: 'ios-information-circle-outline',
                    text: '关于福道',
                    bordered: false,
                    route: 'about'
                })}
            </View>
        )
    }


    renderItem(item) {
        return (
            <ListItem icon onPress={()=> Actions[item.route]()}>
                <Left>
                    <Icon name={item.icon}/>
                </Left>
                <Body style={item.bordered?{}:{borderBottomWidth:0}}>
                <Text>{item.text}</Text>
                </Body>
                <Right style={item.bordered?{}:{borderBottomWidth:0}}>
                    <Icon name="ios-arrow-forward"/>
                </Right>
            </ListItem>
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
export default connect(mapStateToProps, bindAction)(MyList);