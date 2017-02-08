import React, {Component} from "react";
import {StyleSheet, View, Text, Image, PixelRatio} from "react-native";
import {connect} from "react-redux";
import NavBarView from "../components/NavBarView";
import util from "../utils/util";
import User from "../models/User";
import global from "../utils/global";


class MessageView extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let {messageList} = this.props;

        let users = global.realm.objects('User');
        console.log(global.realm);

        let items = messageList.messageListData.map(item => {
            return (
                <View key={util.uuid()} style={styles.messageItem}>
                    <Text>{item}</Text>
                    <Text>{user.id}</Text>
                    <Text>{user.username}</Text>
                    <Text>{user.password}</Text>
                    <Text>{user.name}</Text>
                </View>
            )
        });

        return (
            <NavBarView {...this.props}>
                <View style={styles.contentView}>
                    {items}
                    <Text>{users.length}</Text>
                </View>
            </NavBarView>
        )
    }
}

const styles = StyleSheet.create({
    contentView: {
        flexGrow: 1
    },
    messageItem: {
        backgroundColor: '#fff',
        padding: 10,
        borderBottomColor: '#000',
        borderBottomWidth: 1 / PixelRatio.get(),
        borderStyle: 'solid'
    }
});


function mapStateToProps(state) {
    const {messageList} = state;
    return {
        messageList
    }
}
export default connect(mapStateToProps)(MessageView)