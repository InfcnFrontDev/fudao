//noinspection JSAnnotator
import React, {PureComponent} from "react";

import {connect} from "react-redux";
import {Container, Header, Title, Content, ListItem, Text, Left, Button, Icon, Body, Right} from "native-base";
import {View,Image,DeviceEventEmitter,TouchableHighlight} from "react-native";
import {openDrawer, closeDrawer} from "../../actions/drawer";
import {Actions} from "react-native-router-flux";
import {theme} from "../../utils/";

/**
 * 我的情绪
 */
class TreatmentDailyDetail extends PureComponent {
    constructor(props) {
        super(props);
    }


    render() {
        return (
          <Container  style={styles.container}>
            <TouchableHighlight onPress={()=>Actions.pop()}>
              <View style={styles.View}>
              <Text style={styles.title}>点一支薰衣草熏香美美的休息一下吧~</Text>
              <Image source={require('../../assets/error.png')} style={styles.image}/>
              <Text style={styles.content}>        小时候和我妈去裁缝店，我妈指着电熨斗说：“这东西很烫，千万不要用手碰！” 我很听话，没用手碰，我舔了一下。 那感觉比冬天舔黑龙江漠河北极村的铁栏杆还带劲！</Text>
              </View>
            </TouchableHighlight>
          </Container>
        )
    }

}

const styles = {
    container:{
      justifyContent:'center',
      alignItems:'center',
    },
    View:{
      flex:1,
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      marginBottom:30,
    },
    title:{
      textAlign:'center',
      fontSize:theme.DefaultFontSize+8,
      marginLeft:80,
      marginRight:80,
      fontWeight:'700',
      color:'#000'
    },
    content:{
      fontSize:theme.DefaultFontSize+2,
      marginLeft:30,
      marginRight:30,
      lineHeight:28,
      color:'#333'
    },
    image:{
      backgroundColor:'#ff0',
      marginTop:20,
      marginBottom:20,
    }
};
function bindAction(dispatch) {
    return {
        openDrawer: () => dispatch(openDrawer()),
        closeDrawer: key => dispatch(closeDrawer()),
    };

}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(TreatmentDailyDetail);
