//noinspection JSAnnotator
import React, {PureComponent} from "react";

import {connect} from "react-redux";
import {Container, Header, Title, Content, ListItem, Text, Left, Button, Icon, Body, Right} from "native-base";
import {View,Image,DeviceEventEmitter,TouchableHighlight} from "react-native";
import {openDrawer, closeDrawer} from "../../actions/drawer";
import {Actions} from "react-native-router-flux";
import {theme,urls,request,toast} from "../../utils/";

/**
 * 我的情绪
 */
class MyEmotionSolve extends PureComponent {
    constructor(props) {
        super(props);
        this.state={
            data:this.props.data,
        }
    }


    render() {
        let data=this.state.data;

        return (
          <Container  style={styles.container}>
            <TouchableHighlight onPress={()=>Actions.pop()}>
              <View style={styles.View}>
              <Text style={styles.title}>{data.mitigation_method}</Text>
              <Text style={styles.content}>{data.method_detail}</Text>
              <Image source={{uri: urls.getImage("/high_quality_population"+data.img)}} style={styles.image}/>
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
      fontSize:theme.DefaultFontSize+6,
      marginBottom:60,
    },
    content:{
      textAlign:'center',
      fontSize:theme.DefaultFontSize+2,
      marginLeft:30,
      marginRight:30,
      lineHeight:28,
    },
    image:{
        marginTop:20,
        width:250,
        height:200,
        justifyContent:'center',
    }
};
function bindAction(dispatch) {
    return {
        openDrawer: () => dispatch(openDrawer()),
        closeDrawer: key => dispatch(closeDrawer()),
    };

}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(MyEmotionSolve);
