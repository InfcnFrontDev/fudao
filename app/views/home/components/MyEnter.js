//noinspection JSAnnotator
import React, {PureComponent} from "react";

import {connect} from "react-redux";
import {Container, Header, Title, Content, ListItem, Text, Left, Button, Icon, Body, Right,Badge} from "native-base";
import {View,Image,DeviceEventEmitter,TouchableHighlight} from "react-native";
import {Actions} from "react-native-router-flux";

/**
 * 我的情绪
 */
class MyEnter extends PureComponent {
    constructor(props) {
        super(props);
    }


    render() {
        return (
              <View style={styles.View}>
                <Button style={styles.button} transparent onPress={()=>Actions['myEmotion']()}>
                    <View style={styles.badge}>
                        <Image source={require('../assets/1yuyue.png')} style={styles.image}/>
                    </View>
                    <Text style={styles.text}>我的情绪</Text>
                </Button>
                <Button style={styles.button} transparent>
                    <View style={[styles.badge,styles.color2]}>
                        <Image source={require('../assets/1yuyue.png')} style={styles.image}/>
                    </View>
                    <Text style={styles.text}>我的能量场</Text>
                </Button>
                <Button style={styles.button} transparent onPress={()=>Actions['myQuestion']()}>
                    <View style={[styles.badge,styles.color3]}>
                        <Image source={require('../assets/1yuyue.png')} style={styles.image}/>
                    </View>
                    <Text style={styles.text}>我的问题</Text>
                </Button>
                <Button style={styles.button} transparent onPress={()=>Actions['myExpect']()}>
                    <View style={[styles.badge,styles.color4]}>
                        <Image source={require('../assets/1yuyue.png')} style={styles.image}/>
                    </View>
                    <Text style={styles.text}>我的期望</Text>
                </Button>
              </View>
        )
    }

}

const styles = {
  View:{
    flexDirection:'row',
    paddingTop:10,
    paddingBottom:10,
    borderBottomColor:'#ddd',
    borderBottomWidth:1,
  },
  button:{
    flexDirection:'column',
    height:70,
    paddingRight:0,
    paddingLeft:0,
    paddingBottom:0,
    paddingTop:0,
    flex:1
  },
  text:{
    color:'#333'
  },
  badge:{
    backgroundColor: '#AED9E5',
    paddingTop:6,
    paddingBottom:6,
    paddingLeft:6,
    paddingRight:6,
    borderRadius:48,
  },
  image:{
    width:36,
    height:36,
  },
  color2:{
    backgroundColor: '#E5B2A8',
  },
  color3:{
    backgroundColor: '#D5E1AF',
  },
  color4:{
    backgroundColor: '#CABBD3',
  },
};
function bindAction(dispatch) {
    return {
    };
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(MyEnter);
