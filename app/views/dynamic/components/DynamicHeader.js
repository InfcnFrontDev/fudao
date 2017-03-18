import React, {Component} from "react";
import {connect} from "react-redux";
import {Text} from "native-base";
import {View,Image,ToastAndroid} from "react-native";
import {urls} from "../../../utils/index";
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
            <Text style={styles.color9b}>{this.props.user.title}</Text>
          </View>
          <View style={styles.touxiangView}>
            <Image source={{uri: urls.getImage(this.props.user.img)}} style={styles.touxiang}/>
          </View>
     </View>
    )
  }
}

const mapStateToProps = state => ({
  user:state.user.loginUser,
});
export default connect(mapStateToProps)(DynamicHeader);
