import {observable, asMap, action, runInAction} from "mobx";
import {persist} from "mobx-persist";

class PositionStore {
	@persist('object') @observable currentPosition = {}
	@observable errorMsg = ''
}

const positionStore = new PositionStore()
export default positionStore
hydrate('position', positionStore).then(() => {
	positionStore.hydrated = true
	console.log('position hydrated', positionStore)
})