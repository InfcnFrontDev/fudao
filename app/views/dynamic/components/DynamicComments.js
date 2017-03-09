import React, {Component} from "react";
import {connect} from "react-redux";
import {Text} from "native-base";
import {View,Image,ToastAndroid} from "react-native";
import styles from "../styles";

/**
* 动态
*/
class DynamicComments extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    if(this.props.comments) {
        let comment = this.props.comments.map((p, i) => {
          return (
            <View key={i} style={styles.oneComment}>
              <Text style={styles.commentName}>
                {p.nick}:
              </Text>
              <Text style={styles.commentContent}>
                {p.content}
              </Text>
            </View>
          )
        })
        return (
            <View style={styles.allComments}>
            {comment}
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
export default connect(mapStateToProps, bindAction)(DynamicComments);
