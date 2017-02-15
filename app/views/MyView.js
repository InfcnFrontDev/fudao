import React, {Component} from "react";
import {StyleSheet, View, TouchableNativeFeedback} from "react-native";
import {
    Container,
    Content,
    Left,
    Body,
    Right,
    Thumbnail,
    Text,
    Separator,
    Icon,
    ListItem,
    Grid,
    Col
} from "native-base";
import NavBarView from "../components/NavBarView";

/**
 * 我的
 */
class MyView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <NavBarView {...this.props}>
                <Container>
                    <Content>
                        {this.renderMyView()}
                        {this.renderGridView()}
                        {this.renderSeparator()}
                        {this.renderListView()}
                    </Content>
                </Container>
            </NavBarView>
        )
    }

    renderMyView() {
        return (
            <View style={styles.myView}>
                <View style={styles.thumbnailView}>
                    <Thumbnail square size={80} source={require('../assets/logo.png')}/>
                </View>
            </View>
        )
    }

    renderGridView() {
        return (
            <Grid style={{backgroundColor: '#fff', height: 80}}>
                {this.renderGridItem({
                    icon: 'ios-star',
                    iconColor: '#DAA520',
                    text: '收藏'
                })}
                {this.renderGridItem({
                    icon: 'ios-pie',
                    iconColor: '#79CDCD',
                    text: '好友'
                })}
                {this.renderGridItem({
                    icon: 'ios-settings',
                    iconColor: '#A2B5CD',
                    text: '设置'
                })}
            </Grid>
        )
    }

    renderGridItem(item) {
        let colStyle = {justifyContent: 'center', alignItems: 'center'},
            iconStyle = {fontSize: 40, color: item.iconColor};
        return (
            <TouchableNativeFeedback onPress={()=>this._onPressButton(item)}>
                <Col style={colStyle}>
                    <Icon name={item.icon} style={iconStyle}/>
                    <Text>{item.text}</Text>
                </Col>
            </TouchableNativeFeedback>
        )
    }

    renderListView() {
        return (
            <View style={{backgroundColor: '#fff'}}>
                {this.renderListItem({
                    icon: 'ios-list-box-outline',
                    text: '基本信息',
                    bordered: true
                })}
                {this.renderListItem({
                    icon: 'ios-stopwatch-outline',
                    text: '体检信息',
                    bordered: true
                })}
                {this.renderListItem({
                    icon: 'ios-tablet-portrait-outline',
                    text: '智能设备',
                    bordered: true
                })}
                {this.renderListItem({
                    icon: 'ios-chatboxes-outline',
                    text: '推送通知',
                    bordered: true
                })}
                {this.renderListItem({
                    icon: 'ios-information-circle-outline',
                    text: '关于福道',
                    bordered: false
                })}
            </View>
        )
    }

    renderListItem(item) {
        return (
            <ListItem icon onPress={()=>this._onPressButton({})}>
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

    renderSeparator() {
        return (
            <View style={{height:20}}/>
        )
    }

    _onPressButton(item) {
    }
}

const styles = StyleSheet.create({
    myView: {
        backgroundColor: '#1874CD',
        alignItems: 'center',
    },
    thumbnailView: {
        marginTop: 10,
        marginBottom: 10,
    }
});

export default (MyView);