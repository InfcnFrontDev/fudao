import React, {PureComponent} from "react";
import {View, Image, DeviceEventEmitter} from "react-native";
import {Container, Header, Content, WebView} from "../../components/index";

/**
 * 我的能量场
 */
export default class Energy extends PureComponent {

	render() {
		let city = "北京";
		let weather = "晴";
		let winp = "5级";
		let air_scope = "50-100";
		let uri = urls.pages.MY_ENERGY + "?city=" + city + "&weather=" + weather + "&winp=" + winp + "&air_scope=" + air_scope + "";
		return (
			<Container>
				<Header {...this.props} />
				<Content>
					<WebView uri={uri}/>
				</Content>
			</Container>
		)
	}
}


const styles = {
	View: {
		flexDirection: 'row',
		height: 80,
		justifyContent: 'space-around'
	},
	Btn: {
		marginTop: 30,
		width: 100,
		height: 30,
		justifyContent: 'center'
	}
};
