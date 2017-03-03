import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Container, Title, Content, Left, Right, Body,Text,Button} from "native-base";
import { Platform, View, ToastAndroid,Image, ScrollView, TouchableHighlight,TextInput,NetInfo} from "react-native";
import {openDrawer, closeDrawer} from "../../actions/drawer";
import styles from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment'
import {Actions} from "react-native-router-flux";
import Header from "../../components/header/IndexHeader";
import DynamicList from './dynamicList';
// import DynamicList from '../../components/listview/gifted';
import DynamicHeader from './dynamic-header';
import DynamicImage from './dynamic-image';
import DynamicComment from './dynamic-comments';
import DynamicSupport from './dynamic-supports';
const dismissKeyboard = require('dismissKeyboard');
import {store} from '../../store/configureStore.js';
import {newRealm} from '../../actions/realm.js'
import schema from '../../realm/schema.js'

/**
 * 动态
 */
class Dynamic extends PureComponent {
  constructor(props) {
		super(props);
		// moment.locale('zh-cn');
    this.props.newRealm();
    this.dynamic=[];
    this.endID=0;
    this.length = 0;
    this.startID = 0;
    this.nowShow =0;
		this.state={
      commentShow:false,
      text:''
		}
	}

    render() {
      let input = (null);
      if(this.state.commentShow){
        input = (
          <View style={styles.textInputContain}>
            <TextInput
              placeholder='评论' autoFocus={true}
              onEndEditing={()=>{
                this.setState({
                  commentShow:false,
                })
              }}
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
                  ref="gifted"
                />
               {input}
            </Container>
        );
    }


    	_renderRowView(info,sectionID,rowID){
    		if(info.photo){
    			var id = info.photo;
    		}else{
    			var id = 256;
    		}
        if(info.flag){
          var zan =(
              <Text style={styles.showoneText}>取消</Text>
          )
        }else{
          var zan=(
              <Text style={styles.showoneText}>点赞</Text>
          )
        }
        if(info.show){
          var show = (
            <View  style={styles.show}>
              <Button onPress={this._zan.bind(this,info)} transparent dark style={styles.divid} >
                {zan}
              </Button>
              <Text style={styles.showoneText}>|</Text>
              <Button onPress={this._comment.bind(this,info.id)} transparent dark style={styles.divid} >
                <Text style={styles.showoneText}>评论</Text>
              </Button>
            </View>
          )
        }else{
          var show =(null);
        }
    		return (
    			<View style={styles.dynamic}>
    				<View>
    					<Image source={{uri: 'http://192.168.10.58:9095/api/BaseApi/getImage?id='+id+'&w=&h='}}  style={styles.dynamicTouxiang}/>
    				</View>
    				<View style={styles.dynamicDetail}>
    					<Text style={styles.dynamicName}>{info.name}</Text>
    					<Text style={styles.dynamicContent}>{info.content}</Text>
    					<DynamicImage urls={info.urls}/>
              <View style={styles.showContain}>
                {show}
                <TouchableHighlight style={styles.showMessage} onPress={this._onMessage.bind(this,info.id)} underlayColor='#fafafa'>
                  <Image source={require('../../assets/message.png')}/>
                </TouchableHighlight>
              </View>
              <DynamicSupport zan={info.suports} />
              <DynamicComment comments={info.comments} />
    				</View>
    			</View>
    		)
    	}

      _renderHeader(){
          return  (
            <DynamicHeader />
          );
      }

      _onMessage(id){
        var add=2;
        var timer = 0;
        if(this.nowShow==id){
          this.props.realm.write(()=>{
              this.props.realm.create('Dynamic',{ id:id, show:false, },true)
          })
          add = 1;
        }else{
          this.props.realm.write(()=>{
              this.props.realm.create('Dynamic',{ id:id, show:true,},true)
              if(this.nowShow!=0){
                this.props.realm.create('Dynamic',{ id:this.nowShow, show:false,},true)
              }
          })
        }
        let realm_dynamic = this.props.realm.objects('Dynamic').sorted('id');
        for(var i=0;i<this.dynamic.length;i++){
          if(this.dynamic[i].id==this.nowShow){
            this.dynamic[i]=realm_dynamic.filtered('id=='+this.nowShow)[0];
            if(add==1){
              break;
            }
            timer++;
          }
          if(this.dynamic[i].id==id){
            this.dynamic[i]=realm_dynamic.filtered('id=='+id)[0];
            timer++;
          }
          if(timer==add){
            break;
          }
        }
        if(this.nowShow==id){
          this.nowShow=0;
        }else{
          this.nowShow = id;
        }
        this.refs.gifted._postRefresh(this.dynamic);
      }

    	_zan(info){
        let realm_dynamic = this.props.realm.objects('Dynamic').sorted('id');
        let data = realm_dynamic.filtered('id=='+info.id)[0];
        let suports = data.suports;
        let arraySuports =Array.prototype.slice.call(suports, 0);
        if(info.flag){
          for(var j=0;j<arraySuports.length;j++){
            if(arraySuports[j].username=='chenxx'){
              arraySuports.splice(j,1);
              break;
            }
          }
        }else{
          arraySuports[arraySuports.length]={createTime:Date.parse(new Date()),username:'chenxx',id:110,publishId:info.id};
        }
        this.props.realm.write(()=>{
            this.props.realm.create('Dynamic',{
              id:info.id,
              suports:arraySuports,
              flag:!info.flag,
              show:false,
            },true)
        })
        this.nowShow=0;

        for(var i=0;i<this.dynamic.length;i++){
          if(this.dynamic[i].id==info.id){
            this.dynamic[i]=data;
            break;
          }
        }
        this.refs.gifted._postRefresh(this.dynamic);
    	}

      //显示评论输入框
    	_comment(infoid){
        this.setState({
          commentShow:true,
        })
        this.commentID = infoid;
    	}

      //发表评论
      _onSubmitEditing(event){
        // event.nativeEvent.text
        if(event.nativeEvent.text){
          let realm_dynamic = this.props.realm.objects('Dynamic').sorted('id');
          let Comments = realm_dynamic.filtered('id=='+this.commentID)[0].comments;
          let arrayComments =Array.prototype.slice.call(Comments, 0);
          arrayComments[arrayComments.length]={username:'chenxx',name:'陈欣欣',content:event.nativeEvent.text}
          this.props.realm.write(()=>{
              this.props.realm.create('Dynamic',{
                id:this.commentID,
                comments:arrayComments,
                show:false,
              },true)
          })
          this.nowShow = 0;
          for(var i=0;i<this.dynamic.length;i++){
            if(this.dynamic[i].id==this.commentID){
              this.dynamic[i]=realm_dynamic.filtered('id=='+this.commentID)[0];
              break;
            }
          }
          this.refs.gifted._postRefresh(this.dynamic);
          /*
          暂缺提交给后台
          */
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
              'authorization':'4b1559e9-f35f-4100-8b64-7880c6ce728f'
            }
          })
          .then((res) => res.json())
          .then((res) => {
            if(!res.err_code&&res.ok==true&&res.obj.length>0) {
              // this.dynamic=res.obj;
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
                    comments:[],
                    photo:res.obj[i].photo,
                    urls:res.obj[i].urls,
                    flag:res.obj[i].flag,
                  },true)
                }
              })
              let realm_res = this.props.realm.objects('Dynamic').sorted('id');
              this.dynamic = realm_res.slice(realm_res.length-6,realm_res.length-1);
              this.min_realm = realm_res[0].id;
              this.max_realm = realm_res[realm_res.length-1].id;
            }else{
              let res = this.props.realm.objects('Dynamic').sorted('id');
              console.log(res);
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

          fetch('http://192.168.10.58:9095/api/PublishApi/getPublishs?id='+this.startID+'&nav=0&size=5&username=chenxx',{
            method:'POST',
            headers:{
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'authorization':'4b1559e9-f35f-4100-8b64-7880c6ce728f'
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
                      comments:[],
                      photo:res.obj[i].photo,
                      urls:res.obj[i].urls,
                      flag:res.obj[i].flag,
                    },true)
                  }
                })
                this.length +=res.obj.length;
                this.startID = res.obj[0].obj;
              }else{
                callback(this.dynamic)
              }
          })
        } else{
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
            'authorization':'4b1559e9-f35f-4100-8b64-7880c6ce728f'
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
                  comments:[],
                  photo:res.obj[i].photo,
                  urls:res.obj[i].urls,
                  flag:res.obj[i].flag,
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
