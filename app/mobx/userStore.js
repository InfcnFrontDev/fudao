import {observable, runInAction, computed, action, reaction} from "mobx";
import {AsyncStorage} from "react-native";
import {persist} from "mobx-persist";
import hydrate from "../common/hydrate";


class User {

}


class UserStore {
	@observable hydrated = false
	@persist @observable isLogin = false
	@persist @observable phone = ''
	@persist @observable password = ''
	@persist @observable token = ''
	@persist('object') @observable loginUser = {}

	@action
	login = async(phone, password, callback) => {
		this.phone = phone;
		this.password = password;

		let token = await this._login(phone, password);
		runInAction(() => {
			this.isLogin = true;
			this.token = token;
			// this.saveData();
			callback();
		})
	}

	@action
	relogin = (callback) => {
		this.login(this.phone, this.password, callback)
	}

	@action
	fetchLoginUser = async() => {
		let loginUser = await this._fetchLoginUser();
		runInAction(() => {
			this.loginUser = loginUser;
			// this.saveData();
		})
	}

	_login(phone, password) {
		return new Promise(function (resolve, reject) {
			request.getJson(urls.apis.USER_LOGIN, {
				phone,
				password
			}).then((data) => {
				if (data.ok) {
					tools.showToast("登录成功");
					resolve(data.obj);
				} else {
					tools.showToast("用户名或密码错误");
				}
			});
		});
	}


	_fetchLoginUser() {
		return new Promise(function (resolve, reject) {
			request.getJson(urls.apis.USER_GETLOGINUSER)
				.then((data) => {
					if (data.ok) {
						resolve(data.obj);
					}
				});
		});
	}

	@action
	updateUserPhoto(uri, fileName) {
		let formData = new FormData();
		formData.append("filename", {
			uri: uri,
			type: 'multipart/form-data',
			name: fileName
		});

		request.postJson(urls.apis.IMAGE_UPLOAD, formData)
			.then(result => {
				if (result.ok) {
					// 修改图片路径
					this.updateUserInfo('photo', result.obj)
				} else {
					tools.showToast("上传失败")
				}
			})
	}

	@action
	updateUserInfo(fieldName, value) {

		let user0 = {...this.loginUser};
		user0[fieldName] = value;
		this.loginUser = user0;

		request.getJson(urls.apis.USERAPI_UPDATEUSERINFO, {
			fieldName,
			value
		}).then(result => {
			if (result.ok) {
				let user0 = {...this.loginUser};
				user0[fieldName] = value;
				this.loginUser = user0;
			} else {
				tools.showToast("修改失败")
			}
		})
	}
	@action
	userInfo(obj) {
		this.loginUser=obj;
	}
}


const userStore = new UserStore()
export default userStore
hydrate('user', userStore).then(() => {
	userStore.hydrated = true
	console.log('user hydrated', userStore)
})