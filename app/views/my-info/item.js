import React, {PureComponent} from "react";
import {ToastAndroid} from "react-native";
import {Left, Right, Body, ListItem, Text, Icon} from "native-base";
import {dialogs} from "../../utils/";


/**
 * InputType.TYPE_TEXT_VARIATION_VISIBLE_PASSWORD = 0x90
 * InputType.TYPE_CLASS_TEXT|InputType.TYPE_TEXT_VARIATION_PASSWORD = 0x81
 */
class MyInfoItem extends PureComponent {

    render() {
        let {data} = this.props;
        return (
            <ListItem icon onPress={()=>this.onPressItem()}>
                <Body>
                <Text>{data.text}</Text>
                </Body>
                <Right>
                    <Text note>{data.note}</Text>
                    <Icon active name="ios-arrow-forward"/>
                </Right>
            </ListItem>
        );
    }

    onPressItem() {
        let {data} = this.props;

        switch (data.text) {
            case '姓名':
                this.updateUsername(data);
                break;
            case '性别':
                this.updateSex(data);
                break;
            case '出生日期':

                break;
            case '身高':

                break;
        }

    }


    updateSex(data) {
        dialogs.showDialog({
            title: data.text,
            items: [
                "男",
                "女"
            ],
            selectedIndex: 0,
            itemsCallbackSingleChoice: (id, text) => ToastAndroid.show(id + ": " + text, ToastAndroid.SHORT)
        })
    }

    updateUsername(data) {
        dialogs.showDialog({
            title: data.text,
            input: {
                hint: 'User Name',
                prefill: '',
                allowEmptyInput: false,
                maxLength: 10,
                callback: (id, text) => ToastAndroid.show(id + ": " + text, ToastAndroid.SHORT),
            }
        });
    }

    multiChoiceDialog() {
        dialogs.showDialog({
            title: "性别",
            items: [
                "男",
                "女",
                "男",
                "女",
                "男",
                "女",
                "男",
                "女",
                "男",
                "女",
                "男",
                "女",
                "男",
                "女",
                "男",
                "女",
                "男",
                "女",
                "男",
                "女",
                "男",
                "女",
                "男",
                "女",
                "男",
                "女",
            ],
            selectedIndices: [0, 1],
            positiveText: "确定",
            itemsCallbackMultiChoice: (id, text) => ToastAndroid.show(id + ": " + text, ToastAndroid.SHORT),
        })
    }
}

MyInfoItem.propTypes = {
    data: React.PropTypes.object,
}

MyInfoItem.defaultProps = {
    data: null,
}

export default (MyInfoItem);