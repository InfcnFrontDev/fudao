import React, {Component} from "react";
import {connect} from "react-redux";
import {Container, Title, Content, Left, Right, Body} from "native-base";
import { Platform, View,Text, ToastAndroid,Image, ScrollView, TouchableHighlight,TextInput} from "react-native";
import {openDrawer, closeDrawer} from "../../actions/drawer";
import Header from "../../components/header/";
import styles from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome';
import DynamicList from '../../components/DynamicList';
import moment from 'moment'
import {Actions} from "react-native-router-flux";

/**
 * 动态
 */
class Dynamic extends Component {
  constructor(props) {
		super(props);
		// moment.locale('zh-cn');
		this.state={
			dynamic:[],
			someShow:0,
      commentShow:false,
      text:'',
      comment:[{name:'zhangs',content:'你好，王五'},{name:'lis',content:'你好，王五'}]
		}
	}

    render() {
      let input = (null);
      if(this.state.commentShow){
        input = (
          <View style={styles.textInputContain}>
            <TextInput
              placeholder='评论' autoFocus={true}
              onEndEditing={this._onBlur.bind(this)}
              onSubmitEditing={this._onSubmitEditing.bind(this)}
              style={styles.textInput}
              underlineColorAndroid='transparent'/>
          </View>
        )
      }
        return (
            <Container>
                <Header>
                    <Title>{this.props.title}</Title>
                </Header>
                <DynamicList
                  enableEmptySections={true}
                  rowView={this._renderRowView.bind(this)}
                  onFetch={this._onFetch.bind(this)}
                  firstLoader={true}
                  pagination={true}
                  refreshable={true}
                  withSections={false}
                />
               {input}
            </Container>
        );
    }


    	_renderRowView(info,sectionID,rowID){

    		// ToastAndroid.show(JSON.stringify(rowID), ToastAndroid.SHORT);

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
    						{this._showOrHidden(rowID)}
    						<TouchableHighlight style={styles.dynamicMessage} onPress={this._show.bind(this,rowID)}>
    							<Image source={{uri: 'http://192.168.10.58:9095/api/BaseApi/getImage?id='+id+'&w=&h='}}  style={styles.dynamicMessageImage}/>
    						</TouchableHighlight>
    					</View>
              {this._renderComment(info)}
    				</View>
    			</View>
    		)
    	}

      _renderComment(info){
        if(true) {
            var arr_comment = this.state.comment;
            let comment = arr_comment.map((p, i) => {
              // <TouchableHighlight key={i} onPress={this._openPhotoBrowser.bind(this, arr_pic,i)} style={styles.imageTouch}>
              return (
                <View key={i} style={styles.oneComment}>
                  <Text style={styles.commentName}>
                    {p.name}:
                  </Text>
                  <Text style={styles.commentContent}>
                    {p.content}
                  </Text>
                </View>
              )
            })
            return (
                <View style={styles.allComments}>
                {comment}
                </View>
            )
        }
      }

    	_renderMsgImage(info) {
    			if(info.urls) {
    					var arr_pic = info.urls.split(',');
    					let pic = arr_pic.map((p, i) => {
                // <TouchableHighlight key={i} onPress={this._openPhotoBrowser.bind(this, arr_pic,i)} style={styles.imageTouch}>
    						return (
                  <TouchableHighlight key={i} onPress={()=> Actions['picture']({image:info.urls,i:i})} style={styles.imageTouch}>
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
    	_showOrHidden(rowID){
    		if(this.state.someShow==rowID+1){
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

    	_show(rowID){
        var id=rowID+1;
        if(this.state.someShow==id){
          id=0;
        }
        this.setState({
          someShow:id
        })
    	}

    	_zan(){
        this.setState({
          someShow:0
        })
    	}

    	_comment(){
        this.setState({
          someShow:0,
          commentShow:true,
        })
    	}

      _onBlur(){
        this.setState({
          commentShow:false,
        })
      }

      _onSubmitEditing(event){
        // event.nativeEvent.text
        if(event.nativeEvent.text){
          ToastAndroid.show(event.nativeEvent.text, ToastAndroid.SHORT);
        }
        this.setState({
          commentShow:false,
        })
      }

    	_openPhotoBrowser(arr_pic,i) {

    	}
    	_onFetch(page = 1, callback, options,flag){

    		if(page === 1 && options.firstLoad) {
    			fetch('http://192.168.10.58:9095/api/PublishApi/getPublishs?id=84&nav=0&size=5&username=chenxx',{
    				method:'POST',
    				headers:{
    					'Accept': 'application/json',
    					'Content-Type': 'application/json',
    					'authorization':'94fb124d-6bb4-41f0-ac1f-53bb0322139d'
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
function bindAction(dispatch) {
    return {
        openDrawer: () => dispatch(openDrawer()),
        closeDrawer: key => dispatch(closeDrawer()),
    };
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(Dynamic);
