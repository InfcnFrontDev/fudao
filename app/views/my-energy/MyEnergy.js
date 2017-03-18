import React, {PureComponent} from "react";
import {View, Image, DeviceEventEmitter} from "react-native";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import { ListItem, Text, Left, Button, Icon, Body, Right} from "native-base";
import {Container, Header, Content, WebView} from "../../components/index";
import {theme} from "../../utils/";

/**
 * 我的能量场
 */
class MyEnergy extends PureComponent {

	render() {
		return (
			<Container>
				<Header {...this.props} />
				<Content>
					<WebView uri="http://echarts.baidu.com/examples.html"/>
				</Content>
			</Container>
		)
	}
}


const styles = {};

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(MyEnergy);
