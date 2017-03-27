import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {View,TouchableOpacity,TouchableHighlight,Alert,Image ,Modal,Dimensions ,ScrollView} from "react-native";
import {Text, Button} from "native-base";
import {Container, Content,Header} from "../../components/index";
import {config, urls,theme,toast,request} from "../../utils/index";
/**
 * 菜谱
 */

var width=Dimensions.get('window').width;
var height=Dimensions.get('window').height;
class MenuDetail extends PureComponent {
    constructor(props) {
        super(props);
        this.state={
          data:this.props.item,
        }
    }

    render() {
        let data=this.state.data;
            return (
                <Container>
                    <Header back title={data.name}></Header>
                    <Content>
                        <View style={styles.box1}>
                            <View style={styles.imgBox}>
                                <Image source={{uri: urls.getImage(data.img,width,200)}} style={{width:width,height:200}}></Image>
                            </View>
                            <ScrollView style={styles.scrollView}>
                                <View style={{marginBottom:20}}>
                                    <View>
                                        <View style={styles.cpBar}>
                                            <Text>主料</Text>
                                        </View>
                                        <View style={styles.cp}>
                                            <Text>{data.ingredients}</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <View style={styles.cpBar}>
                                            <Text>辅料</Text>
                                        </View>
                                        <View style={styles.cp}>
                                            <Text>{data.mainIngredient}</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <View  style={styles.cpBar}>
                                            <Text>操作方法</Text>
                                        </View>
                                        <View style={styles.cp}>
                                            <Text>{data.steps}</Text>
                                        </View>
                                    </View>
                                </View>

                            </ScrollView>
                        </View>
                    </Content>
                </Container>
            );
        }
}

const styles = {
    imgBox:{
        height:200,
        backgroundColor:'#fff',
        justifyContent: 'center',
    },
    button:{
        flex:1,
        justifyContent:'center'
    },
    buttonSelected:{
        backgroundColor:"#fff",
    },
    textBox:{
        height:50,
        flexDirection:'row',
        paddingLeft:10,
        paddingRight:10
    },
    box1:{
        borderWidth:1,
        borderColor:'#fff',
        backgroundColor:'#fff',
        borderRadius:5
    },
    cpBar:{
        height:30,
        borderTopWidth:1,
        borderColor:'#E2E2E2',
        backgroundColor:'#F0F0F0',
        justifyContent:'center',
        paddingLeft:10,
        paddingRight:10,
    },
    cp:{
        borderTopWidth:1,
        borderColor:'#E2E2E2',
        backgroundColor:'#fff',
        justifyContent:'center',
        paddingLeft:10,
        paddingRight:10,
        paddingTop:4,
        paddingBottom:4,
    },
    scrollView:{
        height:height-260,
        marginBottom:20
    }

};

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(MenuDetail);