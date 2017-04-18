import React, {PureComponent} from "react";
import {View,ToastAndroid} from "react-native";
import {Text,Button} from "native-base";
import {Content,} from "../../../components/index";
import {request, urls,toast} from "../../../utils/index";
import TreatmentProfessionList from "./TreatmentProfessionList";
import TreatmentDaily from "./TreatmentDaily";
import ScrollableTabView, {DefaultTabBar} from "react-native-scrollable-tab-view";
const Btn = require('./Button');

class TabListTreatment extends PureComponent {
    constructor(props){
        super(props);
        this.state={
            flag:true,
            dailyMethodList:{},
        }
    }

    componentWillMount(){
        let {question,url} = this.props;
        request.getJson(url[0],{
            expectId:question.id
        }).then((res)=>{
            this.setState({
                dailyMethodList: res.obj
            })
        });
    }


    render() {
        let {question,module,url} = this.props;
        let {dailyMethodList} = this.state;
        if(JSON.stringify(dailyMethodList) != "{}"){
            return (
                <Content delay>
                    <ScrollableTabView
                        style={styles.tabView}
                        renderTabBar={() => (
                            <DefaultTabBar
                                underlineStyle={{width:0,backgroundColor:'#fff'}}
                                renderTab={this._renderTabBar.bind(this)}
                                style = {styles.treatmentTitle}
                            />
                        )}
                        locked={true}
                        tabBarTextStyle={{color:'#000',fontWeight:"400",}}
                    >
                        <TreatmentDaily
                            key={0}
                            dailyMethods={dailyMethodList}
                            title={question.name}
                        />
                        <TreatmentProfessionList
                            key={1}
                            question={question}
                            title={question.name}
                            url={url[1]}
                            module={module}
                        />
                    </ScrollableTabView>

                </Content>
            )
        }
        return (null);
    }

    _renderTabBar(name, page, isTabActive, onPressHandler, onLayoutHandler){
        if(page==0){
            var title = '日常疗法';
        }else{
            var title = '专业疗法';
        }
        return <Btn
            key={page}
            accessible={true}
            accessibilityLabel={name}
            accessibilityTraits='button'
            onPress={() => onPressHandler(page)}
            onLayout={onLayoutHandler}
        >
            <View style={isTabActive?styles.tabBarViewActive[page]:styles.tabBarView[page]}>
                <Text style={isTabActive?styles.tabTextActive:styles.tabText}>
                    {title}
                </Text>
            </View>
        </Btn>
    }

}

const styles = {
    container:{
        flex:1,
    },
    tabView: {
        flex:1,
    },
    treatmentTitle:{
        flexDirection:'row',
        marginTop:20,
        marginLeft:8,
        marginBottom:20,
        width:180,
        height:36,
        borderWidth:0,
    },
    titleButtonLeft:{
        paddingTop:0,
        paddingBottom:0,
        backgroundColor:'#A2A2A2',
        borderRadius:14,
        width:90,
        height:30,
        borderTopRightRadius:0,
        borderBottomRightRadius:0,
    },
    titleButtonRight:{
        paddingTop:0,
        paddingBottom:0,
        backgroundColor:'#A2A2A2',
        borderRadius:14,
        height:30,
        width:90,
        borderTopLeftRadius:0,
        borderBottomLeftRadius:0,
    },
    tabBarViewActive:[
        {
            backgroundColor:'#A2A2A2',
            padding:8,
            width:90,
            borderWidth:1,
            borderColor:'#A2A2A2',
            borderRadius:20,
            borderTopRightRadius:0,
            borderBottomRightRadius:0,
        },
        {
            backgroundColor:'#A2A2A2',
            padding:8,
            width:90,
            borderWidth:1,
            borderColor:'#A2A2A2',
            borderRadius:20,
            borderTopLeftRadius:0,
            borderBottomLeftRadius:0,
        }
    ],
    tabBarView:[
        {
            backgroundColor:'#fff',
            padding:8,
            width:90,
            borderWidth:1,
            borderColor:'#A2A2A2',
            borderRadius:20,
            borderTopRightRadius:0,
            borderBottomRightRadius:0,
        },
        {
            backgroundColor:'#fff',
            padding:8,
            width:90,
            borderWidth:1,
            borderColor:'#A2A2A2',
            borderRadius:20,
            borderTopLeftRadius:0,
            borderBottomLeftRadius:0,
        }
    ],
    tabText:{
        fontSize:14,
        textAlign:'center'
    },
    tabTextActive:{
        fontSize:14,
        textAlign:'center',
        color:'#fff'
    }
};

TabListTreatment.propTypes = {
    question: React.PropTypes.object,
    url: React.PropTypes.array,
};

TabListTreatment.defaultProps = {
    question: {id:'40'},
    url:[],
};

export default (TabListTreatment);
