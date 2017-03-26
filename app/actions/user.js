import * as types from "../actions/types";
import {request, urls, toast} from "../utils/index";
// 登录
export function login(loginUser) {
	return (dispatch) => {
		dispatch({
			type: types.USER_LOGIN,
			payload: {
				loginUser
			}
		});
	}
}
// 注销
export function logout() {
	return (dispatch) => {
		dispatch({
			type: types.USER_LOGOUT
		});
	}
}

// 修改头像
export function updateUserPhoto(appid, fileName, uri) {
	return (dispatch) => {
		let formData = new FormData();
		formData.append("filename", {
			uri: uri,
			type: 'multipart/form-data',
			name: fileName
		});

		request.postJson(urls.apis.IMAGE_UPLOAD, formData)
			.then(result => {
				if (result.ok) {
					console.log(result.obj);
					toast.show("上传成功")

					// 修改图片路径
					dispatch(updateUserInfo(appid, 'img', result.obj));
				} else {
					toast.show("上传失败")
				}
			})
	}
}

// 修改基本信息
export function updateUserInfo(appid, field, value) {
	return (dispatch) => {
		let jsonStr = JSON.stringify({
			tableName: "userinformation",
			appid,
			field,
			value
		});
		request.postJson(urls.apis.USER_UPDATE, {
			jsonStr
		}).then(result => {
			console.log(result);
			if (result.success) {

				dispatch({
					type: types.USER_UPDATE_INFO,
					payload: {
						field,
						value
					}
				});
			}
		})
	}
}

// 修改体检信息

export function updateUserCheck(appid, field, tableName, value) {
	return (dispatch) => {
		let jsonStr1 = {
			tableName: tableName,
			jsonStr: {
				appid: appid
			}
		};
		jsonStr1.jsonStr[field] = value;
		let jsonS = JSON.stringify(jsonStr1)

		dispatch({
			type: types.USER_UPDATE_CHECK,
			payload: {
				tableName,
				field,
				value
			}
		});
	}


}