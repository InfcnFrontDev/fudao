//noinspection JSAnnotator
import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Container, Title, Content, Left, Right, Body, Form, Input, Item,Thumbnail,Button,Text,Icon} from "native-base";
import {View,Image,TouchableOpacity,TouchableHighlight,ToastAndroid} from "react-native";
import Header from "../../components/header/title";
import {openDrawer, closeDrawer} from "../../actions/drawer";
import styles from "./styles";



/**
 * 首次登录设置个人信息页
 */
class StartInformation extends PureComponent {
    constructor(props) {
        super(props);
        this.state={
            show:'false'
        }
    }

    render() {
        if(this.state.show){
            mb1 = (
                <View style={mb}></View>
            )
        }
        return (
            <Container style={styles.container}>
                <Header></Header>
                <Content padder >
                    <View style={styles.bigBox}>
                        <View style={styles.box}>
                            <View style={styles.photo}>
                                <TouchableOpacity onPress={()=>{
                                    this.setState({
                                        show:'true'
                                    })
                                }}>
                                    {mb1}
                                    <Thumbnail style={styles.touxiang} size={80} source={require('../../assets/my-photos/photo.jpg')}/>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    {mb2}
                                    <Thumbnail style={styles.touxiang} size={80} source={require('../../assets/my-photos/photo.jpg')}/>
                                </TouchableOpacity>

                            </View>
                            <View  style={styles.row1}>
                                <Text style={styles.text}>请选择出生日</Text>
                                <View style={{height:200}}></View>
                            </View>
                            <View style={styles.pop}>
                                <TouchableOpacity style={styles.btn}>
                                    <Icon  name='navigate' />
                                    <Text  style={styles.text2}>正在定位你的位置...</Text>
                                </TouchableOpacity>
                            </View>
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

