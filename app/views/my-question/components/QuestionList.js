import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import Swiper from 'react-native-swiper'
import {ListItem, Text, Button,} from "native-base";
import {View,Image,ToastAndroid,DeviceEventEmitter,StyleSheet,TouchableHighlight} from "react-native";
import {theme} from "../../../utils/";
import {questions} from './Data';
import GiftedListView from '../../../components/GiftedListView'
import {myQuestionToRows,addMyQuestion} from '../../../actions/my-question.js'


/**
* 所有问题
*/
class QuestionList extends PureComponent {
  constructor(props) {
		super(props);
	}

	render() {
		// let {title} = this.props;
		return (
      <View style={styles.contain}>
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
    dispatch(myQuestionToRows(this.props.data,callback))

	}

	renderRowView(row) {
		return (
			<View style={styles.rowView}>
				{row.cells.map((cell,i) => this.renderCellView(cell,row.rowNum,i))}
			</View>
		)
	}

	renderCellView(p,num,i) {
    var btn=(null)
    if(p!=''){
      btn = (
        <Button transparent style={(num%2==0)?(i==0?styles.oneQuestion00:styles.oneQuestion01):(i==0?styles.oneQuestion10:styles.oneQuestion11)} onPress={()=>Actions.myQuestionDetail({question_title:'p.title'})}>
          <View  style={styles.oneQuestionView}>
            <Image source={require('../assets/1yuyue.png')} style={styles.img}/>
            <Text style={styles.oneTitle}>{p}</Text>
            <TouchableHighlight  onPress={this.choose.bind(this,p)} underlayColor='#fafafa'>
            <Image source={require('../../../assets/arrows_square_plus.png')} style={styles.choose}/>
            </TouchableHighlight>
          </View>
        </Button>
      )
    }
    return (
      <View key={p} style={[styles.cellView, p == '' ? styles.noDataCellView : {}]}>
        {btn}
      </View>
    )
	}

	renderPaginationAllLoadedView() {
		return (null )
	}

  choose(title){
    const {dispatch} = this.props;
    dispatch(addMyQuestion(title,this.props.my_question))
  }
}

const styles = {
  contain:{
    marginTop:16,
  },
	contentView: {
		flex: 1
	},
	rowView: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		marginLeft: 5,
		marginRight: 5
	},
	cellView: {
		flex: 1,
	},
	noDataCellView: {
		height:0,
    overflow:'hidden'
	},
	cellIcon: {
		color: '#ff9630',
		fontSize: 36,
		textAlign: 'center',
	},
	cellText: {
		textAlign: 'center',
		fontSize: 12,
		paddingTop: 5
	},
	allLoadedView: {
		height: 44,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFF',
		padding: 20,
	},
	allLoadedText: {
		fontSize: 14,
	},
  oneQuestion00:{
    margin:6,
    backgroundColor:'#F1F7EE',
  },
  oneQuestion01:{
    margin:6,
    backgroundColor:'#F9F1EF',
  },
  oneQuestion10:{
    margin:6,
    backgroundColor:'#F4F5E5',
  },
  oneQuestion11:{
    margin:6,
    backgroundColor:'#EDF4FE',
  },
  oneQuestionView:{
    paddingLeft:1,
    paddingRight:1,
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
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
  my_question:state.myQuestion.my_question,
});
export default connect(mapStateToProps)(QuestionList);
