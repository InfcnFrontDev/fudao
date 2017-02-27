//noinspection JSAnnotator
import React, {PureComponent} from "react";

import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Container, Title, Content, Left, Right, Body, Form, Input, Item,Thumbnail,Button,Text} from "native-base";
import {View,Image} from "react-native";
import {openDrawer, closeDrawer} from "../../actions/drawer";
import styles from "./styles";


/**
 * 开始页
 */
class Start extends PureComponent {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Container style={styles.container}>
               <View style={styles.view}>
                   <Image source={require('../../assets/logo.png')}  style={styles.img} />
                   <View style={styles.viewButton}>
                       <Button  success  bordered onPress={()=>Actions['login']()}><Text>登录</Text></Button>
                       <Button  success  onPress={()=>Actions['register']()}><Text>注册</Text></Button>
                   </View>

               </View>
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
export default connect(mapStateToProps, bindAction)(Start);
