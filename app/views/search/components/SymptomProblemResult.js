import React, {PureComponent} from "react";
import {TouchableOpacity} from "react-native";
import {Left, Right, Body, Text, View} from "native-base";
import Separator from "../../../components/Separator";

/**
 * result
 */
class SymptomProblemResult extends PureComponent {

	render() {
		let {list} = this.props;
		return (
			<View>
				<Separator title="症状和问题"/>
				<View style={styles.itemContainer}>
					{list.map((text) => (
						<TouchableOpacity key={text.val} style={styles.item} onPress={() => alert(text.val)}>
							<Text>{text.showVal}</Text>
						</TouchableOpacity>
					))}
				</View>
			</View>
		)
	}
}
const styles = {
	itemContainer: {
		padding: 14,
		backgroundColor: '#FFFFFF',
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	item: {
		backgroundColor: '#eeeeee',
		margin: 5,
		padding: 10,
		height: 30,
		justifyContent: 'center',
		borderRadius: 5,
	}
};

export default (SymptomProblemResult);