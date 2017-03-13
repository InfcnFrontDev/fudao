import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {updatePosition} from "../../actions/position";


/**
 * 定位
 */
class Home extends PureComponent {

	watchID = '';

	render() {
		return null
	}

	componentDidMount() {
		let {dispatch} = this.props;
		// 获取当前位置
		navigator.geolocation.getCurrentPosition(
			(position) => dispatch(updatePosition(position)),
			(error) => console.log(error.message),
			{enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
		);

		// 监听位置变化
		this.watchID = navigator.geolocation.watchPosition((position) => {
			dispatch(updatePosition(position));
		});
	}


	componentWillUnmount() {
		// 清除监听器
		navigator.geolocation.clearWatch(this.watchID);
	}
}

const mapStateToProps = state => ({
	...state.position,
});
export default connect(mapStateToProps)(Home);