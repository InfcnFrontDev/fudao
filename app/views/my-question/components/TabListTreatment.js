import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {ScrollView, ListView, View, Dimensions} from "react-native";
import {Actions} from "react-native-router-flux";
import {Left, Right, Body, Form, Item, Text, Segment,Button} from "native-base";
import TreatmentProfession from "./TreatmentProfession";
import TreatmentDaily from "./TreatmentDaily";
import {getQuestionTreetment} from '../../../actions/my-question.js'


class TabListTreatment extends PureComponent {
  constructor(props){
    super(props);
    this.state={
      flag:true
    }
  }

    render() {
        return (
          <View style={styles.container}>
            <View style={styles.treatmentTitle}>
                <Button transparent onPress={()=>{this.setState({flag:true})}}
                  style={this.state.flag?styles.titleButtonLeft:styles.titleButtonAll}>
                    <Text style={this.state.flag?styles.titleChoose:styles.titleText}>日常疗法</Text>
                </Button>
                <Button transparent onPress={()=>{this.setState({flag:false})}}
                  style={this.state.flag?styles.titleButtonAll:styles.titleButtonRight}>
                    <Text style={this.state.flag?styles.titleText:styles.titleChoose}>专业疗法</Text>
                </Button>
            </View>
            {this.state.flag?<TreatmentDaily />:<TreatmentProfession />}
          </View>
        )
    }

    componentWillMount(){
      const {dispatch} = this.props;
      // dispatch(getQuestionTreetment('40',this.props.renqun))
      dispatch(getQuestionTreetment(this.props.question.id,this.props.renqun))
    }

}

const styles = {
  container:{
    flex:1,
  },
  treatmentTitle:{
    flexDirection:'row',
    marginTop:20,
    marginLeft:8,
    marginBottom:20,
    borderRadius:15,
    borderWidth:1,
    width:180,
    borderColor:'#A2A2A2',
    overflow:'hidden',
  },
  titleText:{
    color:'#333',
    fontSize:14,
  },
  titleChoose:{
    color:'#fff',
    fontSize:14,
  },
  titleButtonLeft:{
    paddingTop:0,
    paddingBottom:0,
    backgroundColor:'#A2A2A2',
    borderRadius:14,
    width:90,
    height:30,
    borderTopRightRadius:0,
    borderBottomRightRadius:0,
  },
  titleButtonRight:{
    paddingTop:0,
    paddingBottom:0,
    backgroundColor:'#A2A2A2',
    borderRadius:14,
    height:30,
    width:90,
    borderTopLeftRadius:0,
    borderBottomLeftRadius:0,
  },
  titleButtonAll:{
    height:30,
  }
}

const mapStateToProps = state => ({
  renqun:state.user.loginUser.renqun,
  my_question:state.myQuestion.my_question,
});
export default connect(mapStateToProps)(TabListTreatment);
