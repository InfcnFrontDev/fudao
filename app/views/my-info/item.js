import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {ToastAndroid,DatePickerAndroid} from "react-native";
import {Left, Right, Body, ListItem, Text, Icon} from "native-base";
import {dialogs} from "../../utils/";
import ImagePicker from "react-native-image-picker";
import chooseDate from "./chooseDate";
import {request, urls} from "../../utils/";
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
                this._onFetch()
                break;
            case '家族史':
                this.multiChoiceDialog('家族史',chooseDate.FamilyHistory);
                break;
            case '婚育史':
                this.multiChoiceDialog('婚育史',chooseDate.ObstericalHistory);
                break;
            case '用药史':
                this.multiChoiceDialog('用药史',chooseDate.PharmacyHistory);
                break;
            case '饮食':
                this.multiChoiceDialog('饮食',chooseDate.Diet);
                break;
            case '运动':
                this.multiChoiceDialog('运动',chooseDate.Exercise);
                break;
            case '睡眠':
                this.multiChoiceDialog('睡眠',chooseDate.Sleep);
                break;
            case '吸烟':
                this.multiChoiceDialog('吸烟',chooseDate.Smoke);
                break;
            case '饮酒':
                this.multiChoiceDialog('饮酒',chooseDate.Drink);
                break;
            case '精神状况':
                this.multiChoiceDialog('精神状况',chooseDate.MentalState);
                break;
        }

    }
    _onFetch() {
        
        let {loginUser,data} = this.props;
        alert(''+data+'');
        /*request.getJson(urls.apis.USER_UPDATE, {
            appid: loginUser.appid,
            tableName:"userinformation",
            field:key,
            value:val

        }).then((result) => {
            alert(result)
        });*/
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
const mapStateToProps = state => ({
    loginUser: state.userStore.loginUser
});

export default connect(mapStateToProps)(MyInfoItem);