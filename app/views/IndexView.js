import React, {Component} from "react";
import {StyleSheet, View, Text} from "react-native";
import TabNavigator from "react-native-tab-navigator";
import iconfont from "../utils/iconfont";
import globalStyles from "../utils/globalStyles";
import HomeView from "../views/HomeView";
import ArticleView from "../views/ArticleView";
import DynamicView from "../views/DynamicView";
import MyView from "../views/MyView";

export default class IndexView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabs: [{
                id: 'home',
                title: '微信',
                icon: 'message',
                selectedIcon: 'message_fill',
                component: HomeView
            }, {
                id: 'article',
                title: '通讯录',
                icon: 'friend',
                selectedIcon: 'friend_fill',
                component: ArticleView
            }, {
                id: 'dynamic',
                title: '朋友圈',
                icon: 'discover_line',
                selectedIcon: 'discover_shape',
                component: DynamicView
            }, {
                id: 'my',
                title: '我的',
                icon: 'my',
                selectedIcon: 'my_fill',
                component: MyView
            }],
            selectedTab: 'home'
        };
    }

    render() {
        let {tabs} = this.state,
            tabItems = [];

        tabItems = tabs.map(tab => {
            return this.renderTabItem(tab);
        });

        return (
            <View style={styles.container}>
                <TabNavigator hidesTabTouch={true} tabBarStyle={styles.tabBarStyle} sceneStyle={styles.sceneStyle}>
                    {tabItems}
                </TabNavigator>
            </View>
        )
    }

    renderTabItem(tab) {
        let Component = tab.component;
        return (
            <TabNavigator.Item
                key={tab.id}
                title={tab.title}
                titleStyle={styles.titleStyle}
                selectedTitleStyle={styles.titleStyleSelected}
                renderIcon={() => this.renderIcon(tab.icon)}
                renderSelectedIcon={() => this.renderIcon(tab.selectedIcon, true)}
                selected={this.state.selectedTab === tab.id}
                onPress={() => this.setState({selectedTab: tab.id})}>
                <Component title={tab.title}/>
            </TabNavigator.Item>
        )
    }

    renderIcon(icon, selected = false) {
        return (
            <Text style={[styles.tabIcon, selected ? styles.tabIconSelected : {}]}>{iconfont[icon]}</Text>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    tabBarStyle: {
        ...globalStyles.bar,
    },
    sceneStyle: {
        ...globalStyles.container
    },
    titleStyle: {
        color: '#929292',
        fontSize: 10
    },
    titleStyleSelected: {
        color: '#2BA245'
    },
    tabIcon: {
        ...globalStyles.iconfont,
        color: '#929292',
        fontSize: 22
    },
    tabIconSelected: {
        color: '#2BA245'
    }
})
