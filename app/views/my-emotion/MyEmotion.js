//noinspection JSAnnotator
import React, {PureComponent} from "react";
import {connect} from "react-redux";
import { Text ,Icon} from "native-base";
import {Container, Content, Header, List, Separator, HeaderButton} from "../../components/index";
import {View,Image,DeviceEventEmitter} from "react-native";
import {openDrawer, closeDrawer} from "../../actions/drawer";
import ItemEmotion from './components/ItemEmotion';
import {Actions} from "react-native-router-flux";
import {theme,toast} from "../../utils/";
import {good,calm,bad} from './components/Data';
import {updateMyEmotion} from "../../actions/emotion";

/**
 * 我的情绪
 */
class MyEmotion extends PureComponent {

    render() {
        let {loginUser, myEmotion} = this.props;
        if(!myEmotion){
            myEmotion = calm[0];
        }

        return (
            <Container style={styles.container}>
                <Header back {...this.props} right={
                    <View  style={styles.selectedEmotion}>
                        <Image source ={myEmotion.img} style={styles.selectedEmotionImg}/>
                        <Text style={styles.selectedEmotionTitle}>{myEmotion.title}</Text>
                    </View>
                }/>
                <Content style={styles.content}>
                   <List style={styles.divideList}>
                       <Text style={styles.divideTitle}>积极向上，朵朵小太阳</Text>
                   </List>
                   <ItemEmotion type='good' />
                   <List  style={styles.divideList}>
                       <Text style={styles.divideTitle}>清风徐来，水波不兴</Text>
                   </List>
                   <ItemEmotion type='calm' />
                   <List style={styles.divideList}>
                       <Text style={styles.divideTitle}>月落乌啼霜满天</Text>
                   </List>
                   <ItemEmotion type='bad' />

               </Content>
            </Container>
        )
    }
    componentWillMount(){
        let {loginUser, myEmotion, updateTime} = this.props;
        if(myEmotion){
            let currentTime = new Date().getTime();
            if(currentTime - updateTime > 1000 * 60 * 60){
                this.props.dispatch(updateMyEmotion(calm[0]));
            }
        }

    }
}


const styles = {
  container:{
    backgroundColor:'#fff',
  },
  content:{
    paddingTop:4,
    paddingRight:12,
    paddingLeft:12,
    backgroundColor:'#fff',
  },
  divideList:{
    backgroundColor:'#fff',
  },
  divideTitle:{
    color:'#676767',
    fontSize:theme.DefaultFontSize-2,
  },
  right:{
    paddingTop:0,
  },
  selectedEmotion:{
    flexDirection:'column',
    marginTop:0,
  },
  selectedEmotionImg:{
    width:36,
    height:36,
  },
  selectedEmotionTitle:{
    color:'#fff',
    marginLeft:7,
  }
};


function bindAction(dispatch) {
    return {
        openDrawer: () => dispatch(openDrawer()),
        closeDrawer: key => dispatch(closeDrawer()),
    };

}
const mapStateToProps = state => ({
    loginUser: state.user.loginUser,
    ...state.emotion
});
export default connect(mapStateToProps, bindAction)(MyEmotion);
