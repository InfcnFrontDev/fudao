import React, {Component} from "react";
import {StyleSheet} from "react-native";
import {Left, Right, Body, View, Icon, Text} from "native-base";

class TabBarIcon extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {selected, title, iconName, selectedIconName} = this.props;
        let activeStyle = selected ? {color: "#3399FF"} : {};
        if (selected) {
            iconName = selectedIconName;
        }
        return (
            <View style={{alignItems:'center'}}>
                <Icon name={iconName} color={activeStyle.color} size={25}/>
                <Text style={[activeStyle,styles.tabbarItem]}>{title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tabbarContainer: {
        flex: 1,
        backgroundColor: "#f6f6f6",
    },
    tabbarItem: {
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        marginLeft: -3
    }
})

export default (TabBarIcon)