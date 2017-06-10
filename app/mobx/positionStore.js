import {observable, asMap, action, runInAction} from "mobx";
import {persist} from "mobx-persist";
import {Geolocation} from "react-native-baidu-map";

class PositionStore {
	@persist('object') @observable currentPosition = {
		addressComponent: {
			adcode: "110108",
			country_code: 0,
			country: "中国",
			province: "北京市",
			city: "北京市",
			district: "海淀区",
			distance: "15",
			street: "中关村东路",
			direction: "附近",
			street_number: "66号院-甲1号楼-27层",
		},
		location: {
			lat: 39.99034788200354,
			lng: 116.34033501776993,
		}
	}
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