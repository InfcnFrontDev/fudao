import React, {Component} from "react";
import {StyleSheet, View, Text} from "react-native";
import TabNavigator from "react-native-tab-navigator";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";
// tab components
import Home from "../home/";
import Article from "../article/";
import Dynamic from "../dynamic/";
import My from "../my/";

/**
 * 首页
 */
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: [{
                id: 'home',
                title: '主页',
                icon: 'ios-home-outline',
                selectedIcon: 'ios-home',
                component: Home
            }, {
                id: 'article',
                title: '资讯',
                icon: 'ios-list-box-outline',
                selectedIcon: 'ios-list-box',
                component: Article
            }, {
                id: 'dynamic',
                title: '动态',
                icon: 'ios-compass-outline',
                selectedIcon: 'ios-compass',
                component: Dynamic
            }, {
                id: 'my',
                title: '我的',
                icon: 'ios-person-outline',
                selectedIcon: 'ios-person',
                component: My
            }],
<<<<<<< .mine
            selectedTab: 'dynamic'
=======
            selectedTab: 'my'
>>>>>>> .theirs
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
            <Icon name={icon} style={[styles.tabIcon, selected ? styles.tabIconSelected : {}]}/>
        )
    }
}

export default (Index);
