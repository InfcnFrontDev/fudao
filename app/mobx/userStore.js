import {observable, runInAction, computed, action, reaction} from "mobx";
import {request, urls, toast, storage} from "../utils/index";

class UserStore {
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
			this.token = token;
			callback();
			this.saveData();
		})
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
					toast.show("登录成功");
					resolve(data.obj);
				} else {
					toast.show("用户名或密码错误");
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
			this.token = ret.token;
			this.phone = ret.phone;
			this.password = ret.password;
			this.loginUser = ret.loginUser;
			callback()
		});
	}

	saveData() {
		storage.save({
			key: 'user',
			rawData: {
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