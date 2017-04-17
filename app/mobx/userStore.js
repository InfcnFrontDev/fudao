import {observable, runInAction, computed, action, reaction} from "mobx";
import {request, urls, toast} from "../utils/index";

let index = 0

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
		})
	}

	@action
	fetchLoginUser = async() => {
		let loginUser = await this._fetchLoginUser();
		runInAction(() => {
			this.loginUser = loginUser;
		})
	}

	_login(phone, password) {
		return new Promise(function (resolve, reject) {
			request.getJson(urls.apis.USER_LOGIN, {
				phone,
				password
			}).then((data) => {
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
}


const userStore = new UserStore()
export default userStore