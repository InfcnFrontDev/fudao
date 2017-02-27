import React, {Component} from "react";
import {StyleSheet} from "react-native";
import {Left, Right, Body, View, Icon, Text} from "native-base";

class TabBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let param = this.data[this.props.sceneKey];
        let activeStyle = this.props.selected ? {color: "#3399FF"} : {};
        return (
            <View style={{alignItems:'center'}}>
                <Icon name={this.props.iconName} color={activeStyle.color} size={25}/>
                <Text style={[activeStyle,styles.tabbarItem]}>{this.props.title}</Text>
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

export default (TabBar)