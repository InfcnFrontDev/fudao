import React, {PureComponent} from "react";
import {ScrollView, View} from "react-native";
import {Actions} from "react-native-router-flux";
import {List} from "../../../components/index";
import {Left, Right, Body, ListItem, Icon, Text, Thumbnail} from "native-base";
import Separator from "../../../components/Separator";
import groupBy from "lodash/groupBy";
import {tools} from "../../../utils/index";

const groups = ["*", 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

/**
 * 好友列表
 */
class FriendList extends PureComponent {

	constructor(props) {
		super(props);

		// 按首字母分组
		let listGroupBy = groupBy(props.list, (friend) => {
			let firstChar = tools.getFirstChar(friend.friendNick).toUpperCase();
			if (groups.find((g) => g == firstChar))
				return firstChar;
			return groups[0]
		})

		this.state = {
			listGroupBy
		}
	}

	render() {
		return (
			<View>
				{groups.map((g) => this.renderGroup(g))}
			</View>
		)
	}

	renderGroup(group) {
		let {listGroupBy} = this.state;

		console.log(listGroupBy);

		if (listGroupBy.hasOwnProperty(group)) {
			let friendList = listGroupBy[group];
			return (
				<View key={group}>
					<Separator title={group}/>
					<List containerStyle={styles.list}>
						{friendList.map((f, i) => (
							<ListItem avatar last key={i} onPress={() => Actions.userDetail({userId: f.appid})}>
								<Left>
									<Thumbnail style={{width: 40, height: 40}} square
											   source={{uri:'http://touxiang.qqzhi.com/uploads/2012-11/1111032758936.jpg'}}/>
								</Left>
								<Body>
								<Text>{f.friendNick}</Text>
								<Text note>{f.phone}</Text>
								</Body>
								<Right style={{justifyContent:'center'}}>
									<Icon name="ios-arrow-forward"/>
								</Right>
							</ListItem>
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
