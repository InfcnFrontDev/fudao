import React, {Component} from "react";
import {connect} from "react-redux";
import {Text} from "native-base";
import {View,Image} from "react-native";
import {openDrawer, closeDrawer} from "../../actions/drawer";
import styles from "./styles";

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
            <Image  source={require('../../assets/dy2.jpg')} style={styles.bgImg}/>
          </View>
          <View style={styles.person}>
            <Text>福大爷</Text>
          </View>
          <Image  source={require('../../assets/photo.jpg')} style={styles.touxiang}/>
     </View>
    )
  }


}
function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    closeDrawer: key => dispatch(closeDrawer()),
  };
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(DynamicHeader);
