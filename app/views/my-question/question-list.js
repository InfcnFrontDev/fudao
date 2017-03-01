import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {ListItem, Text, Button,} from "native-base";
import {View,Image,ToastAndroid,DeviceEventEmitter,TouchableHighlight} from "react-native";
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
        <Button transparent key={i} style={styles.oneQuestion} onPress={this.gotoDetail.bind(this,p)}>
          <Image source={p.icon} style={styles.img}/>
          <Text style={styles.oneTitle}>{p.title}</Text>
          <TouchableHighlight  onPress={this.choose.bind(this)} underlayColor='#fafafa'>
            <Image source={require('../../assets/arrows_square_plus.png')} style={styles.choose}/>
          </TouchableHighlight>
        </Button>
      )
    })
    return (
      <ListItem style={styles.contentList}>
        {click}
      </ListItem>
    )
  }

  gotoDetail(p){
    Actions['myQuestionDetail']({question_title:p.title});

  }

  choose(){
    ToastAndroid.show("aaa",ToastAndroid.SHORT);
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
