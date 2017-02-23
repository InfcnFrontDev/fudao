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

                    <Text style={styles.titleText}>请设置您的密码</Text>
                    <View style={styles.box2}>
                        <View style={styles.border1}>
                            <Text>输入密码</Text>
                        </View>
                        <View>
                            <TextInput style={styles.input} underlineColorAndroid='transparent'></TextInput>
                        </View>
                    </View>
                    <View  style={styles.box3}>
                        <View style={styles.border1}>
                            <Text>重复密码</Text>
                        </View>
                        <View>
                            <TextInput style={styles.input}  underlineColorAndroid='transparent'></TextInput>
                        </View>
                    </View>

                    <Button block success onPress={()=>Actions['passwordSuccess']()} style={{marginTop:40}}>
                        <Text>提交</Text>
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


