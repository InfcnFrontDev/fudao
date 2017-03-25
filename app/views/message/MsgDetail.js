/**
 * Created by Administrator on 2017/3/18.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {TouchableOpacity,Dimensions} from "react-native";
import {Text,Thumbnail,View} from "native-base";
import {Container, Content, Header, Separator} from "../../components/index";
import {theme} from "../../utils/index";

var width=Dimensions.get('window').width;
var height=Dimensions.get('window').height;
class PushMsg extends Component {

    render() {
        return (

            <Container>
                <Header {...this.props}/>
                <Content padder gray style={styles.con}>
                    <View  style={styles.item}>
                        <View  style={styles.item1}>
                            <View style={{ flexDirection:'row',height:20,marginBottom:5}}>
                                <Text style={{color:'#0F82D7'}}>牛牛快跑</Text>
                                <Text style={styles.title}>给你分享了一个链接</Text>
                            </View>
                            <View style={{ flexDirection:'row',alignItems:'center'}}>
                                <View style={styles.imgBox}>
                                    <Thumbnail square source={require('./assets/laoniandaxue.jpg')} style={styles.img}/>
                                </View>
                                <View style={{marginLeft:10,width:width*0.5}}>
                                    <Text style={styles.doc}>        高血压病是指在静息状态下动脉收缩压和/或舒张压增高(>=140/90mmHg)......</Text>
                                </View>
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
    item: {
        marginLeft:20,
        marginRight:20,
        borderRadius:15,
        borderColor:"#fff",
        borderWidth:1,
        padding:10,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#fff',
    },
    img:{
        width:80,
        height:60,
        resizeMode:'contain'
    },
    doc:{
        fontSize:theme.DefaultFontSize-1,
        color:"#6A6A6A"
    },
    title:{
        fontSize:theme.DefaultFontSize,
        color:"#363636",
        marginLeft:10
    },

}



export default (PushMsg);

