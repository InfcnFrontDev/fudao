import React, {PureComponent} from "react";
import {View, Image, DeviceEventEmitter} from "react-native";
import {Container, Header, Content, WebView} from "../../components/index";

/**
 * 我的能量场
 */
export default class Energy extends PureComponent {

	render() {
		return (
			<Container>
				<Header {...this.props} />
				<Content>
					<WebView uri={urls.pages.MY_ENERGY}/>
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
