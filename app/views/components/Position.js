import React, {PureComponent} from "react";
import {observer} from "mobx-react/native";
import {Geolocation} from "react-native-baidu-map";
import positionStore from "../../mobx/positionStore";
import weatherStore from "../../mobx/weatherStore";

/**
 * 定位
 */
@observer
export default class Position extends PureComponent {

	watchID = '';

	render() {
		return null
	}

	componentDidMount() {
		let {dispatch} = this.props;
		// 获取当前位置
		navigator.geolocation.getCurrentPosition(
			(position) => this.updatePosition(position),
			(error) => positionStore.errorMsg = error.message,
			{enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
		);

		// 监听位置变化
		this.watchID = navigator.geolocation.watchPosition((position) => {
			// positionStore.lastPosition = position
			this.updatePosition(position)
		});
	}

	updatePosition(position) {
		Geolocation.getCurrentPosition()
			.then(data => {
				console.log(data);
				positionStore.currentPosition = data
				weatherStore.fetchCurrentWeather(data.city)
			})
			.catch(e => {
				console.warn(e, 'error');
			})
	}


	componentWillUnmount() {
		// 清除监听器
		navigator.geolocation.clearWatch(this.watchID);
	}
}