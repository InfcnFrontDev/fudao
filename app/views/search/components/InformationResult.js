import React, {PureComponent} from "react";
import {TouchableOpacity} from "react-native";
import {Left, Right, Body, View} from "native-base";
import Separator from "../../../components/Separator";
import ItemPicture from "../../article/components/PictureItem";

/**
 * result
 */
class InformationResult extends PureComponent {

	render() {
		let {list} = this.props;
		return (
			<View>
				<Separator title="资讯"/>
				<View style={styles.itemContainer}>
					{list.map((data) => (
						<ItemPicture key={data.text} data={data}/>
					))}
				</View>
			</View>
		)
	}
}

const styles = {
	itemContainer: {
		backgroundColor: '#FFFFFF'
	},
};

export default (InformationResult);