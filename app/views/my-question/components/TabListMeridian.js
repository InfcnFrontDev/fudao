import React, {PureComponent} from "react";
import {ScrollView, ListView, View} from "react-native";
import {Left, Right, Body, Form, Item, Text} from "native-base";
import {urls} from "../../../utils/index"
import {Content, WebView} from "../../../components/index";


class TabListMeridian extends PureComponent {

    render() {
        return (
          <Content style={styles.tablist}>
              <WebView uri={urls.pages.MY_QUESTION_PERSON}/>
          </Content>
        )
    }
}

const styles ={
  tablist:{
    minHeight:350,
    backgroundColor:'#ff0',
    height:400,
  }
}
export default (TabListMeridian);
