import React, {Component} from "react";
import {StyleSheet, Platform, View, Text, ToastAndroid,Image, ScrollView, TouchableHighlight,TextInput} from "react-native";
import NavBarView from "../components/NavBarView";
import Icon from 'react-native-vector-icons/FontAwesome';
import DynamicList from '../components/DynamicList';
import moment from 'moment'


/**
 * 动态
 */
class DynamicView extends Component {
	constructor(props) {
		super(props);
		moment.locale('zh-cn');
		this.state={
			dynamic:[],
			show:false,
		}
	}

	render() {
		// let color = Platform.OS === 'android' ? styleUtils.androidSpinnerColor : 'gray';
		// if()
		let input = (
			<View style={styles.textInput}>
				<TextInput    style={{height: 40, borderColor: 'gray', borderWidth: 1}}  underlineColorAndroid='transparent'/>
			</View>
		)
		return (
			<View style={styles.contain}>
				{input}
				<DynamicList
							enableEmptySections={true}
							rowView={this._renderRowView.bind(this)}
							onFetch={this._onFetch.bind(this)}
							firstLoader={true}
							pagination={true}
							refreshable={true}
							withSections={false}
					/>
			</View>
		)
		// {this._renderInput.bind(this)}
	}

	_renderRowView(info){

		ToastAndroid.show(JSON.stringify( (new Date()).valueOf()), ToastAndroid.SHORT);

		if(info.photo){
			var id = info.photo;
		}else{
			var id = 256;
		}
		return (
			<View style={styles.dynamic}>
				<View>
					<Image source={{uri: 'http://192.168.10.58:9095/api/BaseApi/getImage?id='+id+'&w=&h='}}  style={styles.dynamicTouxiang}/>
				</View>
				<View style={styles.dynamicDetail}>
					<Text style={styles.dynamicName}>{info.name}</Text>
					<Text style={styles.dynamicContent}>{info.content}</Text>
					{this._renderMsgImage(info)}
					<View style={styles.dynamic}>
						<Text style={styles.time}> {moment(info.createtime).fromNow()}</Text>
						{this._showOrHidden()}
						<TouchableHighlight style={styles.dynamicMessage} onPress={this._show.bind(this)}>
							<Image source={{uri: 'http://192.168.10.58:9095/api/BaseApi/getImage?id='+id+'&w=&h='}}  style={styles.dynamicMessageImage}/>
						</TouchableHighlight>
					</View>
				</View>
			</View>
		)
	}



	_renderMsgImage(info) {
			if(info.urls) {
					var arr_pic = info.urls.split(',');
					let pic = arr_pic.map((p, i) => {
						return (
							<TouchableHighlight key={i} onPress={this._openPhotoBrowser.bind(this, arr_pic,i)} style={styles.imageTouch}>
									<Image source={{uri: 'http://192.168.10.58:9095/api/BaseApi/getImage?id='+p+'&w=600&h=600'}} style={styles.msgImage}  resizeMode= 'stretch' />
							</TouchableHighlight>
						)
					})
					return (
							<View style={styles.allImage}>
							{pic}
							</View>
					)
			}
	}
	_showOrHidden(){
		if(this.state.show){
			return (
				<View  style={styles.show}>
					<TouchableHighlight onPress={this._zan.bind(this)} underlayColor='#fff' style={styles.showone}>
						<Text style={styles.showoneText}>点赞</Text>
					</TouchableHighlight>
					<Text>|</Text>
					<TouchableHighlight onPress={this._comment.bind(this)} underlayColor='#fff' style={styles.showone}>
						<Text style={styles.showoneText}>评论</Text>
					</TouchableHighlight>
				</View>
			)
		}
		return (null)

	}

	_show(){
		this.setState({
			show:true
		})
		// ToastAndroid.show(JSON.stringify(this.state.dynamic), ToastAndroid.SHORT);
		// ToastAndroid.show('aaaaaaaaaaaaaaaaaaa', ToastAndroid.SHORT);

	}

	_zan(){

	}

	_comment(){

	}

	_openPhotoBrowser(arr_pic,i) {
			// this.props.navigator.push({
			// 		id: 'photoBrowser',
			// 		params: {
			// 				pic:arr_pic,
			// 				index:i,
			// 		}
			// })
	}
	_onFetch(page = 1, callback, options,flag){

		if(page === 1 && options.firstLoad) {
			fetch('http://192.168.10.58:9095/api/PublishApi/getPublishs?id=84&nav=0&size=5&username=chenxx',{
				method:'POST',
				headers:{
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'authorization':'ab330cea-eb02-4c16-9f07-73fe518ced65'
				}
			})
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
					if(!res.err_code) {
						// ToastAndroid.show(JSON.stringify(res), ToastAndroid.SHORT);
						this.setState({
							dynamic:res.obj
						})
						callback(res.obj,{
							allLoaded: true
						});
					}
			})
		}else if(page === 1&&!options.firstLoad&&flag==false) {

		}else{

		}
	}

}

const styles = StyleSheet.create({
	contain:{
		backgroundColor:'#fff',
		flex:1,
	},
	content1:{
		height:180,
	},
	bgImg:{
		flex:1,
		alignItems:'center',
		justifyContent:'center',
		width:null,
		height:null,
	},
	person:{
		position:'absolute',
		top:160,
		right:100,
	},
	touxiang:{
		width:80,
		height:80,
		position:'absolute',
		top:120,
		right:10,
	},
	dynamic:{
		flexDirection:'row',
		marginRight:8,
		marginBottom:13,
		marginTop:6,
	},
	dynamicDetail:{
		flex:1,
	},
	dynamicTouxiang:{
		width:44,
		height:44,
		marginLeft:12,
		marginRight:12,
	},
	dynamicName:{
		color:'#0f9dc9',
		fontSize:17,
	},
	dynamicContent:{
		fontSize:15,
		marginTop:8,
	},
	imageTouch:{
		marginRight:7,
		marginTop:8,
		height: 120,
		width:78,
		height:78,
	},
	allImage:{
		flexDirection:'row',
		flexWrap:'wrap',
	},
	msgImage: {
		flex:1,
		alignItems:'center',
		justifyContent:'center',
		width:null,
		height:null,
	},
	dynamicMessage:{
		position:'absolute',
		right:0,
	},
	dynamicMessageImage:{
		width:16,
		height:16,
	},
	show:{
		flexDirection:'row',
		position:'absolute',
		right:24,

	},
	showone:{
		width:42,
	},
	showoneText:{
		textAlign:'center',
	},
	textInput:{
		paddingTop:10,
		paddingBottom:10,
		paddingLeft:10,
		paddingRight:10,
		position:'absolute',
		zIndex:99,
		bottom:0,
		width:350,
	}
});
export default (DynamicView);
