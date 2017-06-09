import React, {PureComponent} from "react";
import {View, Image, DeviceEventEmitter} from "react-native";
import {Container, Header, Content, WebView} from "../../components/index";
import userStore from "../../mobx/userStore";
import weatherStore from "../../mobx/weatherStore";

/**
 * 我的能量场
 */
export default class Energy extends PureComponent {
	componentWillMount(){
		userStore.getposition();
		let m='';

		if(userStore.location.addressComponent){
			m=userStore.location.addressComponent.city
		}else{
			m="北京市"
		}
		weatherStore.fetchCurrentWeather(m);

	}

	render() {
		let {location} = userStore;
		let {currentWeather} = weatherStore;
		let m='';
		if(location.addressComponent){
			m=location.addressComponent.city+'.'+location.addressComponent.district
		}else{
			m='北京市';
		}
		let city = m;
		let weather = currentWeather.weather;
		let winp = currentWeather.winp;
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
