import React, {Component} from "react";
import {connect} from "react-redux";
import {Text} from "native-base";
import {View,Image} from "react-native";
import styles from "../styles";

/**
* 动态
*/
class DynamicSupports extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    if(this.props.zan.length>=1) {
        let supports = this.props.zan.map((p, i) => {
          if(i==0){
            return (
              <View key={i} style={{flexDirection:'row'}}>
                <Image source={require('../../../assets/xin.png')} style={styles.xin} />
                <Text style={styles.commentName}>
                {p.username}
                </Text>
              </View>
            )
          }else{
            return (
              <Text key={i} style={styles.commentName}>
              ,  {p.username}
              </Text>
            )
          }
        })
        return (
          <View style={styles.allSupports}>
          {supports}
          </View>
        )
    }
    return (null);
  }
}
function bindAction(dispatch) {
  return {
  };
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(DynamicSupports);
