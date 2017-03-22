import React, {Component} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";

import {Text,Thumbnail,View} from "native-base";

class SystemMsg extends Component {

    render() {
        return (
            <View style={{borderTopWidth:1,borderColor:'#D6D6D6'}}>
                <View style={styles.item1}>
                    <Thumbnail square source={require('./assets/zhuye.png')} style={styles.img} size={60}/>
                    <View >
                        <Text>系统消息</Text>
                        <Text>系统消息系统消息系统消息</Text>
                    </View>
                </View>
                <View style={styles.item1}>
                    <Thumbnail square source={require('./assets/zhuye.png')} style={styles.img}/>
                    <View >
                        <Text>系统消息</Text>
                        <Text>系统消息系统消息系统消息系统</Text>
                    </View>
                </View>
            </View>




        )
    }
}
const styles = {
    item1: {
        height:80,
        borderColor:"#D6D6D6",
        borderBottomWidth:1,
        flexDirection:'row',
        paddingHorizontal:10,
        alignItems:'center',
        backgroundColor:'#fff'
    },
    item: {
        flexDirection:'row',
        alignItems:'center',
    },
    img:{
        width:50,
        height:50,
        marginRight:10
    }

}



export default SystemMsg;
