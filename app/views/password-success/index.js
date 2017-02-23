import React, {Component} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Container, Content, Left, Right, Body,  Row,Text, Thumbnail, Col, Button,Item,Label,Input,Form} from "native-base";
import {View, Alert,TextInput,TouchableOpacity} from "react-native";
import styles from "./styles";

/**
 * 设置密码
 */
class About extends Component {  // eslint-disable-line
    render() {
        return (
            <Container style={styles.container}>
                <View style={styles.view}>

                    <Text style={styles.titleText}>恭喜你注册成功</Text>


                    <Button block success style={{marginTop:150}}>
                        <Text>登录</Text>
                    </Button>
                </View>
            </Container>
        );
    }
}

function bindAction(dispatch) {
    return {};
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(About);



