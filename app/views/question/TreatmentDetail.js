import React, {PureComponent} from "react";
import { View, Image, Dimensions} from "react-native";
import {connect} from "react-redux";
import {Container, Left, Header, Icon, Right, Body,ListItem, Button, Title, Content, Text} from "native-base";
import {Actions} from "react-native-router-flux";
import Video from "react-native-video";
import {theme,urls} from "../../utils/";

class TreatmentDetail extends PureComponent {
  constructor(props){
    super(props);
  }

    render() {
      var content = this.props.data.details || this.props.data.detail;
      if(!content){
        content = this.props.data.principle;
      }
      var e=new RegExp('\n',"g");
      content = content.replace(e, '\n        ');
      var nu = ( <View style={{height:20,}}></View> )
        return (
          <Container style={styles.container}>
            <Header>
                <Left>
                    <Button transparent onPress={()=>Actions.pop()}>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title style={styles.title}>{this.props.data.name}</Title>
                </Body>
                <Right>
                </Right>
            </Header>
            <Content style={styles.content}>
              <View style={styles.from}>
                  <Text>{this.props.title} > 自疗方案 > {this.props.from=='日常'?'日常疗法':'专业疗法'} > {this.props.data.name}</Text>
              </View>
              <View style={styles.view}>
                  {this.props.data.img?this.renderImg('/'+this.props.renqun+this.props.data.img):nu}
                  <Text style={styles.contentText}>        {content}</Text>
              </View>
            </Content>
          </Container>
        )
    }

    renderImg(img) {
      let ext = img.substring(img.indexOf(".") + 1);
      if (ext == 'mp3' || ext == 'wav' || ext == 'm4a') {
        return (
          <Video source={{uri: urls.getImage(img)}} // 视频的URL地址，或者本地地址，都可以.
               rate={1.0}                   // 控制暂停/播放，0 代表暂停paused, 1代表播放normal.
               volume={1.0}                 // 声音的放大倍数，0 代表没有声音，就是静音muted, 1 代表正常音量 normal，更大的数字表示放大的倍数
               muted={false}                // true代表静音，默认为false.
               paused={false}               // true代表暂停，默认为false
               resizeMode="cover"           // 视频的自适应伸缩铺放行为，
               repeat={true}                // 是否重复播放
               playInBackground={false}     // 当app转到后台运行的时候，播放是否暂停
               playWhenInactive={false}     // [iOS] Video continues to play when control or notification center are shown. 仅适用于IOS
               onLoadStart={this.loadStart} // 当视频开始加载时的回调函数
               onLoad={this.setDuration}    // 当视频加载完毕时的回调函数
               onProgress={this.setTime}    //  进度控制，每250ms调用一次，以获取视频播放的进度
               onEnd={this.onEnd}           // 当视频播放完毕后的回调函数
               onError={this.videoError}    // 当视频不能加载，或出错后的回调函数
               />
        )
      } else {
        return (
          <Image source={{uri:urls.getImage(img)}} style={styles.image}/>
        )
      }
    }


}

const styles = {
  container:{
    backgroundColor:'#fff',
  },
  content:{
    backgroundColor:'#fff',
    flexDirection:'column',
  },
  from:{
    backgroundColor:'#F0F0F0',
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:26,
  },
  view:{
     flex:1,
     flexDirection:'column',
     justifyContent:'center',
     alignItems:'center',
  },
  contentText:{
    fontSize:theme.DefaultFontSize,
    marginLeft:30,
    marginRight:30,
    lineHeight:28,
  },
  image:{
    marginTop:20,
    marginBottom:20,
    width:Dimensions.get('window').width-40,
    height:200,
  }
}

const mapStateToProps = state => ({
  renqun:state.user.loginUser.renqun,
});
export default connect(mapStateToProps)(TreatmentDetail);
