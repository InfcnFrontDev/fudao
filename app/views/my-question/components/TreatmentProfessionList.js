import React, {PureComponent} from "react";
import { View, Text,ScrollView,ToastAndroid} from "react-native";
import {Left, Right, Body,ListItem, Button,List} from "native-base";
import {Actions} from "react-native-router-flux";
import {connect} from "react-redux";

class TreatmentProfessionList extends PureComponent {
  constructor(props){
    super(props);

  }

    render() {
        return (
          <ScrollView style={{height:500}}>
            {this._renderList()}
          </ScrollView>
        )
    }

    _renderList(){
      let item = this.props.questionDetail.professionalMethods.map((p, i) => {
        return (
          <View key={i} style={styles.oneType}>
            <View style={styles.divider}>
                <Text>{p.type}</Text>
            </View>
              <List dataArray={p.datas} renderRow={(data)=>{
                return (
                  <ListItem  style={styles.list}>
                    <Button transparent style={styles.button} onPress={()=>Actions['treatmentDetail']({data:data})}>
                      <View style={styles.name}>
                        <Text>{data.name}</Text>
                      </View>
                      <Text>></Text>
                    </Button>
                  </ListItem>
                )
              }} />

          </View>
        )
      })
      return item;
    }
    //



}

const styles = {
  oneType:{
    borderTopColor:'#D8D8D8',
    borderTopWidth:2,
    borderBottomColor:'transparent',
    padding:0,
  },
  divider:{
    paddingLeft:20,
    borderColor:'#D8D8D8',
    borderBottomWidth:0.5,
    height:40,
    paddingTop:10,
    paddingBottom:0,
    backgroundColor:'#F0F0F0'
  },
  list:{
    height:36,
    padding:0,
    margin:0,
    paddingLeft:20,
    flexDirection:'row',
  },
  button:{
    flex:1,
    flexDirection:'row',
  },
  name:{
    flex:1,
  }


}

const mapStateToProps = state => ({
  questionDetail:state.myQuestion.questionDetail,
});
export default connect(mapStateToProps)(TreatmentProfessionList);
