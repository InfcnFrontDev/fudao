import React, {PureComponent} from "react";
import {View,ToastAndroid} from "react-native";
import {Text,Button} from "native-base";
import {Content,} from "../../../components/index";
import {request, urls,toast} from "../../../utils/index";
import TreatmentProfessionList from "./TreatmentProfessionList";
import TreatmentDaily from "./TreatmentDaily";
import ScrollableTabView, {DefaultTabBar} from "react-native-scrollable-tab-view";
import groupBy from 'lodash/groupBy'
const Btn = require('./Button');

let daily={
    "ok":true,
    "obj": [
        {
            "type": "饮食",
            "suitable": "寒凉性的食物/豆类及豆制品/含微量元素的食物",
            "fasting": "辛辣刺激性食物/温热性食物/油炸类食物",
            "methods": [
                {
                    "timePeriod": "早餐",
                    "suitable": ["牛奶", "薏米"]
                },
                {
                    "timePeriod": "午餐",
                    "suitable": ["牛肺", "菜花", "白豆蔻", "粳米", "小麦"],
                    "fasting": ["狗肉", "鸭血"]
                },
                {
                    "timePeriod": "下午茶",
                    "suitable": ["香梨", "猕猴桃"]
                },
                {
                    "timePeriod": "晚餐",
                    "suitable": ["牛肺", "菜花", "白豆蔻", "粳米", "小麦"],
                    "fasting": ["狗肉", "鸭血"]
                }
            ]
        },
        {
            "type": "起居",
            "principle": "保证充足高质量的睡眠，可以减少热量摄入和脂肪囤积。",
            "methods": [
                {
                    "id": "36",
                    "name": "睡前不要吃东西",
                    "timePeriod": "睡前"
                }
            ]
        },
        {
            "type": "动",
            "principle": "保证充足高质量的睡眠，可以减少热量摄入和脂肪囤积。",
            "methods": [
                {
                    "id": "36",
                    "name": "睡前不要吃东西",
                    "timePeriod": "睡前"
                }
            ]
        },
        {
            "type": "静",
            "principle": "保证充足高质量的睡眠，可以减少热量摄入和脂肪囤积。",
            "methods": [
                {
                    "id": "36",
                    "name": "睡前不要吃东西",
                    "timePeriod": "睡前"
                }
            ]
        },
        {
            "type": "娱乐",
            "principle": "保证充足高质量的睡眠，可以减少热量摄入和脂肪囤积。",
            "methods": [
                {
                    "id": "36",
                    "name": "睡前不要吃东西",
                    "timePeriod": "睡前"
                }
            ]
        },
    ]
}
let profession = {
    "ok": true,
    "obj":[
        {
            "id": "101",
            "name": "拔罐疗法",
            "type": "拔罐"
        },
        {
            id: "25",
            name: "金丝黄瓜汤",
            type: "食疗"
        },
        {
            id: "26",
            name: "冬瓜笋丝海带汤",
            type: "食疗"
        },
        {
            id: "27",
            name: "银菊平身茶",
            type: "食疗"
        },
        {
            id: "6",
            name: "腹部按摩",
            type: "按摩"
        },
        {
            details: "患者仰卧位，术者循肺、胃、脾、肾经走行，进行推拿，按揉中府、云门、提胃、升胃、腹结、府舍、中脘、气海、关元等穴，然后患者换俯卧位，推拿膀胱经，按揉脾俞、胃俞、肾俞等穴。隔天推拿治疗1次，每天30min，隔日1次，15次为1个疗程。",
            id: "7",
            name: "循经点穴推拿",
            renqunId: "aged",
            type: "按摩"
        }
    ]
}

class TabListTreatment extends PureComponent {
    constructor(props){
      super(props);
      this.state={
        flag:true,
        dailyMethodList:{},
        professionalMethodList:{}
      }
    }

    componentWillMount(){
      let {question,url} = this.props;
      // if()
      request.getJson(url[0],{
        diseaseId:question.id
      }).then((res)=>{
        res = daily;
        this.setState({
          dailyMethodList: res.obj
       })
     })
      request.getJson(url[1],{
        diseaseId:question.id
      }).then((res)=>{
          res = profession;
          let professionalMethodList = groupBy(res.obj, item => {
              return item.type
          })
          this.setState({
           professionalMethodList:professionalMethodList
       })
     })
    }


    render() {
      let {question} = this.props;
      let {dailyMethodList,professionalMethodList} = this.state;
      if(JSON.stringify(dailyMethodList) != "{}"&&JSON.stringify(professionalMethodList) != "{}"){
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
                    professionalMethods={professionalMethodList}
                    title={question.name}
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
}

TabListTreatment.propTypes = {
  question: React.PropTypes.object,
  url: React.PropTypes.array,
}

TabListTreatment.defaultProps = {
  question: {id:'40'},
  url:[]
}

export default (TabListTreatment);
