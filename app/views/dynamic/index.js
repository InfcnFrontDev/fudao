import React, {Component} from "react";
import {connect} from "react-redux";
import {Container, Title, Content, Left, Right, Body} from "native-base";
import { Platform, View,Text, ToastAndroid,Image, ScrollView, TouchableHighlight,TextInput,NetInfo} from "react-native";
import {openDrawer, closeDrawer} from "../../actions/drawer";
import styles from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment'
import {Actions} from "react-native-router-flux";
import Header from "../../components/header/";
import DynamicList from './dynamicList';
// import DynamicList from '../../components/listview/gifted';
import DynamicHeader from './dynamic-header';
import DynamicImage from './dynamic-image';
const dismissKeyboard = require('dismissKeyboard');
import {store} from '../../store/configureStore.js';
import {newRealm} from '../../actions/realm.js'
import schema from '../../realm/schema.js'

/**
 * 动态
 */
 var realm;
class Dynamic extends Component {
  constructor(props) {
		super(props);
		// moment.locale('zh-cn');
    this.props.newRealm();
    this.dynamic=[];
    this.endID=0;
    this.length = 0;
    this.startID = 0;
		this.state={
			someShow:0,
      commentShow:false,
      text:'',
      comment:[{name:'zhangs',content:'你好，王五'},{name:'lis',content:'你好，王五'}]
		}


    // ToastAndroid.show(JSON.stringify(realm_res[0].id), ToastAndroid.SHORT);
    // ToastAndroid.show(JSON.stringify(realm_res[realm_res.length-1].id), ToastAndroid.SHORT);

	}

