import React, {PureComponent} from "react";
import { View, Text,} from "react-native";
import {Left, Right, Body,ListItem, Button, List} from "native-base";
import {Actions} from "react-native-router-flux";
import TreatmentProfessionList from "./TreatmentProfessionList";

const obj = [{
  type:'提供成都力铭鞋业有限公司相关企业介绍及产品信息主要以2013夏季',
  arr:['想唱就唱','12','13']
}]

class TreatmentDaily extends PureComponent {
  constructor(props){
    super(props);
    this.state={
      data:obj,
    }

  }

    render() {
        return (
          <View>
            <Text style={styles.type}>        {obj[0].type}</Text>
            <List dataArray={obj[0].arr} renderRow={(data) =>
                        <ListItem style={styles.list} >
                          <Button style={styles.button} transparent onPress={()=>Actions['treatmentDailyDetail']()}>
                            <View style={styles.dotView}>
                                <Text style={styles.dot}>·</Text>
                            </View>
                            <View style={styles.dataView}>
                                <Text style={styles.data}>{data}</Text>
                            </View>
                          </Button>
                        </ListItem>
            } />
          </View>
        )
    }


}

const styles = {
  type:{

  },
  list:{
    paddingTop:0,
    paddingBottom:0,
    borderBottomWidth:0,
    marginTop:0,
    marginBottom:0,

  },
  button:{

    marginTop:-6,
    marginBottom:-15,
    paddingTop:0,
    paddingBottom:0,
    flex:1,

  },
  dot:{
    fontWeight:'900',
    fontSize:40,
    color:'#333',
  },
  dotView:{
    width:20,
    paddingBottom:2,
  },
  dataView:{
    flex:1,
  },
  data:{
    color:'#5D5D5D',
  }

}

export default (TreatmentDaily);
