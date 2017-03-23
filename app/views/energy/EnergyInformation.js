import React, {PureComponent} from "react";
import {View, Image, DeviceEventEmitter} from "react-native";
import {connect} from "react-redux";
import {Container, Header, Content, WebView} from "../../components/index";

/**
 * 我的能量场 > 资料填写
 */
class EnergyQuestionnaire extends PureComponent {

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
export default connect(mapStateToProps)(EnergyQuestionnaire);
