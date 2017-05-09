import React, {PureComponent} from "react";
import {TouchableOpacity} from "react-native";
import {View} from "native-base";
import Separator from "../../../components/Separator";
import ArticleItem from "../../article/components/ArticleItem";

/**
 * result
 */
export default class InformationResult extends PureComponent {

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