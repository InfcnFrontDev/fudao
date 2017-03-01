import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import Swiper from 'react-native-swiper'
import {ListItem, Text, Button,} from "native-base";
import {View,Image,ToastAndroid,DeviceEventEmitter} from "react-native";
import styles from "./styles";
import {questions} from './question-data';
import QuestionList from './question-list'
/**
* 动态
*/
class QuestionMyself extends PureComponent {
  constructor(props) {
    super(props);
    this.problem = questions[0].alltypes;

  }

  render(){
    return (
      <View>
          {this.renderQuestions()}
      </View>
    )
  }

  renderQuestions(){
    let item = this.problem.map((p, i) => {
      return (
        <View key={i} style={styles.types}>
            <Text style={styles.title}>{p.type}</Text>
            <QuestionList data={p.question}/>
        </View>
      )
    })
    return item;
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
