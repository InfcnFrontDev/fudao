import React, {PureComponent} from "react";
import {ToastAndroid,DatePickerAndroid} from "react-native";
import {Left, Right, Body, ListItem, Text, Icon} from "native-base";
import {dialogs} from "../../utils/";
import ImagePicker from "react-native-image-picker";
import chooseDate from "./chooseDate"
var photoOptions = {
    //底部弹出框选项
    title: '请选择',
    cancelButtonTitle: '取消',
    takePhotoButtonTitle: '拍照',
    chooseFromLibraryButtonTitle: '选择相册',
    quality: 0.75,
    allowsEditing: true,
    noData: false,
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
}


/**
 * InputType.TYPE_TEXT_VARIATION_VISIBLE_PASSWORD = 0x90
 * InputType.TYPE_CLASS_TEXT|InputType.TYPE_TEXT_VARIATION_PASSWORD = 0x81
 */
class MyInfoItem extends PureComponent {
    constructor(props) {
        super(props);
        this.state={
            showM:true,
            simpleText:"03/22/06",
        }
    }

    async showPicker(stateKey, options) {
        let option={
            options,
            mode:'spinner'
        }
        try {
            var newState = {};
            const {action, year, month, day} = await DatePickerAndroid.open(option);
            if (action === DatePickerAndroid.dismissedAction) {
                newState[stateKey + 'Text'] = 'dismissed';
            } else {
                var date = new Date(year, month, day);
                newState[stateKey + 'Text'] = date.toLocaleDateString();
                newState[stateKey + 'Date'] = date;
            }
            this.setState(newState);
        } catch ({code, message}) {
            console.warn(`Error in example '${stateKey}': `, message);
        }
    }

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
            case '我的头像':
                this.cameraAction();
                break;
            case '姓名':
                this.updateUsername(data);
                break;
            case '性别':
                this.updateSex(data);
                break;
            case '出生日期':
                this.showPicker();
                break;
            case '身高':
                this.updateStature(data);
                break;
            case '个人史':
                this.multiChoiceDialog('个人史',chooseDate.PersonalHistory);
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
    updateStature(data) {
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

    cameraAction = () => {
        // {data, fileName, fileSize, height, isVertical, originalRotation, path, type, uri, width}
        ImagePicker.showImagePicker(photoOptions, (response) => {
            console.log(response);
            if (response.didCancel) {
                return
            }
            this.setState({
                path: response.uri
            });
        })
    }



    multiChoiceDialog(title,chooseDate) {
        dialogs.showDialog({
            title: title,
            items:chooseDate,
            selectedIndices: [],
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