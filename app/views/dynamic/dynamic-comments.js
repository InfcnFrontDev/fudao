import React, {Component} from "react";
import {connect} from "react-redux";
import {} from "native-base";
import {View,Image,Text} from "react-native";
import {openDrawer, closeDrawer} from "../../actions/drawer";
import styles from "./styles";

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
                {p.name}:
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
    openDrawer: () => dispatch(openDrawer()),
    closeDrawer: key => dispatch(closeDrawer()),
  };
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(DynamicComments);
