import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {View,TouchableOpacity} from "react-native";
import {Text, Button} from "native-base";
import {Container, Content} from "../../components/index";
import {config, urls,theme} from "../../utils/";
/**
 * 菜单
 */

const tabs = [
    {
        text: '芹菜',
    },
    {
        text: '胡萝卜',
    },
    {
        text: '西葫芦',
    },
    {
        text: '白菜',
    }
    ];

class Menukinds extends PureComponent {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Container>
                <Content>
                    <View style={styles.bar}>
                        {tabs.map((item, index) => this.renderTab(item, index))}
                    </View>
                    <View style={styles.imgBox}></View>
                    <Text style={{textAlign:'center',marginTop:10}}>芹菜的营养价值表</Text>
                    <View style={styles.yyBox}>
                            <View style={styles.yyBag}>
                                <View style={styles.yyName}>
                                    <Text style={styles.doc}>检查名称</Text>
                                </View>
                                <View style={styles.yyBz}>
                                    <Text style={styles.doc}>能量</Text>
                                </View>
                            </View>
                            <View style={styles.yyBag}>
                                <View style={styles.yyName}>
                                    <Text style={styles.doc}>检查名称</Text>
                                </View>
                                <View style={styles.yyBz}>
                                    <Text style={styles.doc}>能量</Text>
                                </View>
                            </View>
                            <View style={styles.yyBag}>
                                <View style={styles.yyName}>
                                    <Text style={styles.doc}>检查名称</Text>
                                </View>
                                <View style={styles.yyBz}>
                                    <Text style={styles.doc}>能量</Text>
                                </View>
                            </View>
                            <View style={styles.yyBag}>
                                <View style={styles.yyName}>
                                    <Text style={styles.doc}>检查名称</Text>
                                </View>
                                <View style={styles.yyBz}>
                                    <Text style={styles.doc}>能量</Text>
                                </View>
                            </View>
                            <View style={styles.yyBag}>
                                <View style={styles.yyName}>
                                    <Text style={styles.doc}>检查名称</Text>
                                </View>
                                <View style={styles.yyBz}>
                                    <Text style={styles.doc}>能量</Text>
                                </View>
                            </View>
                        </View>
                    <Text style={{textAlign:'center',marginTop:10}}>推荐菜谱</Text>
                    <View style={styles.caiPuBox}>
                        <View style={{flex:1}}>
                            <View style={styles.caiPu1}>
                                <Text style={styles.doc}>芹菜香干</Text>
                            </View>
                            <View style={styles.caiPu2}>
                                <Text style={styles.doc}>芹菜香干</Text>
                            </View>
                        </View>
                        <View style={{flex:1}}>
                            <View style={styles.caiPu3}>
                                <Text style={styles.doc}>芹菜香干</Text>
                            </View>
                            <View style={styles.caiPu4}>
                                <Text style={styles.doc}>芹菜香干</Text>
                            </View>
                            </View>
                    </View>
                </Content>
            </Container>
        );
    }

    renderTab(item, index) {
        return (
            <Button
                key={index}
                transparent
                onPress={() => this._goToPage(item.text)}
                style={styles.button}
            >
                <Text style={styles.textBar}>{item.text}</Text>
            </Button>
        )
    }

    _goToPage(text) {


    }


}

const styles = {
    textBar:{
        fontColor:'#666666',
        fontSize:18,
    },
    bar:{
        height:40,
        flexDirection:'row'
    },
    imgBox:{
        height:200,
        backgroundColor:'red'
    },
    button:{
        backgroundColor:"#F0F0F0",
        flex:1,
        justifyContent:'center'
    },
    yyBox:{
        marginTop:10,
        height:80,
        flexDirection:'row',
    },
    yyBag:{
        flex:1
    },
    yyName:{
        height:38,
        backgroundColor:'#C5D8E6',
        borderColor:'#fff',
        borderWidth:1,
        justifyContent:'center'
    },
    yyBz:{
        height:38,
        backgroundColor:'#EDEDED',
        borderColor:'#fff',
        borderWidth:1,
        justifyContent:'center'
    },
    doc:{
        textAlign:'center',
        fontSize:theme.DefaultFontSize-2,
    },
    caiPuBox:{
        marginTop:10,
        height:100,
        flexDirection:'row',
    },
    caiPu1:{
        height:46,
        backgroundColor:'#F1F7ED',
        borderColor:'#fff',
        borderWidth:2,
        justifyContent:'center'
    },
    caiPu2:{
        height:46,
        backgroundColor:'#F9F1EF',
        borderColor:'#fff',
        borderWidth:2,
        justifyContent:'center'
    },
    caiPu3:{
        height:46,
        backgroundColor:'#F4F5E5',
        borderColor:'#fff',
        borderWidth:2,
        justifyContent:'center'
    },
    caiPu4:{
        height:46,
        backgroundColor:'#EDF4FE',
        borderColor:'#fff',
        borderWidth:2,
        justifyContent:'center'
    }
};

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(Menukinds);