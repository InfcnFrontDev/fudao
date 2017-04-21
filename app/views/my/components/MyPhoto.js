import React, {PureComponent} from "react";
import {TouchableOpacity, Image} from "react-native";
import {Thumbnail, Text, View} from "native-base";
import ImagePicker from "react-native-image-picker"; //第三方相机
import userStore from "../../../mobx/userStore";

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

// 默认头像
const defaultPhoto = require('../../../assets/my-photos/photo.jpg');

/**
 * 我的封面
 */
export default class MyPhoto extends PureComponent {

	render() {
		let {loginUser} = userStore;
		return (
			<Thumbnail source={require('../../../assets/bg/my.jpg')} style={styles.myCover}>
				<View style={{flexDirection: 'column', alignItems: 'center'}}>
					<TouchableOpacity activeOpacity={1} onPress={()=> this.cameraAction()}>
						<Image style={styles.myPhoto}
							   source={loginUser.img ? {uri: urls.getImage(loginUser.img, 300, 300)} : defaultPhoto}/>
					</TouchableOpacity>
					<Text style={{marginTop: 10, color: '#FFF'}}>{loginUser.title}</Text>
				</View>
			</Thumbnail>
		)
	}

	cameraAction = () => {
		// {data, fileName, fileSize, height, isVertical, originalRotation, path, type, uri, width}
		ImagePicker.showImagePicker(photoOptions, (response) => {
			console.log(response);
			if (response && response.fileName && response.uri) {
				// 上传并更新头像
				userStore.updateUserPhoto(response.uri, response.fileName);
			}
		})
	}
}

const styles = {
	myCover: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		width: theme.deviceWidth + 3,
		height: 180,
	},
	myPhoto: {
		width: 100,
		height: 100,
		borderRadius: 50,
	},
};