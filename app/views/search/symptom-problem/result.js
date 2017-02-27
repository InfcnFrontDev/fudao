import React, {PureComponent} from "react";
import {TouchableOpacity} from "react-native";
import {connect} from "react-redux";
import {Left, Right, Body, Text, View} from "native-base";
import Separator from "../../../components/separator/";
import styles from "./styles";

/**
 * result
 */
class Result extends PureComponent {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {

		let list = [
			"默认", "情况下", "项目", "都排在一条线", "又称轴线", "flex-wrap", "属性定义", "如果", "一条轴线", "排不下", "如何换行"
		];

		return (
			<View>
				<Separator title="症状和问题"/>
				<View style={styles.itemContainer}>
					{list.map((text) => (
						<TouchableOpacity key={text} style={styles.item} onPress={() => alert(text)}>
							<Text>{text}</Text>
						</TouchableOpacity>
					))}
				</View>
			</View>
		)
	}

}

function bindAction(dispatch) {
	return {};
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(Result);