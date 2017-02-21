import React, {Component} from "react";
import {connect} from "react-redux";
import {Container, Title, Content, Left, Right, Body} from "native-base";
import { Platform, View,Text, ToastAndroid,Image, ScrollView, TouchableHighlight,TextInput} from "react-native";
import {openDrawer, closeDrawer} from "../../actions/drawer";
import styles from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment'
import {Actions} from "react-native-router-flux";
import Header from "../../components/header/";
import DynamicList from '../../components/listview/gifted';
import DynamicHeader from './dynamic-header';
import DynamicImage from './dynamic-image';


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
      ToastAndroid.show("render", ToastAndroid.SHORT);
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
                  renderHeader={this._renderHeader.bind(this)}
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
        // ToastAndroid.show("renderrow", ToastAndroid.SHORT);
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
    					<Text style={[styles.dynamicContent,styles.color000]}>{info.content}</Text>
    					<DynamicImage urls={info.urls}/>
    					<View style={styles.dynamic}>
    						<Text style={styles.time}> {moment(info.createtime).fromNow()}</Text>
    						{this._showOrHidden(info.id)}
    						<TouchableHighlight style={styles.dynamicMessage} onPress={this._show.bind(this,info.id)}>
    							<Image source={{uri: 'http://192.168.10.58:9095/api/BaseApi/getImage?id='+id+'&w=&h='}}  style={styles.dynamicMessageImage}/>
    						</TouchableHighlight>
    					</View>
              {this._renderComment(info)}
    				</View>
    			</View>
    		)
    	}

      _renderHeader(){
      return  (
        <DynamicHeader />
        );
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

    	_showOrHidden(infoid){
    		if(this.state.someShow==infoid){
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

    	_show(infoid){
        var id=infoid;
        if(this.state.someShow==infoid){
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

    	_onFetch(page = 1, callback, options,flag){

    		if(page === 1 && options.firstLoad) {
          ToastAndroid.show("aaa", ToastAndroid.SHORT);

    			fetch('http://192.168.10.58:9095/api/PublishApi/getPublishs?id=&nav=1&size=5&username=chenxx',{
    				method:'POST',
    				headers:{
    					'Accept': 'application/json',
    					'Content-Type': 'application/json',
    					'authorization':'545f57eb-29d8-4827-a7dc-7c9002e3397e'
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
    						callback(res.obj);
    					}
    			})
    		}else if(page === 1&&!options.firstLoad&&flag==false) {
          ToastAndroid.show("bbb", ToastAndroid.SHORT);

          // fetch('http://192.168.10.58:9095/api/PublishApi/getPublishs?id=84&nav=0&size=5&username=chenxx',{
          //   method:'POST',
          //   headers:{
          //     'Accept': 'application/json',
          //     'Content-Type': 'application/json',
          //     'authorization':'545f57eb-29d8-4827-a7dc-7c9002e3397e'
          //   }
          // })
          // .then((res) => res.json())
          // .then((res) => {
          //   console.log(res);
          //     if(!res.err_code) {
          //       // ToastAndroid.show(JSON.stringify(res), ToastAndroid.SHORT);
          //       this.setState({
    			// 				dynamic:res.obj.concat(this.state.dynamic)
    			// 			})
          //       callback(res.obj.concat(this.state.dynamic));
          //     }
          // })
    		}else{
          ToastAndroid.show("ccc", ToastAndroid.SHORT);

          fetch('http://192.168.10.58:9095/api/PublishApi/getPublishs?id=84&nav=0&size=5&username=chenxx',{
            method:'POST',
            headers:{
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'authorization':'545f57eb-29d8-4827-a7dc-7c9002e3397e'
            }
          })
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
              if(!res.err_code) {
                // ToastAndroid.show(JSON.stringify(res), ToastAndroid.SHORT);
                this.setState({
                  dynamic:this.state.dynamic.concat(res.obj)
                })
                callback(res.obj);
              }
          })
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
