/**
 * Created by Administrator on 2017/3/9.
 */
//noinspection JSAnnotator
'use strict';
import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Thumbnail,Button,Text} from "native-base";
import {View,Image,TouchableOpacity,TouchableHighlight,ToastAndroid, DatePickerAndroid,} from "react-native";
import {Header,Container,Content} from "../../components/index";
import {openDrawer, closeDrawer} from "../../actions/drawer";
import {theme,tools} from "../../utils/";
import  CommitButton from "./components/CommitButton"


/**
 * 女生选择
 */


class WomanChoose extends PureComponent {
    constructor(props) {
        super(props);
        this.state={
            isSelect:'false'
        }

    }

    render() {
        return (
            <Container style={styles.container}>
                <Header back {...this.props}></Header>
                <Content>
                    <View style={styles.bigBox}>
                        <View style={styles.box}>
                            <TouchableOpacity>
                                <View style={styles.photo}>
                                    <View  style={styles.left} >
                                        <Thumbnail style={styles.touxiang} size={80} source={require('./assets/woman.png')}/>
                                    </View>
                                    <Text>未孕阶段</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View  style={styles.photo}>
                                    <View  style={styles.left} >
                                        <Thumbnail style={styles.touxiang} size={80} source={require('./assets/woman.png')}/>
                                    </View>
                                    <Text>备孕阶段</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View  style={styles.photo}>
                                    <View  style={styles.left} >
                                        <Thumbnail style={styles.touxiang} size={80} source={require('./assets/woman.png')}/>
                                    </View>
                                    <Text>待产阶段</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View  style={styles.photo}>
                                    <View  style={styles.left} >
                                        <Thumbnail style={styles.touxiang} size={80} source={require('./assets/woman.png')}/>
                                    </View>
                                    <Text>产后恢复阶段</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View  style={styles.photo}>
                                    <View  style={styles.left} >
                                        <Thumbnail style={styles.touxiang} size={80} source={require('./assets/woman.png')}/>
                                    </View>
                                    <Text>已孕阶段</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Content>
            </Container>
        )
    }
}
const styles = {
    bigBox:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    box:{
        width:280,
        height:500,
        paddingLeft:30
    },
    photo:{
        height:100,
        flexDirection:'row',
        alignItems:'center'

    },
    left:{
      width:100,
    },
    touxiang:{
        width:80,
        height:80,
        borderRadius:40,
    },
};
const mapStateToProps = state => ({});
export default connect(mapStateToProps)(WomanChoose);

