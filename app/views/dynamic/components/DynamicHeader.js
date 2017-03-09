import React, {Component} from "react";
import {connect} from "react-redux";
import {Text} from "native-base";
import {View,Image} from "react-native";
import styles from "../assets/styles";

/**
* 动态
*/
class DynamicHeader extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <View>
          <View style={styles.content1}>
            <Image  source={require('../../../assets/dy2.jpg')} style={styles.bgImg}/>
          </View>
          <View style={styles.person}>
            <Text style={styles.color9b}>福大爷</Text>
          </View>
          <Image source={require('../../../assets/my-photos/photo.jpg')} style={styles.touxiang}/>
     </View>
    )
  }


}
function bindAction(dispatch) {
  return {
  };
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(DynamicHeader);
