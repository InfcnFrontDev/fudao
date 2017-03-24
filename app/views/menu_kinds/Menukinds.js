import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {View,TouchableOpacity,TouchableHighlight,Alert,Image ,Modal,Dimensions } from "react-native";
import {Text, Button} from "native-base";
import {Container, Content,Header} from "../../components/index";
import {config, urls,theme,toast,request} from "../../utils/index";
/**
 * 菜谱
 */

var width=Dimensions.get('window').width;
var height=Dimensions.get('window').height;
class Menukinds extends PureComponent {
    constructor(props) {
        super(props);
        this.state={
          activeBar:0,
          obj:this.props.data,
          arr:this.props.arr,
          isShow:false,
        }
    }
    componentWillMount(){
        let obj=this.state.obj;
        let arr=this.props.arr;
        var nowId=obj.ingredientsId;
        for(var i=0;i<arr.length;i++){
            if(arr[i].id==nowId){
                this.setState({
                    activeBar:i
                })
            }
        }
        request.getJson(urls.apis.MENU_KINDS,obj).then((result) => {
            this.setState({
                data:result.obj,
                item:result.obj.cookbook[0]
            })
        }, (error) => {

        });
    }
    render() {

        let data=this.state.data;
        let tab =this.state.arr;


        if(!data){
            return(<Container></Container>)
        }else{
            let caiPu=data.cookbook;
            let cai=(null);
            let mb=(null);
            let item=this.state.item;
            if(caiPu.length!=0){
                cai=(
                    <View>
                        <Text style={{textAlign:'center',marginTop:10}}>推荐菜谱</Text>
                        <View style={styles.caiPuBox}>
                            {caiPu.map((item, index) => this.renderCaiPu(item, index))}
                        </View>
                    </View>
                    )
                mb=(
                    <Modal
                        transparent={true}
                        visible={this.state.isShow}
                        onRequestClose={this.hide(false)}
                    >
                        <View style={styles.mb1}>
                            <View style={styles.box1}>
                                <View style={styles.imgBox}>
                                    <Image source={{uri: urls.getImage(item.img)}} style={styles.img}></Image>
                                </View>
                                <View>
                                    <View style={styles.cpBar}>
                                        <Text>主料</Text>
                                    </View>
                                    <View style={styles.cp}>
                                        <Text>{item.ingredients}</Text>
                                    </View>

                                </View>
                                <View>
                                    <View style={styles.cpBar}>
                                        <Text>辅料</Text>
                                    </View>
                                    <View style={styles.cp}>
                                        <Text>{item.ingredients}</Text>
                                    </View>
                                </View>
                                <View>
                                    <View  style={styles.cpBar}>
                                        <Text>操作方法</Text>
                                    </View>
                                    <View style={styles.cp}>
                                        <Text>{item.ingredients}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </Modal>
                )

            }

            return (
                <Container>
                    <Header back {...this.props}></Header>
                    <Content>
                        <View style={styles.bar}>
                            {tab.map((item, index) => this.renderTab(item, index))}
                        </View>
                        <View style={styles.imgBox}>
                            <Image source={{uri: urls.getImage(data.ingredients.img)}} style={styles.img}></Image>
                        </View>
                        <View style={styles.textBox}>
                            <Text>        {data.ingredients['abstract_']}</Text>
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
                        {cai}
                        {mb}
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
                onPress={() => this._goToPage(item,index)}
                style={itemStyle}
            >
                <Text style={styles.textBar}>{item.name}</Text>
            </Button  >
        )
    }
    renderCaiPu(item, index) {
        return (

                <View key={index} style={styles["menu"+index]}>
                    <TouchableOpacity
                            onPress={() => this.show(item,index)}
                    >
                        <Text style={styles.doc}>{item.name}</Text>
                    </TouchableOpacity>
                </View>

        )
    }
    _goToPage(item,index) {
        let obj=this.state.obj;
        this.setState({
            activeBar:index,
        });

        obj['ingredientsId']=item.id;

        /*toast.show(JSON.stringify(obj))*/
        request.getJson(urls.apis.MENU_KINDS,obj).then((result) => {
            this.setState({
                data:result.obj
            })
        }, (error) => {

        });
    }
    hide(i){
        this.setState({
            isShow:i,
        })
    }
    show(item,index){
toast.show(JSON.stringify(item))
        this.setState({
            isShow:true,
            item:item,
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
        height:42,
        flexDirection:'row',
        backgroundColor:'#EDEDED'

    },
    imgBox:{
        height:200,
        backgroundColor:'#fff',
        justifyContent: 'center',
    },
    img:{
        width: 300,
        height: 200,
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
    },
    mb1:{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    },
    box1:{
        width:width*0.9,
        height:height*0.9,
        backgroundColor:'#fff',
        borderRadius:5
    },
    cpBar:{
        height:30,
        borerWidth:1,
        borderColor:'#666',
        backGroundColor:'#F0F0F0'
    },
    cp:{
        height:30,
        borerWidth:1,
        borderColor:'#666',
        backGroundColor:'#F0F0F0'
    }
};

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(Menukinds);