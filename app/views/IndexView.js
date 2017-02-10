import React, {Component} from "react";
import {StyleSheet, View, Text} from "react-native";
import TabNavigator from "react-native-tab-navigator";
import Icon from "react-native-vector-icons/Ionicons";
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
                title: '首页',
                icon: 'ios-home-outline',
                selectedIcon: 'ios-home',
                component: HomeView
            }, {
                id: 'article',
                title: '资讯',
                icon: 'ios-list-box-outline',
                selectedIcon: 'ios-list-box',
                component: ArticleView
            }, {
                id: 'dynamic',
                title: '动态',
                icon: 'ios-compass-outline',
                selectedIcon: 'ios-compass',
                component: DynamicView
            }, {
                id: 'my',
                title: '我',
                icon: 'ios-person-outline',
                selectedIcon: 'ios-person',
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
            <Icon name={icon} style={[styles.tabIcon, selected ? styles.tabIconSelected : {}]}/>
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
        fontSize: 12
    },
    titleStyleSelected: {
        color: '#2BA245'
    },
    tabIcon: {
        color: '#929292',
        fontSize: 24
    },
    tabIconSelected: {
        color: '#2BA245'
    }
})
