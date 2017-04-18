import React, {PureComponent} from "react";
import {ScrollView, ListView, View,ToastAndroid,Dimensions} from "react-native";
import {Left, Right, Body, Form, Item, Text} from "native-base";
import {urls} from "../../../utils/index"
import {Content, WebView} from "../../../components/index";


class TabListMeridian extends PureComponent {

    render() {
        let {diseaseName} = this.props;
        return (
            <View style={styles.tablist}>
                <WebView uri={urls.pages.MY_QUESTION_PERSON+"?question="+diseaseName}/>
            </View>
        )
    }
}

const styles ={
    tablist:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height-150,
    }
}

TabListMeridian.propTypes = {
    diseaseName: React.PropTypes.string,
}

TabListMeridian.defaultProps = {
    diseaseName: '痴呆'
}


export default (TabListMeridian);
