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
					utils.showToast("登录成功");
					resolve(data.obj);
				} else {
					utils.showToast("用户名或密码错误");
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