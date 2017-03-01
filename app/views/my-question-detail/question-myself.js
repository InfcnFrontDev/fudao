import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import Swiper from 'react-native-swiper'
import {ListItem, Text, Button,} from "native-base";
import {View,Image,ToastAndroid,DeviceEventEmitter} from "react-native";
import styles from "./styles";

/**
* 动态
*/
class QuestionMyself extends PureComponent {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <View style={styles.myQuestion}>
          <Text style={styles.title}>我的问题</Text>
          <Swiper
          height={160}
          loop={false}
          dot={<View style={{width:5,height:5,backgroundColor:'gray',borderRadius:4,marginLeft:3,marginRight:3}}></View>}
          activeDot={<View style={{width:5,height:5,backgroundColor:'#A1CC00',borderRadius:4,marginLeft:3,marginRight:3}}></View>}
          >
            {this.renderPage()}
          </Swiper>
      </View>
    )
  }



  renderPage(){
    var pages = [];
      for(var i=0;i<2;i++){
          pages.push(
              <View key={i}>
              <Text>ddd</Text>
              </View>
          );
      }
      return pages;
  }

}
function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    closeDrawer: key => dispatch(closeDrawer()),
  };
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(QuestionMyself);
