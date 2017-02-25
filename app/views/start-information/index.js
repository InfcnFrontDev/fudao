//noinspection JSAnnotator
import React, {Component} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Container, Title, Content, Left, Right, Body, Form, Input, Item,Thumbnail,Button,Text} from "native-base";
import {View,Image} from "react-native";
import Header from "./base";
import {openDrawer, closeDrawer} from "../../actions/drawer";
import styles from "./styles";



/**
 * 主页
 */
class Home extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Container style={styles.container}>
                <Header></Header>
                <Content padder>
                    <View style={styles.row}>
                        <View  style={styles.left}>
                            <Text>您的性别</Text>
                        </View>

                        <View style={styles.right}>
                            <Thumbnail  size={80} source={require('../../assets/my-photos/photo.jpg')}/>
                            <Thumbnail  size={80} source={require('../../assets/my-photos/photo.jpg')}/>
                        </View>

                    </View>
                    <View  style={styles.row}>
                        <Text>您的生日</Text>
                        <View style={{height:200}}></View>
                    </View>
                    <View  style={styles.row}>
                        <Text>您的位置</Text>
                        <View style={{height:100}}></View>
                    </View>
                    <Button block success>
                        <Text>提交</Text>
                    </Button>
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
export default connect(mapStateToProps, bindAction)(Home);

