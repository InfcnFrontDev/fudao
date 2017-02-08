import React, {Component} from "react";
import {StyleSheet, Platform, View, Text} from "react-native";
import _ from "underscore";
import GiftedListView from "react-native-gifted-listview";
import ItemCell from "../components/ItemCell";
import globalStyles from "../utils/globalStyles";
import util from "../utils/util";
import groupBy from "lodash/groupBy";
import NavBarView from "../components/NavBarView";
import SectionHeader from "../components/SectionHeader";


export default class ContactsView extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<NavBarView {...this.props}>
				<GiftedListView
					enableEmptySections={true}
					rowView={this.renderRowView.bind(this)}
					onFetch={this.onFetch}
					firstLoader={true}
					pagination={true}
					refreshable={false}
					withSections={true}
					paginationAllLoadedView={this.renderPaginationAllLoadedView}
					sectionHeaderView={this.renderSectionHeaderView}
				/>
			</NavBarView>
		)
	}

	onFetch(page = 1, callback, options) {
		let data = [
			{"nickname": "Alex Black", "location": "London", "avatar": "1", "header": "A"},
			{"nickname": "Alex Proti", "location": "Moscow", "avatar": "5"},
			{"nickname": "Andrew Smith", "location": "Kiev", "avatar": "3"},
			{"nickname": "Ann Ryder", "location": "Kiev", "avatar": "7"},
			{"nickname": "Daniel Ricci", "location": "Kiev", "avatar": "8", "header": "D"},
			{"nickname": "Ivan Ivanov", "location": "Kiev", "avatar": "3", "header": "I"},
			{"nickname": "Kate Lebedeva", "location": "Odessa", "avatar": "6", "header": "K"},
			{"nickname": "Kate Shy", "location": "Kiev", "avatar": "10"},
			{"nickname": "Michael Fold", "location": "Praha", "avatar": "1", "header": "M"},
			{"nickname": "Nadya Lovin", "location": "Moscow", "avatar": "2", "header": "N"},
			{"nickname": "Oleg Price", "location": "Odessa", "avatar": "4", "header": "O"},
			{"nickname": "Oleg Ryzhkov", "location": "Kiev", "avatar": "5"},
			{"nickname": "Olga Blare", "location": "Praha", "avatar": "9"},
			{"nickname": "Svetlana Kot", "location": "Milan", "avatar": "10", "header": "S"}
		];
		let contacts = groupBy(data, contact => {
			return contact.nickname.slice(0, 1)
		});

		_.chain(contacts).values().each(c => {
			_.last(c).showBottomBorder = true;
		});

		callback(contacts, {
			allLoaded: true
		})
	}

	renderRowView(contact) {
		return (
			<ItemCell
				onPress={this.gotoView.bind(this, contact)}
				text={contact.nickname}
				subText={contact.location}
				showDisclosureIndicator={true}
				showBottomBorder={!contact.showBottomBorder}
				imageStyle={customStyles.itemCellIcon}
				image={{uri: util.getAvatarUrl(contact.avatar)}}
			/>
		)
	}

	renderPaginationAllLoadedView() {
		return (
			<SectionHeader showTopBorder={true}/>
		)
	}

	renderSectionHeaderView(sectionData, sectionID) {
		return (
			<SectionHeader showTopBorder={true} showBottomBorder={true}>
				{sectionID}
			</SectionHeader>
		)
	}

	gotoView(contact) {
		// global.navigator.push({
		// 	title: params.nickename,
		// 	id: 'message',
		// 	params: params
		// })
	}
}

const customStyles = {
	paginationView: {
		...globalStyles.container
	}
}

const Styles = StyleSheet.create({
	sectionHeader: {
		...globalStyles.container,
		height: 30,
		paddingLeft: 15,
		justifyContent: 'center'
	},
	sectionHeaderText: {
		color: '#8e8e93'
	}
})