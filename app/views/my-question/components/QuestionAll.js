import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import Swiper from 'react-native-swiper'
import {ListItem, Text, Button,} from "native-base";
import {View,Image,ToastAndroid,DeviceEventEmitter,StyleSheet,TouchableHighlight} from "react-native";
import {theme} from "../../../utils/";
import {questions} from './Data';
import QuestionList from '../../../components/QuestionAndExceptList'
import GiftedListView from '../../../components/GiftedListView'

/**
* 所有问题
*/
var iconfont=['aaa','bb','aaa','bb','aaa','bb','aaa','bb','aaa','bb']
class QuestionAll extends PureComponent {
  constructor(props) {
		super(props);
		this.state = {
			rows: this.iconfontToRows()
		}
	}

	iconfontToRows() {
		let colNum = 2,
			rows = [],
			row = {rowNum: 0, cells: []};

		for (let key in iconfont) {
			row.cells.push(key);
			if (row.cells.length == 2) {
				rows.push(row);
				row = {rowNum: row.rowNum + 1, cells: []};
			}
		}
		if (row.cells.length > 0) {
			let celsLen = row.cells.length;
			for (let i = 0; i < colNum - celsLen; i++) {
				row.cells.push('');
			}
			rows.push(row);
		}

		return rows;
	}

	render() {
		let {title} = this.props;
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
		callback(this.state.rows, {
			allLoaded: true
		})
	}

	renderRowView(row) {
		return (
			<View style={styles.rowView}>
				{row.cells.map(cell => this.renderCellView(cell))}
			</View>
		)
	}

	renderCellView(p) {
		return (
			<View key={p} style={[styles.cellView, p == '' ? styles.noDataCellView : {}]}>
      <Button transparent style={styles.oneQuestion} onPress={()=>Actions.myQuestionDetail({question_title:'p.title'})}>
        <Image source={require('../assets/1yuyue.png')} style={styles.img}/>
        <Text style={styles.oneTitle}>aaaa</Text>
        <TouchableHighlight  onPress={this.choose.bind(this)} underlayColor='#fafafa'>
          <Image source={require('../../../assets/arrows_square_plus.png')} style={styles.choose}/>
        </TouchableHighlight>
      </Button>

			</View>
		)
    //
	}

	renderPaginationAllLoadedView() {
		return (null )
	}

  choose(){
    ToastAndroid.show("aaa",ToastAndroid.SHORT);
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
		borderColor: 'transparent',
		backgroundColor: 'transparent'
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
  oneQuestion:{
    marginBottom:0,
    marginTop:0,
    marginRight:6,
    marginLeft:6,
    paddingLeft:6,
    paddingRight:6,
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    backgroundColor:'#F1F7EE',
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

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    closeDrawer: key => dispatch(closeDrawer()),
  };
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(QuestionAll);
