import React, {Component} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";

import {View,TouchableHighlight,Image} from "react-native";
import {openDrawer, closeDrawer} from "../../actions/drawer";
import styles from "./styles";

/**
* 动态
*/
class DynamicImage extends Component {
  constructor(props) {
    super(props);
  }



  render(){
    // ToastAndroid.show(JSON.stringify(this.props.rowID), ToastAndroid.SHORT);
    if(this.props.urls) {
      var arr_pic = this.props.urls.split(',');
      let pic = arr_pic.map((p, i) => {
        return (
          <TouchableHighlight key={i} onPress={()=> Actions['picture']({image:this.props.urls,i:i})} style={styles.imageTouch}>
          <Image source={{uri: 'http://192.168.10.58:9095/api/BaseApi/getImage?id='+p+'&w=600&h=600'}} style={styles.msgImage}  resizeMode= 'stretch' />
          </TouchableHighlight>
        )
      })
      return (
        <View style={styles.allImage}>
        {pic}
        </View>
      )
    }
    return ( null );

  }


}
function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    closeDrawer: key => dispatch(closeDrawer()),
  };
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(DynamicImage);
