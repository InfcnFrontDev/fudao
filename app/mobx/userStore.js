import {observable, runInAction, computed, action, reaction} from "mobx";
import {Actions, ActionConst} from "react-native-router-flux";
import {AsyncStorage} from "react-native";
import {persist} from "mobx-persist";
import hydrate from "../common/hydrate";


class UserStore {
	@observable hydrated = false
	@persist @observable isLogin = false
	@persist @observable phone = ''
	@persist @observable password = ''
	@persist @observable token = ''
	@observable position = {
		name:'',
		regionId:''
	}
	@persist('object') @observable loginUser = {};
	@persist('object') @observable location = {}



	fieldMap = {
		'personalHistory': 'personal_history',
		'familyHistory': 'family_history',
		'obstetricalHistory': 'obstetrical_history',
		'medicationHistory': 'medication_history',
		'mentalState': 'mental_state',
	}


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
				if(!this.loginUser.sex){
					Actions.startInformation({phone:this.loginUser.phone,password:this.loginUser.password})
				}else{
					Actions.index({
						type: ActionConst.POP_AND_REPLACE,
					});
				}
		})
	}
	@action
	fetchLoginUserBase = async() => {
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
	updateUserInfo(property, value) {
		let user0 = {...this.loginUser};
		user0[property] = value;
		this.loginUser = user0;

		request.getJson(urls.apis.USER_UPDATEUSERINFO, {
			fieldName: this.fieldMap[property] || property,
			value
		}).then(result => {
			if (result.ok) {
				// ...
			} else {
				tools.showToast("修改失败");
			}
		})
	}
	@action
	logout() {
		this.isLogin = false;
	}
}


const userStore = new UserStore();
export default userStore
hydrate('user', userStore).then(() => {
	userStore.hydrated = true;
	console.log('user hydrated', userStore)
});