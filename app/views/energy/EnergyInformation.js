import React, {PureComponent} from "react";
import {View, Image, DeviceEventEmitter} from "react-native";
import {connect} from "react-redux";
import {Container, Header, Content} from "../../components/index";
import {Button, Text} from "native-base";
import GroupSelectModal from "./components/GroupSelectModal";

/**
 * 我的能量场 > 资料填写
 */
class EnergyQuestionnaire extends PureComponent {

	render() {
		return (
			<Container>
				<Header {...this.props} />
				<Content>
					<Button onPress={this.openSelectBox.bind(this)}>
						<Text>选择</Text>
					</Button>
					<GroupSelectModal
						ref={(e)=>this._groupSelectModal = e}
						visible
						transparent
					/>
				</Content>
			</Container>
		)
	}

	openSelectBox() {
		this._groupSelectModal.show();
	}
}


const styles = {};

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(EnergyQuestionnaire);
