import React, {PureComponent} from "react";
import {ScrollView, ListView, View,ToastAndroid,Dimensions} from "react-native";
import {Left, Right, Body, Form, Item, Text} from "native-base";
import {urls} from "../../../utils/index"
import {Content, WebView} from "../../../components/index";


class TabListMeridian extends PureComponent {

    render() {
      var question = encodeURI(encodeURI(this.props.question));
        return (
          <View style={styles.tablist}>
              <WebView uri={urls.pages.MY_QUESTION_PERSON+"?question="+this.props.question}/>
          </View>
        )
    }
}

const styles ={
  tablist:{
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height-150,
    // flex:1,
    // height:400,
  }
}
export default (TabListMeridian);
