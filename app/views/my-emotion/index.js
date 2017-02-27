//noinspection JSAnnotator
import React, {PureComponent} from "react";

import {connect} from "react-redux";
import {Container, Header, Title, Content, ListItem, Text, Left, Button, Icon, Body, Right} from "native-base";
import {View,Image,DeviceEventEmitter} from "react-native";
import {openDrawer, closeDrawer} from "../../actions/drawer";
import styles from "./styles";
import ItemEmotion from './item-emotion';
import {Actions} from "react-native-router-flux";

/**
 * 我的情绪
 */
class MyEmotion extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          emotion:{
            name:'pingjing',
            title:'平静',
            img:require('../../assets/my-emotion/5pingjing.png')
          }
        }
    }


    render() {
        return (
            <Container style={styles.container}>
              <Header>
                <Left>
                  <Button transparent onPress={()=>Actions.pop()}>
                    <Icon name='arrow-back' />
                  </Button>
                </Left>
                <Body>
                  <Title>{this.props.title}</Title>
                </Body>
                <Right style={styles.right}>
                <View  style={styles.selectedEmotion}>
                  <Image source ={this.state.emotion.img} style={styles.selectedEmotionImg}/>
                  <Text style={styles.selectedEmotionTitle}>{this.state.emotion.title}</Text>
                </View>
                </Right>
              </Header>
                <Content style={styles.content}>
                   <ListItem itemDivider style={styles.divideList}>
                       <Text style={styles.divideTitle}>积极向上，朵朵小太阳</Text>
                   </ListItem>
                   <ItemEmotion type='good' />
                   <ListItem itemDivider style={styles.divideList}>
                       <Text style={styles.divideTitle}>清风徐来，水波不兴</Text>
                   </ListItem>
                   <ItemEmotion type='calm' />
                   <ListItem itemDivider style={styles.divideList}>
                       <Text style={styles.divideTitle}>月落乌啼霜满天</Text>
                   </ListItem>
                   <ItemEmotion type='bad' />

               </Content>
            </Container>
        )
    }

    componentDidMount(){
      DeviceEventEmitter.addListener('change',(p)=>{
        if(p.name!=this.state.emotion.name){
          this.setState({
            emotion:p,
            date:new Date(),
          })
        }
      })
    }
}
function bindAction(dispatch) {
    return {
        openDrawer: () => dispatch(openDrawer()),
        closeDrawer: key => dispatch(closeDrawer()),
    };

}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(MyEmotion);
