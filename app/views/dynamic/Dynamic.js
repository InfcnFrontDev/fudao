import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Container, Title, Content, Left, Right, Body,Text,Button} from "native-base";
import { Platform, View, ToastAndroid,Image, ScrollView, TouchableHighlight,TextInput,NetInfo} from "react-native";
import styles from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment'
import {Actions} from "react-native-router-flux";
import Header from "../../components/header/IndexHeader";
import DynamicList from './components/DynamicList';
import DynamicHeader from './components/DynamicHeader';
import DynamicComment from './components/DynamicComments';
import DynamicSupport from './components/DynamicSupports';
const dismissKeyboard = require('dismissKeyboard');
import DynamicCommon from '../../components/DynamicCommon'
import {fetchData,show,zan,sendComment} from '../../actions/dynamic.js'
/**
 * 动态
 */
class Dynamic extends PureComponent {
  constructor(props) {
		super(props);
		this.state={
      commentShow:false,
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
        let comments =Array.prototype.slice.call(info.dynamicComments, 0);

    		return (
    			<View  style={styles.dynamic}>
              <DynamicCommon info={info} />
              <View style={styles.showContain}>
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

      _onMessage(id){
        this.props.show(id,{callback:this.refs.gifted._postRefresh,dynamic:this.props.dynamic.dynamicList,realm:this.props.realm,nowShow:this.props.dynamic.nowShow})
      }

    	_zan(info){
        this.props.zan(info,{callback:this.refs.gifted._postRefresh,dynamic:this.props.dynamic.dynamicList,realm:this.props.realm,})
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
        this.props.sendComment(event,{callback:this.refs.gifted._postRefresh,dynamic:this.props.dynamic.dynamicList,realm:this.props.realm,commentID:this.commentID})
        this.setState({
          commentShow:false,
        })
      }

    	_onFetch(page, callback, options,flag){
        this.props.fetchData(page,options,callback,{realm:this.props.realm,dynamic:this.props.dynamic.dynamicList});
      }

}
function bindAction(dispatch) {
    return {
        fetchData:(page,options,callback,params)=>dispatch(fetchData(page,options,callback,params)),
        show:(id,params)=>dispatch(show(id,params)),
        zan:(info,params)=>dispatch(zan(info,params)),
        sendComment:(event,params)=>dispatch(sendComment(event,params)),
    };
}

const mapStateToProps = state => ({
  realm:state.realm,
  dynamic:state.dynamic,
});
export default connect(mapStateToProps, bindAction)(Dynamic);
