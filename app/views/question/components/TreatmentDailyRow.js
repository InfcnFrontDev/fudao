import React, {PureComponent} from "react";
import { View,ToastAndroid} from "react-native";
import {ListItem, Button, List, Text} from "native-base";
import {Actions} from "react-native-router-flux";
import {urls} from "../../../utils/index";

class TreatmentDailyRow extends PureComponent {
  constructor(props){
    super(props);

  }

    render() {
      let {rowData,title} =this.props;
      if(rowData.type_value=='饮食'){
        let diseaseDailyMethod = rowData.datas.diseaseDailyMethod || rowData.datas.dailyMethod;
        var principle= '宜食'+diseaseDailyMethod.yiShi+'， 忌食'+diseaseDailyMethod.jinShi;
        var list = (
          <List dataArray={rowData.datas.timePeriod} renderRow={(data) =>{
            var jishi=(null);
            if(data['禁食']){
              jishi = (
                <View style={styles.oneType}>
                  <View  style={styles.title_yishi}>
                      <Text  style={styles.listData}>忌食</Text>
                  </View>

                  {this.caipu(data['禁食'],false,data.timePeriod,data.timePeriod)}
                </View>
              )
            }
            return (
              <ListItem style={styles.list} >
              <View style={styles.yinshi1}>
                <View>
                    <Text style={styles.gan}>-    {data.timePeriod}:</Text>
                </View>
                <View>
                    <View  style={styles.oneType}>
                        <View  style={styles.title_yishi}>
                            <Text style={styles.listData}>宜食</Text>
                        </View>
                        {this.caipu(data['宜食'],true,data.timePeriod,data.timePeriod)}
                    </View>
                    {jishi}
                </View>
              </View>
              </ListItem>
            )
          }
        } />
        )
      }else{
        var list = (
          <List dataArray={rowData.datas.datas} renderRow={(data) =>{
            let diseaseDailyMethods = data.diseaseDailyMethods || data.dailyMethods ;
            return (
              <ListItem style={styles.list} >
                <Button style={styles.button} transparent onPress={()=>Actions['treatmentDetail']({data:diseaseDailyMethods[0],from:'日常',title:title})}>
                      <Text style={styles.gan}>-    {data.timePeriod}:</Text>
                      <Text  style={styles.listData}>{diseaseDailyMethods[0].name}</Text>
                </Button>
              </ListItem>
            )
          }
          } />
        )
      }
        return (
          <View style={styles.container}>
            <View style={styles.sectionOne}>
                <Text style={styles.dot}>·</Text>
                <Text style={styles.data}>{rowData.type_value}</Text>
            </View>
            <Text style={styles.type}>        {rowData.type_value=='饮食'?principle:rowData.datas.principle}</Text>
            {list}
          </View>
        )
    }

    caipu(data,flag,type,cookbook_timePeriod){
      var {dispatch,rowData} = this.props;
      let diseaseDailyMethod = rowData.datas.diseaseDailyMethod || rowData.datas.dailyMethod;
      var shi=(null)
      if(flag&&(type=='午餐'||type=='晚餐')){
        var caipin = data['菜品']
        for(var i=0;i<caipin.length;i++){
          caipin[i].cookbook_type = '菜品';

        }
        var zhushi = data['主食']
        for(var i=0;i<zhushi.length;i++){
          zhushi[i].cookbook_type = '主食';
        }
        var arr = caipin.concat(zhushi);
      }else{
        var arr =data;
      }

      shi = arr.map((p,i)=>{
        var obj = {
          diseaseDailyMethodId:diseaseDailyMethod.id,
          ingredientsId:p.id,
          cookbook_timePeriod:cookbook_timePeriod,
          cookbook_type:p.cookbook_type||''
        }
        return(
          <Button key={i} transparent  style={styles.shiwubtn} onPress={()=>flag?Actions['menuKinds']({data:obj,arr:arr,url:urls.apis.QUESTION_MENU_KINDS}):false}>
          <Text style={flag?styles.shiwutext:styles.color6d}>{p.name}{i!=arr.length-1?'、':''}</Text>
          </Button>
        )
      })

      return (
        <View  style={styles.yishi}>
        {shi}
        </View>
      )
    }

}

const styles = {
  container:{
    paddingLeft:15,
    paddingRight:15,
    marginBottom:10,
  },
  sectionOne:{
    flexDirection:'row',
  },
  dot:{
    fontWeight:'900',
    fontSize:40,
    color:'#333',
    lineHeight:23,
    paddingRight:10,
  },
  type:{
    paddingLeft:20,
    paddingRight:20,
    color:'#6D6D6D',
    fontSize:14,
  },
  list:{
    borderBottomColor:'transparent',
    padding:0,
  },
  button:{
    marginTop:-6,
    marginBottom:-15,
    padding:0,
  },
  gan:{
    paddingRight:8,
    color:'#949494',
  },
  data:{
    color:'#353535'
  },
  listData:{
    color:'#949494',
  },
  yinshi1:{
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent:'flex-start',

  },
  yishi:{
    flexDirection:'row',
    marginLeft:10,
    marginRight:180,
    paddingRight:20,
    flexWrap:'wrap',
  },
  oneType:{
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent:'flex-start',
  },
  shiwubtn:{
    margin:0,
    padding:0,
    height:25,
    marginTop:-1,
  },
  shiwutext:{
    color:'#0562B2',
  },
  color6d:{
    color:'#6D6D6D',
  },
}

TreatmentDailyRow.propTypes = {
  rowData: React.PropTypes.object,
  title:  React.PropTypes.string,
}

TreatmentDailyRow.defaultProps = {
  rowData: {},
  title:'',
}

export default (TreatmentDailyRow);
