import React, {Component} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Container, Content, Left, Right, Body,  Row,Text, Thumbnail, Col, Button,Item,Label,Input,Form} from "native-base";
import {View, Alert,TextInput,TouchableOpacity} from "react-native";
import styles from "./styles";

/**
 * 注册
 */

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
                                <TextInput style={styles.inputNum}  keyboardType='numeric' underlineColorAndroid='transparent'></TextInput>
                            </View>
                        </View>
                        <View  style={styles.box3}>
                            <View style={styles.border1}>
                                <Text>验证码</Text>
                            </View>
                            <View>
                                <TextInput style={styles.inputYan}  keyboardType='numeric' underlineColorAndroid='transparent'placeholder={'输入验证码'}></TextInput>
                            </View>
                            <View>
                                <Button light style={styles.btnYan}>
                                    <Text>获取验证码</Text>
                                </Button >
                            </View>
                        </View>

                        <Button block success onPress={()=>Actions['setPassword']()} style={{marginTop:40}}>
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

