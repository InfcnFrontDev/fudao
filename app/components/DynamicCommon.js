import React, {Component} from "react";
import {Text} from "native-base";
import {View,Image, } from "react-native";
import DynamicImage from './DynamicImage';
import {theme} from "../utils/";
/**
 * 需添加参数info
 *info包含name，content，urls，photo
 */
class DynamicCommon extends Component {
	constructor(props){
		super(props);
	}

	render() {
		var id=259;
		if(this.props.info.photo){
			id = this.props.info.photo;
		}
    return (
      <View  style={styles.dynamicCommon}>
        <View>
          <Image source={{uri: 'http://192.168.10.58:9095/api/BaseApi/getImage?id='+id+'&w=&h='}}  style={styles.dynamicTouxiang}/>
        </View>
        <View style={styles.dynamicDetail}>
          <Text style={styles.dynamicName}>{this.props.info.name}</Text>
          <Text style={styles.dynamicContent}>{this.props.info.content}</Text>
          <DynamicImage urls={this.props.info.urls}/>
        </View>
      </View>
    )
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

export default (DynamicCommon);
