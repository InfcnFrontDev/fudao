import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {View,TouchableOpacity,TouchableHighlight,Alert  } from "react-native";
import {Text, Button} from "native-base";
import {Container, Content} from "../../components/index";
import {config, urls,theme,toast,request} from "../../utils/index";
/**
 * 菜谱
 */

const tabs = [
    {
        text: '芹菜',
        con:'0'
    },
    {
        text: '胡萝卜',
        con:'1'
    },
    {
        text: '西葫芦',
        con:'2'
    },
    {
        text: '白菜',
        con:'3'
    }
    ];

class Menukinds extends PureComponent {
    constructor(props) {
        super(props);
        this.state={
          activeBar:0,
         data:''
        }
    }
    componentDidMount(){
        request.getJson(urls.apis.MENU_KINDS,{
            diseaseDailyMethodId:4,
            ingredientsId:34,
            cookbook_timePeriod:'午餐',
            cookbook_type:'主食'
        }).then((result) => {
            this.setState({
                data:result.obj
            })
        }, (error) => {

        });
    }
    render() {
        let data=this.state.data;
        let caiPu=data.cookbook;
        if(data==''){
            return(<Container></Container>)
        }else{
            return (
                <Container>
                    <Content>
                        <View style={styles.bar}>
                            {tabs.map((item, index) => this.renderTab(item, index))}
                        </View>
                        <View style={styles.imgBox}>
                            {this.renderImg(this.state.activeBar)}
                        </View>
                        <View style={styles.textBox}>
                            <Text>{data.ingredients['abstract_']}</Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'center',marginTop:10}}>
                            <Text>{data.ingredients.name}</Text>
                            <Text>的营养价值表</Text>
                        </View>
                        <View style={styles.yyBox}>
                            <View style={styles.yyBag}>
                                <View style={styles.yyName}>
                                    <Text style={styles.doc}>碳水化合物</Text>
                                </View>
                                <View style={styles.yyName}>
                                    <Text style={styles.doc}>胆固醇(毫克)</Text>
                                </View>
                                <View style={styles.yyName}>
                                    <Text style={styles.doc}>膳食纤维(克)</Text>
                                </View>
                                <View style={styles.yyName}>
                                    <Text style={styles.doc}>能量(千卡)</Text>
                                </View>
                                <View style={styles.yyName}>
                                    <Text style={styles.doc}>脂肪(克)</Text>
                                </View>
                            </View>
                            <View style={styles.yyBag}>
                                <View style={styles.yyBz}>
                                    <Text style={styles.doc}>{data.ingredients.carbohydrate}</Text>
                                </View>
                                <View style={styles.yyBz}>
                                    <Text style={styles.doc}>{data.ingredients.cholesterol}</Text>
                                </View>
                                <View style={styles.yyBz}>
                                    <Text style={styles.doc}>{data.ingredients.dietaryFiber}</Text>
                                </View>
                                <View style={styles.yyBz}>
                                    <Text style={styles.doc}>{data.ingredients.energy}</Text>
                                </View>
                                <View style={styles.yyBz}>
                                    <Text style={styles.doc}>{data.ingredients.fat}</Text>
                                </View>
                            </View>
                        </View>
                        <Text style={{textAlign:'center',marginTop:10}}>推荐菜谱</Text>
                        <View style={styles.caiPuBox}>
                            {caiPu.map((item, index) => this.renderCaiPu(item, index))}
                        </View>
                    </Content>
                </Container>
            );
        }

    }

    renderTab(item, index) {
        let itemStyle = styles.button;
        if (this.state.activeBar === index) {
            itemStyle = Object.assign({}, styles.button, styles.buttonSelected);
        }

        return (
            <Button
                key={index}
                transparent
                onPress={() => this._goToPage(index)}
                style={itemStyle}
            >
                <Text style={styles.textBar}>{item.text}</Text>
            </Button  >
        )
    }
    renderCaiPu(item, index) {
        return (
            <View  key={index} style={styles["menu"+index]}>
                <Text style={styles.doc}>{item.name}</Text>
            </View>
        )
    }
    renderImg(index) {
        let con = tabs[index].con;
        return (
                <Text  key={index} style={styles.textBar}>{con}</Text>
        )
    }

    _goToPage(index) {
        this.setState({
            activeBar:index,
        })
    }


}

const styles = {
    textBar:{
       color:'#333',
        fontSize:16,
        textAlign:'center'
    },
    bar:{
        height:40,
        flexDirection:'row',
        backgroundColor:'#EDEDED'

    },
    imgBox:{
        height:200,
        backgroundColor:'#fff'
    },
    button:{
        flex:1,
        justifyContent:'center'
    },
    buttonSelected:{
        backgroundColor:"#fff",
    },
    yyBox:{
        marginTop:10,
        height:80,
    },
    yyBag:{
        flex:1,
       flexDirection:'row',
    },
    yyName:{
        height:40,
        flex:1,
        backgroundColor:'#C5D8E6',
        borderColor:'#fff',
        borderWidth:1,
        justifyContent:'center'
    },
    yyBz:{
        height:40,
        flex:1,
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
        flexWrap:'wrap',
    },
    menu0:{
        height:46,
        backgroundColor:'#F1F7ED',
        borderColor:'#fff',
        borderWidth:2,
        justifyContent:'center',
        width:'50%'
    },
    menu1:{
        height:46,
        backgroundColor:'#F9F1EF',
        borderColor:'#fff',
        borderWidth:2,
        justifyContent:'center',
        width:'50%'
    },
    menu2:{
        height:46,
        backgroundColor:'#F4F5E5',
        borderColor:'#fff',
        borderWidth:2,
        justifyContent:'center',
        width:'50%'
    },
    menu3:{
        height:46,
        backgroundColor:'#EDF4FE',
        borderColor:'#fff',
        borderWidth:2,
        justifyContent:'center',
        width:'50%'
    }
};

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(Menukinds);