    render() {
      // ToastAndroid.show("render", ToastAndroid.SHORT);
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
    					<Text style={[styles.dynamicContent,styles.color000]}>{info.id}__________{info.content}</Text>
    					<DynamicImage urls={info.urls}/>
    					<View style={styles.dynamic}>
    						<Text style={styles.time}> {moment(info.createtime).fromNow()}</Text>
    						{this._showOrHidden(info.id)}
    					</View>
              {this._renderComment(info)}
    				</View>
    			</View>
    		)
        // <TouchableHighlight style={styles.dynamicMessage} onPress={this._show.bind(this,info.id)}>
        // <Image source={{uri: 'http://192.168.10.58:9095/api/BaseApi/getImage?id='+id+'&w=&h='}}  style={styles.dynamicMessageImage}/>
        // </TouchableHighlight>
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
    		// if(this.state.someShow==infoid){
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
    		// }
    		// return (null)

    	}

    	_show(infoid){
        var id=infoid;
        if(this.state.someShow==infoid){
          id=0;
        }
        this.setState({
          someShow:id
        })
        call(this.dynamic);
    	}

    	_zan(){

    	}

    	_comment(){
        this.setState({
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
          fetch('http://192.168.10.58:9095/api/PublishApi/getPublishs?id=&nav=1&size=5&username=chenxx',{
            method:'POST',
            headers:{
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'authorization':'fe2a9d14-a0d5-4ff2-8686-cdbc4c04bde9'
            }
          })
          .then((res) => res.json())
          .then((res) => {
            if(!res.err_code&&res.ok==true&&res.obj.length>0) {
              this.dynamic=res.obj;
              this.length = res.obj.length;
              this.endID = res.obj[res.obj.length-1].id;
              this.startID = res.obj[0].id;
              callback(res.obj);
              this.props.realm.write(()=>{
                for(let i=0;i<res.obj.length;i++){
                  this.props.realm.create('Dynamic',{
                    id:res.obj[i].id,
                    username:res.obj[i].username,
                    name:res.obj[i].name,
                    content:res.obj[i].content,
                    createtime:res.obj[i].createtime,
                    suports:res.obj[i].suports,
                    comments:[{username:res.obj[i].username,name:res.obj[i].username,content:'我是第'+res.obj[i].id+'条动态'}],
                    photo:res.obj[i].photo,
                    urls:res.obj[i].urls,
                  },true)
                }
              })
              let realm_res = this.props.realm.objects('Dynamic').sorted('id');
              this.min_realm = realm_res[0].id;
              this.max_realm = realm_res[realm_res.length-1].id;
            }else{
              let res = this.props.realm.objects('Dynamic').sorted('id');
              if(res){
                if(res.length>6){
                  var firstres = res.slice(res.length-6,res.length-1);
                }else{
                  var firstres = res;
                }
                this.length = firstres.length;
                this.min_realm = res[0].id;
                this.max_realm = res[res.length-1].id;
                this.endID=firstres[0].id
                this.dynamic=firstres.reverse();
                callback(this.dynamic);
              }
            }
          })
        }else if(page === 1&&!options.firstLoad&&flag==false) {
          ToastAndroid.show("bbb", ToastAndroid.SHORT);

          fetch('http://192.168.10.58:9095/api/PublishApi/getPublishs?id='+this.startID+'&nav=0&size=5&username=chenxx',{
            method:'POST',
            headers:{
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'authorization':'fe2a9d14-a0d5-4ff2-8686-cdbc4c04bde9'
            }
          })
          .then((res) => res.json())
          .then((res) => {
              if(!res.err_code&&res.ok==true&&res.obj.length>0) {
          			this.dynamic=res.obj.concat(this.dynamic)
                callback(this.dynamic);
                this.props.realm.write(()=>{
                  for(let i=0;i<res.obj.length;i++){
                    this.props.realm.create('Dynamic',{
                      id:res.obj[i].id,
                      username:res.obj[i].username,
                      name:res.obj[i].name,
                      content:res.obj[i].content,
                      createtime:res.obj[i].createtime,
                      suports:res.obj[i].suports,
                      comments:[{username:res.obj[i].username,name:res.obj[i].username,content:'我是第'+res.obj[i].id+'条动态'}],
                      photo:res.obj[i].photo,
                      urls:res.obj[i].urls,
                    },true)
                  }
                })
                this.length +=res.obj.length;
                this.startID = res.obj[0].obj;
              }else{
                callback(this.dynamic)
              }
          })
        }else{
          let realm_res = this.props.realm.objects('Dynamic').sorted('id');
          if(realm_res.length>this.length+1){
            if(realm_res.length>this.length+5){
              var render_realm_res = realm_res.slice(realm_res.length-this.length-6,realm_res.length-this.length-1);
            }else{
              var render_realm_res = realm_res.slice(0,realm_res.length-this.length-1);
            }
            this.dynamic = this.dynamic.concat(render_realm_res.reverse());
            this.length+=render_realm_res.length;
            this.endID = render_realm_res[render_realm_res.length-1].id;
            callback(this.dynamic);
          }else{
            ToastAndroid.show("ddd", ToastAndroid.SHORT);

            this._loadMore(callback);

          }


        }
      }

      _loadMore(callback){
        fetch('http://192.168.10.58:9095/api/PublishApi/getPublishs?id='+this.endID+'&nav=0&size=5&username=chenxx',{
          method:'POST',
          headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization':'fe2a9d14-a0d5-4ff2-8686-cdbc4c04bde9'
          }
        })
        .then((res) => res.json())
        .then((res) => {
          //上拉加载更多
          if(!res.err_code&&res.ok&&res.obj.length>0) {
            this.props.realm.write(()=>{
              for(let i=0;i<res.obj.length;i++){
                this.props.realm.create('Dynamic',{
                  id:res.obj[i].id,
                  username:res.obj[i].username,
                  name:res.obj[i].name,
                  content:res.obj[i].content,
                  createtime:res.obj[i].createtime,
                  suports:res.obj[i].suports,
                  comments:[{username:res.obj[i].username,name:res.obj[i].username,content:'我是第'+res.obj[i].id+'条动态'}],
                  photo:res.obj[i].photo,
                  urls:res.obj[i].urls,
                },true)
              }
            })
            this.endID=res.obj[res.obj.length-1].id
            this.dynamic=this.dynamic.concat(res.obj);
            this.length+=res.obj.length;
            callback(this.dynamic);
          }else{
            callback(this.dynamic,{
              allLoaded:true,
            });
          }
        })

      }
}
function bindAction(dispatch) {
    return {
        newRealm: ()=>dispatch(newRealm(schema)),
        openDrawer: () => dispatch(openDrawer()),
        closeDrawer: key => dispatch(closeDrawer()),
    };
}

const mapStateToProps = state => ({
  realm:state.realm
});
export default connect(mapStateToProps, bindAction)(Dynamic);
