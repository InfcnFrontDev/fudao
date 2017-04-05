import React, {PureComponent} from "react";
import {TouchableOpacity} from "react-native";
import {Left, Right, Body, View} from "native-base";
import Separator from "../../../components/Separator";
import ArticleItem from "../../article/components/ArticleItem";

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
						<ArticleItem key={data.title} article={data}/>
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