import React, {Component} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Container, Content, Left, Right, Body,  Row,Text, Thumbnail, Col, Button,Item,Label,Input,Form} from "native-base";
import {View, Alert} from "react-native";
import styles from "./styles";

/**
 * 关于福道
 */
var alertMessage = '我们将发送验证码到这个号码+86 138********';
class About extends Component {  // eslint-disable-line
    render() {
        return (
            <Container style={styles.container}>
                    <View style={styles.view}>

                        <Text style={styles.titleText}>请输入您的手机号</Text>
                        <View style={styles.box1}>
                            <Text style={{flex:1}}>国家/地区</Text>
                            <Text style={{flex:1}}>中国></Text>
                        </View>
                        <View style={styles.box2}>
                            <View style={styles.border1}>
                                <Text>+86</Text>
                            </View>
                            <View>
                                <Form style={{width:200}}>
                                    <Item>
                                        <Input />
                                    </Item>
                                </Form>
                            </View>
                        </View>

                        <Button block success onPress={()=>{
                            Alert.alert(
                                '确认手机号码',
                                alertMessage,
                                [
                                    {text: '确认', onPress: () => console.log('OK Pressed!')},
                                    {text: '取消', onPress: () => console.log('OK Pressed!')}
                                ]
                            )
                        }} style={{marginTop:50}}>
                            <Text>注册</Text>
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

