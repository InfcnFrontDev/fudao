import {AsyncStorage} from "react-native";

class Store {

	getItem = async(key) => {
		let itemStr = await this._getItemStr(key);
		let item = {};
		item = JSON.parse(itemStr);
		return item;
	}

	_getItemStr = (key) => {
		return new Promise((resolve, reject) => {
			try {
				AsyncStorage.getItem(key, (error, result) => {
					if (error) {
						console.log('取值失败:' + error);
						reject('取值失败！');
					} else {
						console.log('取值成功:' + result);
						resolve(result);
					}
				})
			} catch (error) {
				console.log('取值失败' + error);
				reject('取值失败');
			}
		})
	}

	setItem(key, item) {
		let itemStr = '';
		itemStr = JSON.stringify(item);
		try {
			AsyncStorage.setItem(key, itemStr, (error) => {
				if (error) {
					console.log('存值失败:', error);
				} else {
					console.log('存值成功!');
				}
			});
		} catch (error) {
			console.log('存值失败' + error);
		}
	}
}
const store = new Store();
export default store;