import {observable, asMap, action, runInAction} from "mobx";
import {persist} from "mobx-persist";
import {Geolocation} from "react-native-baidu-map";

class PositionStore {
	@persist('object') @observable currentPosition = {}
	@observable errorMsg = ''

	@action
	fetchCurrentPosition(callback) {
		// 获取当前位置
		Geolocation.getCurrentPosition()
			.then(result => {
				console.log(result);
				this.currentPosition = result
				callback(result)
			})
			.catch(error => {
				this.errorMsg = error
			})
	}
}

const positionStore = new PositionStore()
export default positionStore
hydrate('position', positionStore).then(() => {
	positionStore.hydrated = true
	console.log('position hydrated', positionStore)
})