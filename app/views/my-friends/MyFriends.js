import React, {PureComponent} from "react";
import {View} from "react-native";
import {connect} from "react-redux";
import {Container, Content, Left, Right, Body} from "native-base";
import Header from "../../components/header/BaseHeader";
import Separator from "../../components/Separator";
import {List, ListItem} from "react-native-elements";
import groupBy from "lodash/groupBy";
import {tools} from "../../utils/index";

const list = [
	{
		name: '杨可可',
		avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
		subtitle: 'Vice President'
	},
	{
		name: '郭小敏',
		avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
		subtitle: 'Vice Chairman'
	},
	{
		name: '王朋',
		avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
		subtitle: 'Vice President'
	},
	{
		name: 'Jackson',
		avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
		subtitle: 'Vice Chairman'
	},
	{
		name: '小仔仔',
		avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
		subtitle: 'Vice President'
	},
	{
		name: '陈欣欣',
		avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
		subtitle: 'Vice Chairman'
	},
	{
		name: '宋淼',
		avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
		subtitle: 'Vice President'
	},
	{
		name: '谢鹏',
		avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
		subtitle: 'Vice Chairman'
	},
	{
		name: '张歆艺',
		avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
		subtitle: 'Vice President'
	},
	{
		name: '李小龙',
		avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
		subtitle: 'Vice Chairman'
	},
	{
		name: '巴洛克',
		avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
		subtitle: 'Vice President'
	},
	{
		name: 'Chris',
		avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
		subtitle: 'Vice Chairman'
	},
	{
		name: '斯洛克',
		avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
		subtitle: 'Vice President'
	},
	{
		name: '邸晓芳',
		avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
		subtitle: 'Vice Chairman'
	},
	{
		name: 'Amy',
		avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
		subtitle: 'Vice President'
	},
	{
		name: '周大福',
		avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
		subtitle: 'Vice Chairman'
	},
	{
		name: '刘德华',
		avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
		subtitle: 'Vice President'
	},
	{
		name: '张学友',
		avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
		subtitle: 'Vice Chairman'
	},
]

/**
 * 我的好友
 */
class MyFriends extends PureComponent {

	state = {
		indexes: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
		contacts: {}
	};

	render() {
		let {indexes, contacts} = this.state;
		console.log(contacts);
		return (
			<Container>
				<Header {...this.props}/>
				<Content>
					{
						indexes.map((index) => (
							contacts.hasOwnProperty(index) ? this.renderFriends(index, contacts[index]) : null
						))
					}
				</Content>
			</Container>
		)
	}

	componentDidMount() {
		// alert(tools.getFirstChar('杨可可'));
		let contacts = groupBy(list, contact => {
			return tools.getFirstChar(contact.name)
		})

		this.setState({
			contacts
		})

	}

	renderFriends(firstChar, friends) {
		return (
			<View key={firstChar}>
				<Separator title={firstChar}/>
				<List containerStyle={styles.list}>
					{
						friends.map((l, j) => (
							<ListItem
								key={j}
								avatar={{uri: l.avatar_url}}
								roundAvatar
								title={l.name}
								containerStyle={(j < friends.length - 1) ? styles.listItem : styles.lastListItem}
							/>
						))
					}
				</List>
			</View>
		)
	}
}

const styles = {
	list: {
		marginTop: 0,
		paddingLeft: 15,
	},
	listItem: {},
	lastListItem: {
		borderBottomWidth: 0
	},
}

const mapStateToProps = state => ({
	account: state.account
});
export default connect(mapStateToProps)(MyFriends);
