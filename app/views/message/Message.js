import React, {Component} from "react";
import {connect} from "react-redux";
import {Container, Content, Header, Separator,List} from "../../components/index";
import {Actions} from "react-native-router-flux";
import {View,Dimensions,TouchableHighlight,TouchableOpacity } from "react-native";
import {Text,Thumbnail,ListItem,Left,Body,Button,Icon} from "native-base";
import {theme} from "../../utils/index";
var width=Dimensions.get('window').width;
var height=Dimensions.get('window').height;
class Message extends Component {

    render() {
        return (
            <Container>
                <Header {...this.props}/>
                <Content gray>
                    <View>
                        <TouchableHighlight onPress={()=>this._open()}>
                            <View style={{backgroundColor:'#fff'}}>
                                <ListItem avatar>
                                    <Left>
                                        <Thumbnail style={{width: 40, height: 40}} square
                                                   source={require('./assets/mag-org.png')}/>
                                    </Left>
                                    <Body>
                                    <Text>互动消息</Text>
                                    <Text note>牛牛快跑给您分享了一个链接！</Text>
                                    </Body>
                                </ListItem>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={()=>this._open()}>
                            <View style={{backgroundColor:'#fff'}}>
                                <ListItem avatar>
                                    <Left>
                                        <Thumbnail style={{width: 40, height: 40}} square
                                                   source={require('./assets/msg1.png')}/>
                                    </Left>
                                    <Body>
                                    <Text>系统消息</Text>
                                    <Text note>福道健康有新版本了，快来更新把！</Text>
                                    </Body>
                                </ListItem>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={()=>this._open()}>
                            <View style={{backgroundColor:'#fff'}}>
                                <ListItem avatar>
                                    <Left>
                                        <Thumbnail style={{width: 40, height: 40}} square
                                                   source={require('./assets/msg3.png')}/>
                                    </Left>
                                    <Body>
                                    <Text>福福</Text>
                                    <Text note>吃饭时间到，快来看看福福给您准备了...</Text>
                                    </Body>
                                </ListItem>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={{marginTop:10}}>
                        <TouchableHighlight onPress={()=>this._open()}>
                            <View style={{backgroundColor:'#fff'}}>
                                <ListItem avatar>
                                    <Left>
                                        <Thumbnail style={{width: 40, height: 40}} square
                                                   source={require('./assets/touxiang1.jpg')}/>
                                    </Left>
                                    <Body>
                                    <Text>神奇小白马</Text>
                                    <Text note>[微笑]</Text>
                                    </Body>
                                </ListItem>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={()=>this._open()}>
                            <View style={{backgroundColor:'#fff'}}>
                                <ListItem avatar>
                                    <Left>
                                        <Thumbnail style={{width: 40, height: 40}} square
                                                   source={require('./assets/touxiang2.jpg')}/>
                                    </Left>
                                    <Body>
                                    <Text>初九</Text>
                                    <Text note>我打开了你得分享，快来跟我聊聊吧!</Text>
                                    </Body>
                                </ListItem>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={()=>this._open()}>
                            <View style={{backgroundColor:'#fff'}}>
                                <ListItem avatar>
                                    <Left>
                                        <Thumbnail style={{width: 40, height: 40}} square
                                                   source={require('./assets/touxiang3.jpg')}/>
                                    </Left>
                                    <Body>
                                    <Text>王美丽</Text>
                                    <Text note>我赞了你哦！</Text>
                                    </Body>
                                </ListItem>
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
        borderWidth:1,
        borderColor:"#D6D6D6"
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