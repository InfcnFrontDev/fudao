//noinspection JSAnnotator
import React, {PureComponent} from "react";

import {connect} from "react-redux";
import {Container, Header, Title, Content, ListItem, Text, Left, Button, Icon, Body, Right} from "native-base";
import {View,Image,DeviceEventEmitter,TouchableHighlight} from "react-native";
import {openDrawer, closeDrawer} from "../../actions/drawer";
import styles from "./styles";
import {Actions} from "react-native-router-flux";

/**
 * 我的情绪
 */
class MyEmotionSolve extends PureComponent {
    constructor(props) {
        super(props);
    }


    render() {
        return (
          <Container  style={styles.container}>
            <TouchableHighlight onPress={()=>Actions.pop()}>
              <View style={styles.View}>
              <Text style={styles.title}>开心一笑</Text>
              <Text style={styles.content}>        小时候和我妈去裁缝店，我妈指着电熨斗说：“这东西很烫，千万不要用手碰！” 我很听话，没用手碰，我舔了一下。 那感觉比冬天舔黑龙江漠河北极村的铁栏杆还带劲！</Text>
              <Image source={require('../../assets/error.png')} style={styles.image}/>
              </View>
            </TouchableHighlight>
          </Container>
        )
    }

}
function bindAction(dispatch) {
    return {
        openDrawer: () => dispatch(openDrawer()),
        closeDrawer: key => dispatch(closeDrawer()),
    };

}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(MyEmotionSolve);
