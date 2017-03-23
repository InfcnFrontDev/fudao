import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Container, Header, Title, Content, Left, Icon, Body, Right,Text,Button} from "native-base";
import {View, Image,Modal,Dimensions,} from "react-native";
import {Actions} from "react-native-router-flux";
import QuestionMyself from "./components/QuestionMyself";
import QuestionTab from "./components/QuestionTab";
import {getQuestionTreetment} from '../../actions/my-question.js';
import {config, urls,theme,toast,request} from "../../utils/index";

var width=Dimensions.get('window').width;
var height=Dimensions.get('window').height;
/**
 * 我的问题
 */
class MyQuestionDetail extends PureComponent {
    constructor(props) {
        super(props);
        this.state={
            isShow:true,
        }
    }

    componentWillMount(){
      const {dispatch} = this.props;
      // dispatch(getQuestionTreetment('40',this.props.renqun))
      dispatch(getQuestionTreetment(this.props.question.id,this.props.renqun))
    }

    render() {

        return (
            <Container style={styles.container}>
              <Header>
                  <Left>
                      <Button transparent onPress={()=>Actions.pop()}>
                          <Icon name='arrow-back' />
                      </Button>
                  </Left>
                  <Body>
                      <Title style={styles.title}>{this.props.question.showVal}</Title>
                  </Body>
                  <Right>
                  </Right>
              </Header>
              <View style={styles.content}>
                <QuestionMyself />
                <QuestionTab  question={this.props.question}/>
              </View>
                <Modal
                    transparent={true}
                    visible={true}
                    onRequestClose={() => this.hide()}
                >
                    <View style={styles.mb}>
                        <View style={styles.box}>
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
                            <Text style={{textAlign:'center',marginTop:10}}>推荐菜谱</Text>
                            <View style={styles.caiPuBox}>
                                {caiPu.map((item, index) => this.renderCaiPu(item, index))}
                            </View>
                        </View>
                    </View>


                </Modal>
            </Container>
        )
    }
    show() {
        this.setState({
            isShow: true,
        })
    }

    hide() {
        this.setState({
            isShow: false,
        })
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
            <View  key={index} style={styles["menu"+index]}>
                <Text style={styles.doc}>{item.name}</Text>
            </View>
        )
    }
    renderImg(item,index) {
        let con = tabs[index].con;
        return (
            <Text  key={index} style={styles.textBar}>{con}</Text>
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
}

const styles = {
  container:{
  },
  content:{
    backgroundColor:'#fff',
    flexDirection:'column',
    flex:1,
  },
    mb:{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    },
    box:{
        width:width*0.9,
        height:height*0.9,
        backgroundColor:'#fff',
        borderRadius:5
    },
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
    }
};

const mapStateToProps = state => ({   
    renqun:state.user.loginUser.renqun,
    my_question:state.myQuestion.my_question,
});
export default connect(mapStateToProps)(MyQuestionDetail);
