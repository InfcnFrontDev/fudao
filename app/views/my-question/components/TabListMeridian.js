import React, {PureComponent} from "react";
import {ScrollView, ListView, View,ToastAndroid} from "react-native";
import {Left, Right, Body, Form, Item, Text} from "native-base";
import {urls} from "../../../utils/index"
import {Content, WebView} from "../../../components/index";


class TabListMeridian extends PureComponent {

    render() {
      var question = encodeURI(encodeURI(this.props.question));
        return (
          <Content style={styles.tablist}>
              <WebView uri={urls.pages.MY_QUESTION_PERSON+"?question="+this.props.question}/>
          </Content>
        )
    }
}

const styles ={
  tablist:{
    minHeight:400,
    backgroundColor:'#ff0',
    // height:400,
  }
}
export default (TabListMeridian);
