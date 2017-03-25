import React, {Component} from "react";
import {connect} from "react-redux";
import {Container, Content, Header, Separator} from "../../components/index";
import {Actions} from "react-native-router-flux";
import {View,Dimensions,TouchableHighlight} from "react-native";
import {Text,Thumbnail,} from "native-base";
import {theme} from "../../utils/index";
var width=Dimensions.get('window').width;
var height=Dimensions.get('window').height;
class Message extends Component {

    render() {
        return (
            <Container>
                <Header {...this.props}/>
                <Content gray>
                  <View style={{borderTopWidth:1,borderColor:'#D6D6D6'}}>
                        <TouchableHighlight onPress={()=>this._open()}>
                            <View style={styles.item}>
                                <View style={styles.item1}>
                                    <View  style={styles.itemLeft}>
                                        <View style={styles.point}></View>
                                        <Thumbnail square source={require('./assets/woniu.png')} style={styles.img}/>
                                    </View>
                                    <View  style={styles.textBox}>
                                        <Text style={styles.title}>互动消息</Text>
                                        <Text style={styles.doc}>牛牛快跑给您分享了一个链接！</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableHighlight>

                    </View>
                 <View style={{borderTopWidth:1,borderColor:'#D6D6D6'}}>
                        <TouchableHighlight onPress={()=>this._open()}>
                            <View style={styles.item}>
                                <View style={styles.item1}>
                                    <View  style={styles.itemLeft}>
                                        <View style={styles.point}></View>
                                        <Thumbnail square source={require('./assets/msg.png')} style={styles.img}/>
                                    </View>
                                    <View  style={styles.textBox}>
                                        <Text style={styles.title}>系统消息</Text>
                                        <Text style={styles.doc}>福道健康有新版本了，快来更新把！</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableHighlight>
                    </View>
                  <View style={{borderTopWidth:1,borderColor:'#D6D6D6'}}>
                        <TouchableHighlight onPress={()=>this._open()}>
                            <View style={styles.item}>
                                <View style={styles.item1}>
                                    <View  style={styles.itemLeft}>
                                        <View style={styles.point}></View>
                                        <Thumbnail square source={require('./assets/zhuye.png')} style={styles.img}/>
                                    </View>
                                    <View  style={styles.textBox}>
                                        <Text style={styles.title}>福福</Text>
                                        <Text style={styles.doc}>吃饭时间到，快来看看福福给您准备了什么好吃的！</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableHighlight>
                    </View>
                </Content>
            </Container>

        )
    }
    _open(){
        Actions['msgDetail']({title:'互动消息'})
    }
}
const styles = {
    con:{
        backgroundColor:'#333'
    },
    item: {
        height:80,
        borderColor:"#D6D6D6",
        borderBottomWidth:1,
        flexDirection:'row',
        width:width,
        alignItems:'center',
        backgroundColor:'#fff',
        paddingLeft:10,
        paddingRight:10
    },
    item1: {
        flexDirection:'row',
        alignItems:'center',
    },
    itemLeft:{
        position:'relative',
        width:width*0.18,
    },
    img:{
        width:50,
        height:50,
        marginRight:10,
    },
    title:{
        fontSize:theme.DefaultFontSize,
        color:"#363636"
    },
    doc:{
        fontSize:theme.DefaultFontSize-1,
        color:"#6A6A6A"
    },
    textBox:{
        width:width*0.8,
    },
    point:{
        width:10,
        height:10,
        backgroundColor:'red',
        borderWidth:1,
        borderColor:'red',
        borderRadius:6,
        position:'absolute',
        left:40,
        top:4,
    }



}

const mapStateToProps = state => ({

});
export default connect(mapStateToProps)(Message);