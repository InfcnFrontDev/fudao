import React, {PureComponent} from "react";
import {TouchableOpacity} from "react-native";
import {Left, Right, Body, Text, View} from "native-base";
import Separator from "../../../components/separator/";
import styles from "./styles";

/**
 * result
 */
class Result extends PureComponent {

	render() {
		let {list} = this.props;
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

export default (Result);