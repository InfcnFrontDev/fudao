import {observable, asMap, action, runInAction} from "mobx";
import {persist} from "mobx-persist";

class WeatherStore {
	@persist('object') @observable currentWeather = {}
	@persist('object') @observable pm25 = {}

	@action
	fetchCurrentWeather = async(weaid) => {
		weaid = weaid.replace('市', '');
		try {
			const result = await this._fetchCurrentWeather(weaid)
			runInAction(() => {
				this.currentWeather = result
			})
		} catch (error) {
			console.error(error);
		}
	}

	_fetchCurrentWeather(weaid) {
		return new Promise((resolve, reject) => {
			request.getJson(urls.apis.WEATHER_GETWEATHER, {
				weaid
			}).then((result) => {
				if (result.ok) {
					resolve(result.obj)
				}
			})
		})
	}

	@action
	fetchPm25 = async(weaid) => {
		weaid = weaid.replace('市', '');
		try {
			const result = await this._fetchPm25(weaid)
			runInAction(() => {
				this.pm25 = result
			})
		} catch (error) {
			console.error(error);
		}
	}

	_fetchPm25(weaid) {
		return new Promise((resolve, reject) => {
			request.getJson(urls.apis.WEATHER_GETPM25, {
				weaid
			}).then((result) => {
				console.log(result)
				if (result.ok) {
					resolve(result.obj)
				}
			})
		})
	}


}

const weatherStore = new WeatherStore()
export default weatherStore
hydrate('weather', weatherStore).then(() => {
	weatherStore.hydrated = true
	console.log('weather hydrated', weatherStore)
})