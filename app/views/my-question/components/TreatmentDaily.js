import React, {PureComponent} from "react";
import { View,ToastAndroid} from "react-native";
import {Left, Right, Body,ListItem, Button, List, Text} from "native-base";
import {connect} from "react-redux";
import GiftedListView from '../../../components/GiftedListView'
import TreatmentDailyRow from "./TreatmentDailyRow";


class TreatmentDaily extends PureComponent {
  constructor(props){
    super(props);

  }

    render() {
        return (
            <GiftedListView
              enableEmptySections={true}
              rowView={this.renderRowView.bind(this)}
              onFetch={this.onFetch.bind(this)}
              refreshable={false}
              firstLoader={true}
              withSections={false}
              paginationAllLoadedView={this.renderPaginationAllLoadedView}
              ref='questions'
            />
        )
    }

    onFetch(page = 1, callback, options){
      callback(this.props.questionDetail.dailyMethods,{
        allLoaded:true
      })
    }

    renderRowView(row){
      return (
        <TreatmentDailyRow row={row}/>
      )
    }

    renderPaginationAllLoadedView(){
      return (null)
    }

}

const styles = {
  container:{
    paddingLeft:15,
    paddingRight:15,
  },
  sectionOne:{
    flexDirection:'row',
  },
  dot:{
    fontWeight:'900',
    fontSize:40,
    color:'#333',
    lineHeight:23,
    paddingRight:10,
  },
  type:{
    paddingLeft:20,
    paddingRight:20,
    color:'#6D6D6D',
    fontSize:14,
  },
  list:{
    borderBottomColor:'transparent',
    padding:0,
  },
  button:{
    marginTop:-6,
    marginBottom:-15,
    padding:0,
  },
  gan:{
    paddingRight:8,
    color:'#949494',
  },
  data:{
    color:'#353535'
  },
  listData:{
    color:'#949494',
  }


}

const mapStateToProps = state => ({
  questionDetail:state.myQuestion.questionDetail,
});
export default connect(mapStateToProps)(TreatmentDaily);
