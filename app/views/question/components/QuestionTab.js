import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import Swiper from 'react-native-swiper'
import {ListItem, Text, Button, Tab, Tabs} from "native-base";
import {View, Image, ToastAndroid, DeviceEventEmitter} from "react-native";
import ScrollableTabView, {DefaultTabBar} from "react-native-scrollable-tab-view";
import TabListMeridian from "./TabListMeridian";
import TabListTreatment from "./TabListTreatment";

/**
 * 问题Tab
 */
class QuestionTab extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        let {question, url,module} = this.props;
        if (question) {
            return (
                <ScrollableTabView
                    style={styles.tabView}
                    renderTabBar={() => <DefaultTabBar />}
                    locked={false}
                    tabBarUnderlineStyle={{backgroundColor: '#A0CD01', height: 4,}}
                    tabBarTextStyle={{color: '#000', fontWeight: "400",}}
                >
                    <TabListMeridian tabLabel='经络穴位' diseaseName={question.showVal}/>
                    <TabListTreatment tabLabel='自疗方案' question={question} url={url} module={module}/>
                </ScrollableTabView>
            )
        }
        return null;
    }
}

const styles = {
    tabView: {
        flex: 1,
    },
};

QuestionTab.propsTypes = {
    question: React.PropTypes.object,
    url: React.PropTypes.array,
    module: React.PropTypes.string

};
QuestionTab.defaultProps = {
    question: {},
    url: [],
    module: '',
};

export default (QuestionTab);
