import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {ListItem, Text, Button,} from "native-base";
import {View,Image,ToastAndroid,DeviceEventEmitter} from "react-native";
import styles from "./styles";

/**
* 动态
*/
class QuestionList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render(){
    let item = this.props.data.map((p, i) => {
      if(i%2==0){
        var item_zu =  this._list2(i);
      }else{
        var item_zu = (null);
      }
      return (
        <View key={i}>
            {item_zu}
        </View>
      )
    })
    return (
      <View>
      {item}
      </View>
    )
  }

  _list2(i){
    var new_list = this.props.data.slice(i,i+2);
    var click = new_list.map((p,i)=>{
      return(
        <Button transparent key={i} style={styles.oneQuestion} onPress={this.solve.bind(this,p)}>
          <Image source={p.icon} style={styles.img}/>
          <Text style={styles.oneTitle}>{p.title}</Text>
          <Image source={p.icon} style={styles.choose}/>
        </Button>
      )
    })
    return (
      <ListItem style={styles.contentList}>
        {click}
      </ListItem>
    )
  }

  solve(p){
    // DeviceEventEmitter.emit('change',p);
    // ToastAndroid.show(JSON.stringify(p),ToastAndroid.SHORT);
    // Actions['myEmotionSolve']();
  }

}
function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    closeDrawer: key => dispatch(closeDrawer()),
  };
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(QuestionList);
