import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import Swiper from 'react-native-swiper'
import {ListItem, Text, Button,} from "native-base";
import {View,Image,ToastAndroid,DeviceEventEmitter} from "react-native";
import {theme} from "../../../utils/";
import {questions} from './Data';
import QuestionList from './QuestionList'
/**
* 所有问题
*/
class QuestionAll extends PureComponent {
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

const styles = {
  types:{
    borderBottomColor:'#F0F0F0',
    borderBottomWidth:1,
  },
  title:{
    fontSize:theme.DefaultFontSize+2,
    color:'#000',
    fontWeight:'400',
    textAlign:'center',
    marginTop:16,
    marginBottom:16,
  },
};

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    closeDrawer: key => dispatch(closeDrawer()),
  };
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(QuestionAll);
