import React, {PureComponent} from "react";
import { View, Image, Dimensions} from "react-native";
import {connect} from "react-redux";
import {Container, Left, Header, Icon, Right, Body,ListItem, Button, Title, Content, Text} from "native-base";
import {Actions} from "react-native-router-flux";
import {theme,urls} from "../../utils/";

class TreatmentDetail extends PureComponent {
  constructor(props){
    super(props);
  }

    render() {
      var content = this.props.data.details;
      var e=new RegExp('\n',"g");
      content = content.replace(e, '\n        ');
        return (
          <Container style={styles.container}>
            <Header>
                <Left>
                    <Button transparent onPress={()=>Actions.pop()}>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title style={styles.title}>{this.props.data.name}</Title>
                </Body>
                <Right>
                </Right>
            </Header>
            <Content style={styles.content}>
              <View style={styles.from}>
                  <Text>高血压 > 自疗方案 > {this.props.from=='日常'?'日常疗法':'专业疗法'} > {this.props.data.name}</Text>
              </View>
              <View style={styles.view}>
                  <Image source={this.props.data.img?{uri:urls.getImage('/'+this.props.renqun+this.props.data.img)}:require('../../assets/error.png')} style={styles.image}/>
                  <Text style={styles.contentText}>        {content}</Text>
              </View>
            </Content>
          </Container>
        )
    }
    // <Image source={require('../../assets/error.png')} style={styles.image}/>

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
    fontSize:theme.DefaultFontSize,
    marginLeft:30,
    marginRight:30,
    lineHeight:28,
  },
  image:{
    marginTop:20,
    marginBottom:20,
    width:Dimensions.get('window').width-40,
    height:200,
  }
}

const mapStateToProps = state => ({
  renqun:state.user.loginUser.renqun,
});
export default connect(mapStateToProps)(TreatmentDetail);
