import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {ListItem, Text, Button,} from "native-base";
import {View,Image,ToastAndroid,DeviceEventEmitter,TouchableHighlight} from "react-native";
/**
* 问题列表
*/
class QuestionAndExceptList extends PureComponent {
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
        <Button transparent key={i} style={styles.oneQuestion} onPress={()=>Actions[this.props.type]({question_title:p.title})}>
          <Image source={p.icon} style={styles.img}/>
          <Text style={styles.oneTitle}>{p.title}</Text>
          <TouchableHighlight  onPress={this.choose.bind(this)} underlayColor='#fafafa'>
            <Image source={require('../assets/arrows_square_plus.png')} style={styles.choose}/>
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

  // gotoDetail(p){
  //   Actions[this.props.type]({question_title:p.title});
  //
  // }

  choose(){
    ToastAndroid.show("aaa",ToastAndroid.SHORT);
  }

}

const styles = {
  contentList:{
    borderBottomWidth:0,
    paddingRight:0,
    paddingTop:0,
    paddingBottom:0,
    marginLeft:6,
    marginRight:6,

  },
  oneQuestion:{
    marginBottom:0,
    marginTop:0,
    marginRight:6,
    marginLeft:6,
    paddingLeft:6,
    paddingRight:6,
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    backgroundColor:'#F1F7EE',
    marginBottom:16,
  },
  oneTitle:{
    color:'#000',
    flex:1,
  },
  img:{
    width:36,
    height:36,
    marginRight:8,
  },
  choose:{
    width:20,
    height:20,
    justifyContent:'flex-end',
  }
};

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    closeDrawer: key => dispatch(closeDrawer()),
  };
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(QuestionAndExceptList);
