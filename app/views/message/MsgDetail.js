/**
 * Created by Administrator on 2017/3/18.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {TouchableOpacity} from "react-native";
import {Text,Thumbnail,View} from "native-base";
import {Container, Content, Header, Separator} from "../../components/index";
class PushMsg extends Component {

    render() {
        return (

            <Container>
                <Header {...this.props}/>
                <Content style={styles.con}>
                    <View  style={styles.item1}>
                        <View style={{ flexDirection:'row',height:20}}>
                            <Text>牛牛</Text>
                            <Text>给你分享了一个链接</Text>
                        </View>
                        <View style={{ flexDirection:'row',alignItems:'center'}}>
                            <Thumbnail square source={require('./assets/zhuye.png')} style={styles.img} size={60}/>
                            <View style={{marginLeft:10}}>
                                <Text>吃饭时间到吃饭时间到吃饭时间到吃饭时间到</Text>
                            </View>
                        </View>

                    </View>
                </Content>
            </Container>



        )
    }
    _open(){
        /* Actions.msgDetail()*/
    }
}
const styles = {
    con:{
        backgroundColor:'#333',
        flexDirection:'column ',
        justifyContent:'center'
    },
    item1: {

       padding:10,
        borderRadius:15,
        borderColor:"#fff",
        borderWidth:1,
        flexDirection:'column',
       /* paddingRight:20,*/
        alignItems:'center',
        backgroundColor:'#333',
    },
    item: {
        flexDirection:'row',
        alignItems:'center'
    },
    img:{
        width:50,
        height:50
    }

}



export default (PushMsg);

