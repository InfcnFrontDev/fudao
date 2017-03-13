import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Container, Title, Content, Left, Right, Body,Text,Button,Header,Icon} from "native-base";
import { Platform, View, ToastAndroid,Image, ScrollView, TouchableHighlight,TextInput,NetInfo,Alert} from "react-native";
import styles from "./assets/styles";
import moment from './assets/moment.js'
import {Actions} from "react-native-router-flux";
import DynamicComment from './components/DynamicComments';
import DynamicSupport from './components/DynamicSupports';
import DynamicCommon from '../../components/DynamicCommon'
import {show,zan,sendComment,del} from '../../actions/dynamic.js'
const dismissKeyboard = require('dismissKeyboard');

/**
 * 动态
 */
class DynamicDetail extends PureComponent {
    constructor(props) {
      super(props);
      this.state={
        commentShow:false,
        show:false
      }
      this.change=false;
    }

    render() {
      // ToastAndroid.show('render'+JSON.stringify(this.props.newnew),ToastAndroid.SHORT)

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
              <Header>
                  <Left>
                      <Button transparent onPress={()=>Actions.pop({refresh:{newnew:!this.props.newnew}})}>
                          <Icon name='arrow-back' />
                      </Button>
                  </Left>
                  <Body>
                      <Title>详情</Title>
                  </Body>
                  <Right>
                  </Right>
              </Header>
              {this.renderDetail(this.props.dynamic.dynamicDetail)}
              {input}
            </Container>
        );
    }

    renderDetail(info){
      this.zan='点赞'
      if(info.flag){
        this.zan='取消';
      }
      var show =(null);
      if(this.state.show){
        var show = (
          <View  style={styles.show}>
            <Button onPress={this._zan.bind(this,info)} transparent dark style={styles.divid} >
              <Text style={styles.showoneText}>{this.zan}</Text>
            </Button>
            <Text style={styles.showoneText}>|</Text>
            <Button onPress={this._comment.bind(this,info.id)} transparent dark style={styles.divid} >
              <Text style={styles.showoneText}>评论</Text>
            </Button>
          </View>
        )
      }

      var del = ( null );
      // if(info.userId==this.props.user.appid){
      //   del=(
      //     <TouchableHighlight underlayColor='#fafafa' onPress={this._delete.bind(this,info.id)}>
      //         <Text style={styles.delete}>删除</Text>
      //     </TouchableHighlight>
      //   )
      // }
      let comments =Array.prototype.slice.call(info.dynamicComments, 0);

      return (
        <View>
            <View  style={styles.dynamic}>
              <DynamicCommon info={info} />
              <View style={styles.showContain}>
                <View style={styles.timeAndDelete}>
                  <Text style={styles.time}>{moment(info.publishTime).fromNow()}</Text>
                  {del}
                </View>
                {show}
                <TouchableHighlight style={styles.showMessage} onPress={this._onMessage.bind(this,info.id)} underlayColor='#fafafa'>
                  <Image source={require('../../assets/message.png')}/>
                </TouchableHighlight>
             </View>

            </View>
            <View style={styles.onlyDetail}>
              <DynamicSupport zan={info.dynamicPraises} />
              <DynamicComment comments={comments} />
            </View>
        </View>
      )
    }

      _delete(id){
        Alert.alert('','确定删除吗?',[
          {text:'取消'},
          {
            text:'删除',
            onPress:()=> {
              Actions.pop();
            }
          }
        ])
      }

      _onMessage(){
        this.setState({
          show:!this.state.show
        })
      }

    	_zan(info){
        this.props.zan(info,{dynamic:this.props.dynamic.dynamicList,realm:this.props.realm,user:this.props.user,from:'detail'})
        this.setState({
          show:false
        })
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
        this.props.sendComment(event,{dynamic:this.props.dynamic.dynamicList,realm:this.props.realm,commentID:this.commentID,user:this.props.user,from:'detail'})
        this.setState({
          commentShow:false,
          show:false
        })
      }


}
function bindAction(dispatch) {
    return {
        fetchData:(page,options,callback,params)=>dispatch(fetchData(page,options,callback,params)),
        zan:(info,params)=>dispatch(zan(info,params)),
        sendComment:(event,params)=>dispatch(sendComment(event,params)),
        del:(id,params)=>dispatch(del(id,params)),
    };
}

const mapStateToProps = state => ({
  realm:state.realm,
  dynamic:state.dynamic,
  user:state.user.loginUser,
});
export default connect(mapStateToProps, bindAction)(DynamicDetail);
