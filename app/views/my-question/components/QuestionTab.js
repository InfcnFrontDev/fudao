import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import Swiper from 'react-native-swiper'
import {ListItem, Text, Button, Tab, Tabs} from "native-base";
import {View,Image,ToastAndroid,DeviceEventEmitter} from "react-native";
import ScrollableTabView, {DefaultTabBar} from "react-native-scrollable-tab-view";
import TabListMeridian from "./TabListMeridian";
import TabListTreatment from "./TabListTreatment";

// import {theme} from "../../../utils/";
/**
* 问题Tab
*/
class QuestionTab extends PureComponent {
  constructor(props) {
    super(props);

  }

  render(){
    return (
      <ScrollableTabView
        style={styles.tabView}
        renderTabBar={() => <DefaultTabBar />}
        locked={false}
        tabBarUnderlineStyle ={{backgroundColor:'#A0CD01',height:4,}}
        tabBarTextStyle={{color:'#000',fontWeight:"400",}}
      >
        <TabListMeridian tabLabel='经络穴位'/>
        <TabListTreatment tabLabel='自疗方案'/>
      </ScrollableTabView>
    )
  }


}

const styles = {
  tabView: {
    flex: 1,
  },
};

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    closeDrawer: key => dispatch(closeDrawer()),
  };
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(QuestionTab);
