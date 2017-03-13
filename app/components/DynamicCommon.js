import React, {Component} from "react";
import {Text} from "native-base";
import {connect} from "react-redux";
import {View,Image,TouchableHighlight,ToastAndroid } from "react-native";
import DynamicImage from './DynamicImage';
import {theme} from "../utils/";
import {Actions} from "react-native-router-flux";
import {skipToDetail} from '../actions/dynamic.js'

/**
 * 需添加参数info
 *info包含name，content，urls，photo
 */
class DynamicCommon extends Component {
	constructor(props){
		super(props);
	}

	render() {
		// ToastAndroid.show('dynamicCommon'+JSON.stringify(this.props.info.path), ToastAndroid.SHORT);
		var id=305;
		if(this.props.info.photo){
			id = this.props.info.photo;
		}
    return (
      <View  style={styles.dynamicCommon}>
        <View>
          <Image source={{uri: 'http://192.168.10.58:9095/api/BaseApi/getImage?id='+id+'&w=&h='}}  style={styles.dynamicTouxiang}/>
        </View>
        <TouchableHighlight style={styles.dynamicDetail} underlayColor='#fafafa' onPress={this._skipToDetail.bind(this)}>
				<View>
						<Text style={styles.dynamicName}>{this.props.info.nick}</Text>
						<Text style={styles.dynamicContent}>{this.props.info.content}</Text>
						<DynamicImage urls={this.props.info.path}/>
				</View>
        </TouchableHighlight>
      </View>
    )
	}

	_skipToDetail(){
		const {dispatch} = this.props;
		dispatch(skipToDetail(this.props.info,this.props.newnew));
	}

}

const styles={
	dynamicCommon:{
		  flexDirection:'row',
	},
	dynamicDetail:{
		flex:1,
	},
	dynamicTouxiang:{
		width:40,
		height:40,
		marginRight:12,
	},
	dynamicName:{
		color:'#5E7192',
		fontSize:theme.DefaultFontSize,
	},
	dynamicContent:{
		marginTop:6,
		color:'#282828',
		fontSize:theme.DefaultFontSize,
	},
}

const mapStateToProps = state => ({
  userId:state.user.loginUser.appid,
});
export default connect(mapStateToProps)(DynamicCommon);
