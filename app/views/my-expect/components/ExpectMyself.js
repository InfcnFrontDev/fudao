import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import Swiper from 'react-native-swiper'
import {ListItem, Text, Button,} from "native-base";
import {View,Image,ToastAndroid,DeviceEventEmitter,TouchableHighlight} from "react-native";
import {theme} from "../../../utils/";
import {delMyQuestion} from '../../../actions/my-question.js'
import {request,urls} from "../../../utils/";

/**
* 我所选的问题
*/
class ExpectMyself extends PureComponent {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <View style={styles.myQuestion}>
          <Text style={styles.title}>我的期望</Text>
          <Swiper
            height={160}
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
      for(var i=0;i<Math.ceil(this.props.my_expect.length/4);i++){
          pages[i] = this.renderOnePage(i,this.props.my_expect.length/4);
      }
      return pages;
  }

  renderOnePage(i,pages){
    if(i+1-0.25>pages){
      var  pageContent= (
            <View key={0} style={{flex:1,flexDirection:'column',justifyContent:'flex-start'}}>
                {this.renderOneLine(4*i,this.props.my_expect.length)}
            </View>
          )
    }else{
      var  pageContent= [0,1].map((p)=>{
          return (
            <View key={p} style={{flex:1,flexDirection:'column',justifyContent:'center'}}>
                {this.renderOneLine(4*i+p*2,this.props.my_expect.length)}
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
      <Button transparent style={styles.oneQuestion} onPress={()=>{}}>
          <Image source={{uri:urls.getImage(this.props.my_expect[num].img)}} style={styles.img}/>
          <Text style={styles.oneTitle}>{this.props.my_expect[num].showVal}</Text>
          <TouchableHighlight  onPress={this.choose.bind(this,this.props.my_expect[num])} underlayColor='#fafafa'>
          <Image source={require('../../../assets/arrows_square_minus.png')} style={styles.choose}/>
          </TouchableHighlight>
      </Button>
    )
  }

  choose(obj){
    const {dispatch} = this.props;
    dispatch(delMyQuestion(obj,this.props.my_expect,this.props.allExpects,this.props.userId,'myexpect'));
  }

}

const styles = {
  myQuestion:{
    height:200,
    backgroundColor:'#F0F0F0',
    borderBottomColor:'#D8D8D8',
  },
  title:{
    fontSize:theme.DefaultFontSize+2,
    color:'#000',
    fontWeight:'400',
    textAlign:'center',
    marginTop:16,
    marginBottom:16,
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
    marginBottom:16,
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
    marginBottom:16,
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


const mapStateToProps = state => ({
  my_expect:state.myQuestion.my_expect,
  allExpects:state.myQuestion.allExpects,
  flag:state.myQuestion.flag,
  userId:state.user.loginUser.appid,

});
export default connect(mapStateToProps)(ExpectMyself);
