import React, {PureComponent} from "react";
import { View, Text,} from "react-native";
import {Left, Right, Body,ListItem, Button} from "native-base";
import {Actions} from "react-native-router-flux";
import TreatmentProfessionList from "./TreatmentProfessionList";

const obj = [{
  type:'1',
  arr:['11','12','13','11','12','13','11','12','13','11','12','13','11','12','13','11','12','13','11','12','13','11','12','13']
}]

class TreatmentProfession extends PureComponent {
  constructor(props){
    super(props);
    this.state={
      data:obj,
    }

  }

    render() {
        return (
          <View style={{flex:1}}>
            {this._treatmentProfessionList()}
          </View>
        )
    }

    _treatmentProfessionList(){
      var item = this.state.data.map((p,i)=>{
        return (
            <TreatmentProfessionList key={i} data={p}/>
        )
      })
      return item;
    }

}

const styles = {
  divider:{
    borderColor:'#D8D8D8',
    borderTopWidth:2,
    borderBottomWidth:1,
    height:40,
    paddingTop:4,
    paddingBottom:4,
  },
  list:{
    height:36,
    paddingTop:0,
    paddingBottom:0,
    marginLeft:0,
  },
  button:{
    marginTop:-4,
    marginBottom:0,
    paddingTop:0,
    paddingBottom:0,
    flex:1,
  }

}

export default (TreatmentProfession);
