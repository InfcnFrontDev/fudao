import React, {Component} from "react";
import {StyleSheet, View, TouchableNativeFeedback, TouchableHighlight} from "react-native";
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
import {connect} from "react-redux";
import {actions} from "react-native-navigation-redux-helpers";
import {openDrawer, closeDrawer} from "../../actions/drawer";
import NavBarView from "../../components/NavBarView";
import styles from "./styles";
// components

const {
    pushRoute,
} = actions;

/**
 * 我的
 */
class My extends Component {

    static propTypes = {
        openDrawer: React.PropTypes.func,
        pushRoute: React.PropTypes.func,
        navigation: React.PropTypes.shape({
            key: React.PropTypes.string,
        }),
    }

    pushRoute(route) {
        debugger;
        this.props.pushRoute({key: route, index: 1}, this.props.navigation.key);
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
                    <TouchableNativeFeedback onPress={()=>this._onPressButton()}>
                        <Thumbnail size={100} source={require('../../assets/photo.jpg')} style={{ marginBottom: 10 }}/>
                    </TouchableNativeFeedback>
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
            <TouchableNativeFeedback onPress={()=>this.pushRoute('about')}>
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
                    bordered: true,
                    onPress: function () {
                    }
                })}
                {this.renderListItem({
                    icon: 'ios-stopwatch-outline',
                    text: '体检信息',
                    bordered: true,
                    onPress: function () {
                    }
                })}
                {this.renderListItem({
                    icon: 'ios-tablet-portrait-outline',
                    text: '智能设备',
                    bordered: true,
                    onPress: function () {
                    }
                })}
                {this.renderListItem({
                    icon: 'ios-chatboxes-outline',
                    text: '推送通知',
                    bordered: true,
                    route: 'about'
                })}
                {this.renderListItem({
                    icon: 'ios-information-circle-outline',
                    text: '关于福道',
                    bordered: false,
                    route: 'about'
                })}
            </View>
        )
    }

    renderListItem(item) {
        return (
            <ListItem icon onPress={()=> this.pushRoute('about')}>
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
}

function bindAction(dispatch) {
    return {
        openDrawer: () => dispatch(openDrawer()),
        closeDrawer: () => dispatch(closeDrawer()),
        pushRoute: (route, key) => dispatch(pushRoute(route, key)),
    };
}

const mapStateToProps = state => ({
    navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(My);