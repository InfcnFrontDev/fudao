import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {ListItem, Text, Button,} from "native-base";
import {View,Image,ToastAndroid,DeviceEventEmitter} from "react-native";
import {good,calm,bad} from './Data';
import {theme} from "../../utils/";

/**
* 情绪列表
*/
class ItemEmotion extends PureComponent {
  constructor(props) {
    super(props);
    if(this.props.type == 'good'){
      this.list = good;
    }else if(this.props.type == 'calm'){
      this.list = calm;
    }else{
      this.list = bad;
    }
  }

  render(){
    let item = this.list.map((p, i) => {
      if(i%4==0){
        var item_zu =  this._list4(i);
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

  _list4(i){
    var new_list = this.list.slice(i,i+4);
    var click = new_list.map((p,i)=>{
      return(
        <Button transparent key={i} style={styles.oneEmotion} onPress={this.solve.bind(this,p)}>
          <Image source ={p.img} style={styles.oneEmotionImg}/>
          <Text style={styles.oneEmotionTitle}>{p.title}</Text>
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
    DeviceEventEmitter.emit('change',p);
    ToastAndroid.show(JSON.stringify(p),ToastAndroid.SHORT);
    Actions['myEmotionSolve']();
  }

}


const styles = {
  contentList:{
    borderColor:'#fff',
    paddingTop:0,
    paddingBottom:0,

  },
  oneEmotion:{
    marginBottom:0,
    marginTop:0,
    marginRight:0,
    marginLeft:0,
    flex:1,
    flexDirection:'column',
    alignItems:'flex-start',
    height:80,
  },
  oneEmotionImg:{
    width:50,
    height:50,
  },
  oneEmotionTitle:{
    color:'#9b9b9b',
    textAlign:'center',
    marginLeft:13,
  },
};

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    closeDrawer: key => dispatch(closeDrawer()),
  };
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(ItemEmotion);
