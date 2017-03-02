import React, {PureComponent} from "react";
import {ScrollView, ListView, View, Dimensions} from "react-native";
import {Left, Right, Body, Form, Item, Text, Segment,Button} from "native-base";
import TreatmentProfession from "./TreatmentProfession";


class TabListTreatment extends PureComponent {
  constructor(props){
    super(props);
    this.state={
      flag:false
    }
  }

    render() {
        return (
          <View>
            <View style={styles.treatmentTitle}>
                <Button transparent onPress={()=>{this.setState({flag:true})}}
                  style={this.state.flag?styles.titleButtonLeft:styles.titleButtonAll}>
                    <Text style={styles.titleText}>日常疗法</Text>
                </Button>
                <Button transparent onPress={()=>{this.setState({flag:false})}}
                  style={this.state.flag?styles.titleButtonAll:styles.titleButtonRight}>
                    <Text style={styles.titleText}>专业疗法</Text>
                </Button>
            </View>
            {this.state.flag?null:<TreatmentProfession />}
          </View>
        )
    }

}

const styles = {
  treatmentTitle:{
    flexDirection:'row',
    marginTop:20,
    marginLeft:8,
    marginBottom:20,
    borderRadius:15,
    borderWidth:1,
    width:180,
    borderColor:'#A2A2A2',
    overflow:'hidden',
  },
  titleText:{
    color:'#333',
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
  titleButtonAll:{
    height:30,
  }
}

export default (TabListTreatment);
