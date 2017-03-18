import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Title, Right, Body,Text,Button,Icon} from "native-base";
import { Platform, View, ToastAndroid,Image, ScrollView, TouchableHighlight,TextInput,NetInfo,Alert,TouchableOpacity} from "react-native";
import {Container, Content, Header} from "../../components/index";
import styles from "./assets/styles";
import moment from './assets/moment.js'
import {Actions} from "react-native-router-flux";
import DynamicList from './components/DynamicList';
import DynamicHeader from './components/DynamicHeader';
import DynamicComment from './components/DynamicComments';
import DynamicSupport from './components/DynamicSupports';
import DynamicCommon from '../../components/DynamicCommon'

const dismissKeyboard = require('dismissKeyboard');

/**
 * 动态
 */
class Dynamic extends PureComponent {
    constructor(props) {
      super(props);
      this.state={
        commentShow:false,
      }
      this.change=false;

    }

    componentWillReceiveProps(nextProps){
      if(this.props.newnew!=nextProps.newnew){
        this.props.fetchData(1,{refresh:true},this.refs.gifted._postRefresh,{realm:this.props.realm,dynamic:this.props.dynamic.dynamicList,user:this.props.user});
      }
    }


    render() {

      let input = (null);
      if(this.state.commentShow){
        input = (
          <View style={styles.textInputContain}>
            <TextInput
              placeholder='评论' autoFocus={true}
              onEndEditing={()=>{ this.setState({ commentShow:false}) }}
              onSubmitEditing={this._onSubmitEditing.bind(this)}
              style={styles.textInput}
              underlineColorAndroid='transparent'/>
          </View>
        )
      }
        return (
            <Container>
                <Header menu {...this.props} right={
                  <View style={{flexDirection: 'row'}}>
                    <Right>
                      <Button transparent onPress={()=>Actions.search()}><Icon name="search"/></Button>
                      <Button transparent onPress={()=>Actions['newDynamic']({newnew:this.props.newnew})}><Icon name="ios-chatboxes"/></Button>
                    </Right>
                  </View>

                }/>
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
        var m = moment(info.publishTime).fromNow();
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
        var del = ( null );
        if(info.userId==this.props.user.appid){
          del=(
            <TouchableOpacity onPress={this._delete.bind(this,info.id)}>
                <Text style={styles.delete}>删除</Text>
            </TouchableOpacity>
          )
        }
        let comments =Array.prototype.slice.call(info.dynamicComments, 0);

    		return (
    			<View  style={styles.dynamic}>
              <DynamicCommon info={info} newnew={this.props.newnew}/>
              <View style={styles.showContain}>
                <View style={styles.timeAndDelete}>
                  <Text style={styles.time}>{m}</Text>
                  {del}
                </View>
                {show}
                <TouchableHighlight style={styles.showMessage} onPress={this._onMessage.bind(this,info.id)} underlayColor='#fafafa'>
                  <Image source={require('../../assets/message.png')}/>
                </TouchableHighlight>
             </View>
                <DynamicSupport zan={info.dynamicPraises} />
                <DynamicComment comments={comments} />
    			</View>
    		)
    	}

      _renderHeader(){
          return  (
            <DynamicHeader />
          );
      }

      _delete(id){
        Alert.alert('','确定删除吗?',[
          {text:'取消'},
          {
            text:'删除',
            onPress:()=>this.props.del(id,{callback:this.refs.gifted._postRefresh,dynamic:this.props.dynamic.dynamicList,realm:this.props.realm,from:'list'})
          }
        ])
        // this.props.del(id,{callback:this.refs.gifted._postRefresh,dynamic:this.props.dynamic.dynamicList,realm:this.props.realm})
      }

      _onMessage(id){
        this.props.show(id,{callback:this.refs.gifted._postRefresh,dynamic:this.props.dynamic.dynamicList,realm:this.props.realm,nowShow:this.props.dynamic.nowShow})
      }

    	_zan(info){
        this.props.zan(info,{callback:this.refs.gifted._postRefresh,dynamic:this.props.dynamic.dynamicList,realm:this.props.realm,user:this.props.user,from:'list'})
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
        this.props.sendComment(event,{callback:this.refs.gifted._postRefresh,dynamic:this.props.dynamic.dynamicList,realm:this.props.realm,commentID:this.commentID,user:this.props.user,from:'list'})
        this.setState({
          commentShow:false,
        })
      }

    	_onFetch(page, callback, options,flag){


        this.props.fetchData(page,options,callback,{realm:this.props.realm,dynamic:this.props.dynamic.dynamicList,user:this.props.user});
      }

}
function bindAction(dispatch) {
    return {
        fetchData:(page,options,callback,params)=>dispatch(fetchData(page,options,callback,params)),
        show:(id,params)=>dispatch(show(id,params)),
        zan:(info,params)=>dispatch(zan(info,params)),
        openDrawer:()=>dispatch(openDrawer()),
        sendComment:(event,params)=>dispatch(sendComment(event,params)),
        del:(id,params)=>dispatch(del(id,params)),
    };
}

const mapStateToProps = state => ({
  realm:state.realm,
  dynamic:state.dynamic,
  user:state.user.loginUser,
});
export default connect(mapStateToProps, bindAction)(Dynamic);
