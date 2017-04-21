import React, {PureComponent} from "react";
import {observer} from "mobx-react/native";
import positionStore from "../../mobx/positionStore";

/**
 * 定位
 */
@observer
export default class Home extends PureComponent {

	watchID = '';

	render() {
		return null
	}

	componentDidMount() {
		let {dispatch} = this.props;
		// 获取当前位置
		navigator.geolocation.getCurrentPosition(
			(position) => positionStore.lastPosition = position,
			(error) => positionStore.errorMsg = error.message,
			{enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
		);

		// 监听位置变化
		this.watchID = navigator.geolocation.watchPosition((position) => {
			positionStore.lastPosition = position
		});
	}


	componentWillUnmount() {
		// 清除监听器
		navigator.geolocation.clearWatch(this.watchID);
	}
}