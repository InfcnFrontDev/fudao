import React, {PureComponent} from "react";
import {ScrollView, View} from "react-native";
import {Actions} from "react-native-router-flux";
import {Left, Right, Body} from "native-base";
import Separator from "../../../components/Separator";
import {List, ListItem} from "react-native-elements";
import groupBy from "lodash/groupBy";
import {tools} from "../../../utils/index";


/**
 * 好友列表
 */
class FriendList extends PureComponent {

	constructor(props) {
		super(props);

		// 按首字母分组
		let listGroupBy = groupBy(props.list, (friend) => {
			return tools.getFirstChar(friend.name).toUpperCase()
		})

		this.state = {
			groups: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
			listGroupBy
		}
	}

	render() {
		let {groups} = this.state;
		return (
			<View>
				{groups.map((g) => this.renderGroup(g))}
			</View>
		)
	}

	renderGroup(group) {
		let {listGroupBy} = this.state;
		if (listGroupBy.hasOwnProperty(group)) {
			let friendList = listGroupBy[group];
			return (
				<View key={group}>
					<Separator title={group}/>
					<List containerStyle={styles.list}>
						{friendList.map((f, i) => (
							<ListItem
								key={i}
								avatar={{uri: f.avatar_url}}
								title={f.name}
								containerStyle={(i < friendList.length - 1) ? styles.listItem : styles.lastListItem}
								onPress={() => Actions.userDetail()}
							/>
						))}
					</List>
				</View>
			)
		}
		return null;
	}
}

const styles = {
	list: {
		marginTop: 0,
		paddingLeft: 15,
		borderTopWidth: 0,
		borderBottomWidth: 0,
	},
	listItem: {},
	lastListItem: {
		borderBottomWidth: 0
	},
}

export default (FriendList);
