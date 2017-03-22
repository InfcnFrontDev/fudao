import React, {Component} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {TouchableOpacity} from "react-native";
import {Text,Thumbnail,View} from "native-base";

class PushMsg extends Component {

    render() {
        return (
            <View style={{marginTop:20,borderTopWidth:1,borderColor:'#D6D6D6'}}>
                <View  style={styles.item1}>
                    <TouchableOpacity style={styles.item} onPress={this._open.bind(this)}>
                        <Thumbnail square source={require('./assets/zhuye.png')} style={styles.img} size={60}/>
                        <View>
                            <Text>福福</Text>
                            <Text>吃饭时间到吃饭时间到吃饭时间到</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.item1}>
                    <TouchableOpacity style={styles.item} onPress={this._open.bind(this)}>
                        <Thumbnail square source={require('./assets/zhuye.png')} style={styles.img}/>
                        <View>
                            <Text>福福</Text>
                            <Text>吃饭时间到吃饭时间到吃饭时间到</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    _open(){
        Actions['msgDetail']({title:'互动消息'})
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



export default (PushMsg);

