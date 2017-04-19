import {observable, runInAction, computed, action, reaction} from "mobx";

class UserStore {
	@observable isLogin = false
	@observable phone = ''
	@observable password = ''
	@observable token = ''
	@observable loginUser = {}

	@action
	login = async(phone, password, callback) => {
		this.phone = phone;
		this.password = password;

		let token = await this._login(phone, password);
		runInAction(() => {
			this.isLogin = true;
			this.token = token;
			this.saveData();
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
			this.saveData();
		})
	}

	_login(phone, password) {
		return new Promise(function (resolve, reject) {
			request.getJson(urls.apis.USER_LOGIN, {
				phone,
				password
			}).then((data) => {
				console.log(data)
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
		request.getJson(urls.apis.USERAPI_UPDATEUSERINFO, {
			fieldName,
			value
		}).then(result => {
			if (result.ok) {
			} else {
				tools.showToast("修改失败")
			}
		})
	}


	loadData(callback) {
		storage.load({
			key: 'user',
		}).then(ret => {
			this.isLogin = ret.isLogin;
			this.token = ret.token;
			this.phone = ret.phone;
			this.password = ret.password;
			this.loginUser = ret.loginUser;
			callback()
		}).catch(() => {
			callback()
		});
	}

	saveData() {
		storage.save({
			key: 'user',
			rawData: {
				isLogin: this.isLogin,
				phone: this.phone,
				password: this.password,
				token: this.token,
				loginUser: this.loginUser
			}
		})
	}
}


const userStore = new UserStore()
export default userStore