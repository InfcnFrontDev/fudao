import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import Swiper from 'react-native-swiper'
import {ListItem, Text, Button,List} from "native-base";
import {View,Image,ToastAndroid,DeviceEventEmitter} from "react-native";
import {theme} from "../../../utils/";
import {questions} from './Data';
import QuestionList from './QuestionList'
import GiftedListView from '../../../components/GiftedListView'
import {getAllQuestions} from '../../../actions/my-question.js'

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
        <GiftedListView
          enableEmptySections={true}
          rowView={this.renderRowView.bind(this)}
          onFetch={this.onFetch.bind(this)}
          refreshable={false}
          firstLoader={true}
          withSections={false}
          paginationAllLoadedView={this.renderPaginationAllLoadedView}
        />
      </View>
    )
  }
  onFetch(page = 1, callback, options) {
    const {dispatch} = this.props;
    ToastAndroid.show(JSON.stringify(this.props.renqun),ToastAndroid.SHORT);
    dispatch(getAllQuestions(callback,this.props.my_question,this.props.allQuestions,this.props.renqun))
	}

	renderRowView(row,sectionid,rowid) {
		return (
      <View style={styles.types}>
             <Text style={styles.title}>{row.name}</Text>
              <QuestionList data={row.diseases} id={rowid} type='myQuestionDetail' />
      </View>
		)
	}

  renderPaginationAllLoadedView(){
    return (null)
  }

}

const styles = {
  types:{
    borderBottomColor:'#F0F0F0',
    borderBottomWidth:1,
    paddingBottom:12,
  },
  title:{
    fontSize:theme.DefaultFontSize+2,
    color:'#000',
    fontWeight:'400',
    textAlign:'center',
    marginTop:16,
  },
};


const mapStateToProps = state => ({
  my_question:state.myQuestion.my_question,
  allQuestions:state.myQuestion.allQuestions,
  renqun:state.user.loginUser.renqun
});
export default connect(mapStateToProps)(QuestionAll);
