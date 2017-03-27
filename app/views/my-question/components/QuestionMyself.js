import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import Swiper from 'react-native-swiper'
import {ListItem, Text, Button,} from "native-base";
import {View,Image,ToastAndroid,DeviceEventEmitter,TouchableHighlight} from "react-native";
import {theme} from "../../../utils/";
import {delMyQuestion,getQuestionTreetment,skipToDetail} from '../../../actions/my-question.js'
import {request,urls} from "../../../utils/";

/**
* 我所选的问题
*/
class QuestionMyself extends PureComponent {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <View style={styles.myQuestion}>
          <Text style={styles.title}>我的问题</Text>
          <Swiper
            height={140}
            loop={false}
            dot={<View style={{width:5,height:5,backgroundColor:'gray',borderRadius:4,marginLeft:3,marginRight:3}}></View>}
            activeDot={<View style={{width:5,height:5,backgroundColor:'#A1CC00',borderRadius:4,marginLeft:3,marginRight:3}}></View>}
            >
            {this.renderPages()}
          </Swiper>
      </View>
    )
  }

  renderPages(){
    var pages = [];
      for(var i=0;i<Math.ceil(this.props.my_question.length/4);i++){
          pages[i] = this.renderOnePage(i,this.props.my_question.length/4);
      }
      return pages;
  }

  renderOnePage(i,pages){
    if(i+1-0.25>pages){
      var  pageContent= (
            <View key={0} style={{flex:1,flexDirection:'column',justifyContent:'flex-start'}}>
                {this.renderOneLine(4*i,this.props.my_question.length)}
            </View>
          )
    }else{
      var  pageContent= [0,1].map((p)=>{
          return (
            <View key={p} style={{flex:1,flexDirection:'column',justifyContent:'center'}}>
                {this.renderOneLine(4*i+p*2,this.props.my_question.length)}
            </View>
          )
        })
   }
    return (
      <View key={i} style={{flex:1,paddingBottom:30,}}>
      {pageContent}
      </View>
    );
  }

  renderOneLine(i,length){
    if(i+1>=length){
      return (
        <View  style={styles.oneline}>
          {this.renderOneQuestion(i)}
          <View style={styles.noQuestion}></View>
        </View>
      )
    }
    return (
      <View style={styles.oneline}>
        {this.renderOneQuestion(i)}
        {this.renderOneQuestion(i+1)}
      </View>
    )
  }

  renderOneQuestion(num){
    return (
      <Button transparent style={styles.oneQuestion} onPress={this._onPress.bind(this,this.props.my_question[num])}>
          <Image source={{uri:urls.getImage(this.props.my_question[num].img)}} style={styles.img}/>
          <Text style={styles.oneTitle}>{this.props.my_question[num].showVal}</Text>
          <TouchableHighlight  onPress={this.choose.bind(this,this.props.my_question[num])} underlayColor='#fafafa'>
          <Image source={require('../../../assets/arrows_square_minus.png')} style={styles.choose}/>
          </TouchableHighlight>
      </Button>
    )
  }

  _onPress(question){
      let {onItemPress} = this.props;
      onItemPress(question);
  }

  choose(obj){
    const {dispatch} = this.props;
    dispatch(delMyQuestion(obj,this.props.my_question,this.props.allQuestions,this.props.userId,'myquestion'));
  }

}

const styles = {
  myQuestion:{
    height:180,
    backgroundColor:'#F0F0F0',
    borderBottomColor:'#D8D8D8',
  },
  title:{
    fontSize:theme.DefaultFontSize+2,
    color:'#000',
    fontWeight:'400',
    textAlign:'center',
    marginTop:12,
    marginBottom:12,
  },
  oneline:{
    flexDirection:'row',
  },
  noQuestion:{
    marginTop:0,
    marginRight:6,
    marginLeft:6,
    paddingLeft:6,
    paddingRight:6,
    flex:1,
    marginBottom:10,
  },
  oneQuestion:{
    marginRight:6,
    marginLeft:6,
    paddingLeft:6,
    paddingRight:6,
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    backgroundColor:'#fff',
    borderColor:'#959595',
    borderWidth:1,
    borderRadius:0,
    marginBottom:10,
  },
  oneTitle:{
    color:'#000',
    flex:1,
  },
  img:{
    width:36,
    height:36,
    marginRight:8,
  },
  choose:{
    width:20,
    height:20,
    justifyContent:'flex-end',
  }
};


QuestionMyself.propTypes = {
  onItemPress: React.PropTypes.func,
}

QuestionMyself.defaultProps = {
  onItemPress: ()=>{}
}


const mapStateToProps = state => ({
  my_question:state.myQuestion.my_question,
  allQuestions:state.myQuestion.allQuestions,
  flag:state.myQuestion.flag,
  userId:state.user.loginUser.appid,

});
export default connect(mapStateToProps)(QuestionMyself);
