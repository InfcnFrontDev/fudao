/**
 * Created by Administrator on 2017/3/1.
 */
//noinspection JSAnnotator
import React, {PureComponent} from "react";

import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Container, Title, Content, Left, Right, Body, Form, Input, Item,Thumbnail,Button,Text} from "native-base";
import {View,Image} from "react-native";
import {openDrawer, closeDrawer} from "../../actions/drawer";
import  CommitButton from "./components/CommitButton"

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
                    <Image source={require('./assets/logo.png')}  style={styles.img} />
                    <View style={styles.viewButton}>
                        <CommitButton  border={true} block={false} title="登录" onPress={()=>Actions['login']()}/>
                        <CommitButton  border={false} block={false} title="注册" onPress={()=>Actions['register']()}/>
                    </View>

                </View>
            </Container>
        )
    }
}
const styles = {
    container:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center'
    },
    view:{
        width:300,
        height:500,
    },
    img:{
        marginTop:-80,
        width:300,
        height:500,
        resizeMode:'contain',
    },
    viewButton:{
        flexDirection: 'row',
        justifyContent:'space-around',
    }
};
function bindAction(dispatch) {
    return {
        openDrawer: () => dispatch(openDrawer()),
        closeDrawer: key => dispatch(closeDrawer()),
    };

}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(Start);
