import React, {PureComponent} from "react";
import {View, Image, DeviceEventEmitter} from "react-native";
import {connect} from "react-redux";
import {Container, Header, Content} from "../../components/index";

/**
 * 我的能量场 > 问题调查
 */
class EnergyQuestionnaire extends PureComponent {

	render() {
		return (
			<Container>
				<Header {...this.props} />
				<Content>
				</Content>
			</Container>
		)
	}
}


const styles = {};

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(EnergyQuestionnaire);
