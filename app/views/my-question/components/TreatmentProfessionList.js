import React, {PureComponent} from "react";
import { View, Text,} from "react-native";
import {Left, Right, Body,ListItem, Button} from "native-base";
import {Actions} from "react-native-router-flux";

class TreatmentProfessionList extends PureComponent {
  constructor(props){
    super(props);

  }

    render() {
        return (
          <View>
            <ListItem itemDivider style={styles.divider}>
                <Text>{this.props.data.type}</Text>
            </ListItem>
            {this._renderList()}
          </View>
        )
    }

    _renderList(){
      let item = this.props.data.arr.map((p, i) => {
        return (
          <ListItem style={styles.list} key={i}>
            <Button transparent style={styles.button} onPress={()=>Actions['treatmentDetail']({pageTitle:p})}>
                <Body>
                  <Text>{p}</Text>
                </Body>
                <Right>
                  <Text>></Text>
                </Right>
            </Button>
          </ListItem>
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

export default (TreatmentProfessionList);
