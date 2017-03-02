import React, {PureComponent} from "react";
import { View, Image} from "react-native";
import {Container, Left, Header, Icon, Right, Body,ListItem, Button, Title, Content, Text} from "native-base";
import {Actions} from "react-native-router-flux";
import {theme} from "../../utils/";

class TreatmentDetail extends PureComponent {
  constructor(props){
    super(props);
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
                    <Title style={styles.title}>{this.props.pageTitle}</Title>
                </Body>
                <Right>
                </Right>
            </Header>
            <Content style={styles.content}>
              <View style={styles.from}>
                  <Text>高血压 > 自疗方案 > 专业疗法 > {this.props.pageTitle}</Text>
              </View>
              <View style={styles.view}>
                  <Image source={require('../../assets/error.png')} style={styles.image}/>
                  <Text style={styles.contentText}>        小时候和我妈去裁缝店，我妈指着电熨斗说：“这东西很烫，千万不要用手碰！” 我很听话，没用手碰，我舔了一下。 那感觉比冬天舔黑龙江漠河北极村的铁栏杆还带劲！</Text>
                  <Text style={styles.contentText}>        小时候和我妈去裁缝店，我妈指着电熨斗说：“这东西很烫，千万不要用手碰！” 我很听话，没用手碰，我舔了一下。 那感觉比冬天舔黑龙江漠河北极村的铁栏杆还带劲！</Text>
              </View>
            </Content>
          </Container>
        )
    }

}

const styles = {
  container:{
    backgroundColor:'#fff',
  },
  content:{
    backgroundColor:'#fff',
    flexDirection:'column',
  },
  from:{
    backgroundColor:'#F0F0F0',
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:26,
  },
  view:{
     flex:1,
     flexDirection:'column',
     justifyContent:'center',
     alignItems:'center',
  },
  contentText:{
    fontSize:theme.DefaultFontSize+2,
    marginLeft:30,
    marginRight:30,
    lineHeight:28,
  },
  image:{
    marginTop:20,
    marginBottom:20,
  }
}

export default (TreatmentDetail);
