import React, {PureComponent} from "react";
import {TouchableOpacity, Image} from "react-native";
import {connect} from "react-redux";
import {Thumbnail, Text, View} from "native-base";
import {updateUserPhoto} from "../../../actions/user";
import {theme, urls} from "../../../utils/index";
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

// 默认头像
const defaultPhoto = require('../../../assets/my-photos/photo.jpg');

/**
 * my grid menu
 */
class MyPhoto extends PureComponent {

	render() {
		let {loginUser} = this.props;
		return (
			<Thumbnail source={require('../../../assets/my-covers/pic01.jpg')} style={styles.myCover}>
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
		let {dispatch, loginUser} = this.props;

		// {data, fileName, fileSize, height, isVertical, originalRotation, path, type, uri, width}
		ImagePicker.showImagePicker(photoOptions, (response) => {
			console.log(response);
			if (response.didCancel) {
				return;
			}
			// 上传并更新头像
			dispatch(updateUserPhoto(loginUser.appid, response.fileName, response.uri));
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
	loginUser: state.user.loginUser
});
export default connect(mapStateToProps)(MyPhoto);