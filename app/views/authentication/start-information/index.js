//noinspection JSAnnotator
'use strict';
import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Container, Title, Content, Left, Right, Body, Form, Input, Item,Thumbnail,Button,Text,Icon} from "native-base";
import {View,Image,TouchableOpacity,TouchableHighlight,ToastAndroid, DatePickerAndroid,} from "react-native";
import Header from "../../../components/header/TitleHeader";
import {openDrawer, closeDrawer} from "../../../actions/drawer";
import styles from "./styles";


/**
 * 首次登录设置个人信息页
 */


class StartInformation extends PureComponent {
    constructor(props) {
        super(props);
        this.state={
            showM:true,
            simpleText:"03/22/06",
        }
    }
    async showPicker(stateKey, options) {
        try {
            var newState = {};
            const {action, year, month, day} = await DatePickerAndroid.open(options);
            if (action === DatePickerAndroid.dismissedAction) {
                newState[stateKey + 'Text'] = 'dismissed';
            } else {
                var date = new Date(year, month, day);
                newState[stateKey + 'Text'] = date.toLocaleDateString();
                newState[stateKey + 'Date'] = date;
            }
            this.setState(newState);
        } catch ({code, message}) {
            console.warn(`Error in example '${stateKey}': `, message);
        }
    }

    render() {
        var mbM=(
            <TouchableOpacity onPress={()=>{
                this.setState({
                    showM:true,
                    language:12
                })
            }}>
                <Thumbnail style={styles.touxiang} size={80} source={require('../../../assets/my-photos/man.png')}/>
            </TouchableOpacity>
        );
        var mbW=(
            <TouchableOpacity onPress={()=>{
                this.setState({
                    showM:false,
                })
            }}>
                <Thumbnail style={styles.touxiang} size={80} source={require('../../../assets/my-photos/woman.png')}/>
            </TouchableOpacity>
        );

        if(this.state.showM){
            mbW= (
                <TouchableOpacity onPress={()=>{
                    this.setState({
                        showM:false,
                    })
                }}>
                    <View style={styles.mb}></View>
                    <Thumbnail style={styles.touxiang} size={80} source={require('../../../assets/my-photos/woman.png')}/>
                </TouchableOpacity>
            )
        }else{
            mbM =(
                <TouchableOpacity onPress={()=>{
                    this.setState({
                        showM:true,
                    })
                }}>
                    <View style={styles.mb}></View>
                    <Thumbnail style={styles.touxiang} size={80} source={require('../../../assets/my-photos/man.png')}/>
                </TouchableOpacity>
            )
        }
        return (
            <Container style={styles.container}>
                <Header></Header>
                <Content padder >
                    <View style={styles.bigBox}>
                        <View style={styles.box}>
                            <View style={styles.photo}>
                                {mbM}
                                {mbW}
                            </View>
                            <View  style={styles.row1}>
                                <Text style={styles.text1}>请选择您的生日</Text>
                                <TouchableOpacity style={styles.btn}  onPress={this.showPicker.bind(this, 'simple', {date: this.state.simpleDate})}>
                                    <Text style={styles.text2}>{this.state.simpleText}</Text>
                                </TouchableOpacity>
                            </View>
                                <TouchableOpacity style={styles.btn1}>
                                    <Icon  name='navigate' />
                                    <Text  style={styles.text3}>正在定位你的位置...</Text>
                                </TouchableOpacity>
                            <Button block style={{marginTop:20}} >
                                <Text>提交</Text>
                            </Button>
                        </View>
                    </View>
                </Content>
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
export default connect(mapStateToProps, bindAction)(StartInformation);

