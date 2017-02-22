import React, {Component} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Container,Button,Label,Icon} from "native-base";
import {View,Text,Image,TextInput} from "react-native";
import styles from "./styles";

/**
 * 登录
 */
class About extends Component {  // eslint-disable-line
    render() {
        return (
            <Container style={styles.container}>
                <View  style={styles.view}>
                    <View>
                        <Image source={require('../../assets/logo.png') }  style={styles.img}></Image>
                    </View>
                    <View style={styles.textInputViewStyle}>
                        <Label style={{width:30}}>
                            <Icon  style={{color:'#9F9F9F'}} name='person'/>
                        </Label>
                        <TextInput style={{flex:1}} underlineColorAndroid="transparent"/>
                    </View>
                    <View style={styles.textInputViewStyle}>
                        <Label style={{width:30}}>
                            <Icon style={{color:'#9F9F9F'}} name='key'/>
                        </Label>
                        <TextInput style={{flex:1}} underlineColorAndroid="transparent"/>
                    </View>
                    <View style={styles.textInputView}>
                        <Button success block onPress={()=>Actions['startInformation']()} style={styles.button}>
                            <Text style={{textAlign:'center'}}>登录</Text>
                        </Button>
                    </View>
                    <View style={styles.textdoc}>
                        <Text style={styles.text}>记住密码</Text>
                        <Text style={[styles.text,{textDecorationLine :'underline'}]}>忘记密码</Text>
                    </View>

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
