import React, {PureComponent} from "react";
import {TouchableOpacity, Image} from "react-native";
import {connect} from "react-redux";
import {Thumbnail, Text} from "native-base";
import {updateUserPhoto} from "../../../actions/user";
import {theme, request, urls, toast} from "../../../utils/index";
import ImagePicker from "react-native-image-picker"; //第三方相机
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
 * my grid menu
 */
class MyPhoto extends PureComponent {

	state = {
		photo: require('../../../assets/my-photos/photo.jpg'),
		path: null
	}

	render() {
		let {photo, path} = this.state,
			{loginUser} = this.props;
		return (
			<Thumbnail source={require('../../../assets/my-covers/pic01.jpg')} style={styles.myCover}>
				<TouchableOpacity activeOpacity={1} onPress={()=> this.cameraAction()}>
					<Image style={styles.myPhoto}
						   source={loginUser.img ? {uri: urls.getImage(loginUser.img,300,300)} : photo}/>
					<Text>{loginUser.img}</Text>
				</TouchableOpacity>
			</Thumbnail>
		)
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

			this.uploadImage(response.uri, response.fileName);
		})
	}

	uploadImage(uri, fileName) {
		let {dispatch, loginUser} = this.props;
		dispatch(updateUserPhoto(loginUser.appid, fileName, uri));
		return;

		let formData = new FormData();
		formData.append("filename", {uri: uri, type: 'multipart/form-data', name: fileName});

		request.postJson(urls.apis.IMAGE_UPLOAD, formData)
			.then((result => {
				if (result.ok) {
					console.log(result.obj);
					toast.show("上传成功")
					// 修改图片路径
					this.updateImage(result.obj);
				} else {
					toast.show("上传失败")
				}
			}).bind(this))
	}

	updateImage(path) {
		let {loginUser} = this.props;
		let jsonStr = JSON.stringify({
			"tableName": "userinformation",
			"appid": loginUser.appid,
			"field": "img",
			"value": path
		});

		request.postText(urls.apis.USER_UPDATE, {
			jsonStr
		})
			.then(result => {
				console.log(result);
				if (result.success) {
					toast.show("修改成功")
				} else {
					toast.show("修改失败")
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

const mapStateToProps = state => ({
	loginUser: state.userStore.loginUser
});
export default connect(mapStateToProps)(MyPhoto);