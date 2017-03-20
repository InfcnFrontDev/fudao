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
                <Content padder gray style={styles.con}>
                    <View  style={styles.item1}>
                        <View style={{ flexDirection:'row',height:20,marginBottom:5}}>
                            <Text style={{color:'#0F82D7'}}>牛牛快跑</Text>
                            <Text style={{marginLeft:10}}>给你分享了一个链接</Text>
                        </View>
                        <View style={{ flexDirection:'row',alignItems:'center'}}>
                            <Thumbnail square source={require('./assets/zhuye.png')} style={styles.img}/>
                            <View style={{marginLeft:10}}>
                                <Text style={{fontSize:14}}>高血压症状，高血压早期症状</Text>
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
        marginLeft:30,
        marginRight:30,
        borderRadius:15,
        borderColor:"#fff",
        borderWidth:1,
        padding:5,

       /* paddingRight:20,*/

        backgroundColor:'#fff',
    },
    item: {
        flexDirection:'row',
        alignItems:'center',

    },
    img:{
        width:80,
        height:60,
        resizeMode:'contain'
    }

}



export default (PushMsg);

