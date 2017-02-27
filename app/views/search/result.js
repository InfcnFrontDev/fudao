import React, {PureComponent} from "react";
import {TouchableOpacity} from "react-native";
import {connect} from "react-redux";
import {Left, Right, Body, View} from "native-base";
import SymptomProblemResult from "./symptom-problem/result";
import InformationResult from "./information/result";


/**
 * result
 */
class Result extends PureComponent {

	render() {
		return (
			<View>
				<SymptomProblemResult/>
				<InformationResult/>
			</View>
		)
	}

}

function bindAction(dispatch) {
	return {};
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(Result);