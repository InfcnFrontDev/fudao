import React, {Component} from "react";
import {StyleSheet, View, Text, Platform} from "react-native";
import NavBarView from "../components/NavBarView";
import GiftedListView from "react-native-gifted-listview";
import ItemCell from "../components/ItemCell";
import SectionHeader from "../components/SectionHeader";
import groupBy from "lodash/groupBy";
import util from "../utils/util";
import iconfont from "../utils/iconfont";

/**
 * 组件列表
 */
class ComponentView extends Component {
	constructor(props) {
		super(props);
		this.state = {};
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
					refreshable={true}
					withSections={true}
					paginationAllLoadedView={this.renderPaginationAllLoadedView}
					sectionHeaderView={this.renderSectionHeaderView}
				/>
			</NavBarView>
		)
	}

	onFetch(page = 1, callback, options) {
		let data = [
			{text: "View", group: "视图", icon: iconfont.cascades},
			{text: "ScrollView Proti", group: "视图", icon: iconfont.cascades},
			{text: "Swiper", group: "视图", icon: iconfont.cascades},

			{text: "Text", group: "基础", icon: iconfont.cascades},
			{text: "Icon", group: "基础", icon: iconfont.cascades},
			{text: "Progress", group: "基础", icon: iconfont.cascades},

			{text: "Button", group: "表单", icon: iconfont.cascades},
			{text: "CheckBox", group: "表单", icon: iconfont.cascades},
			{text: "Form", group: "表单", icon: iconfont.cascades},
			{text: "Input", group: "表单", icon: iconfont.cascades},
			{text: "Label", group: "表单", icon: iconfont.cascades},
			{text: "Picker", group: "表单", icon: iconfont.cascades},
			{text: "Radio", group: "表单", icon: iconfont.cascades},
			{text: "Slider", group: "表单", icon: iconfont.cascades},
			{text: "Switch", group: "表单", icon: iconfont.cascades},
			{text: "Textarea", group: "表单", icon: iconfont.cascades},

			{text: "Navigator", group: "导航", icon: iconfont.cascades},

			{text: "Image", group: "媒体", icon: iconfont.pic},
			{text: "Audio", group: "媒体", icon: iconfont.notification},
			{text: "Video", group: "媒体", icon: iconfont.video},

			{text: "Map", group: "地图", icon: iconfont.global},

			{text: "Canvas", group: "画布", icon: iconfont.skin_light}
		];

		let data2 = groupBy(data, item => {
			return item.group
		});

		for (let key in data2) {
			let value = data2[key];
			for (let i = 0; i < value.length; i++) {
				value[i].showBottomBorder = (i != value.length - 1);
			}
		}

		callback(data2, {
			allLoaded: true
		})
	}

	renderRowView(row) {
		return (
			<ItemCell
				onPress={this.gotoView.bind(this, row)}
				text={row.text}
				showDisclosureIndicator={true}
				showBottomBorder={row.showBottomBorder}
				icon={row.icon}
			/>
		)
	}

	renderSectionHeaderView(sectionData, sectionID) {
		return (
			<SectionHeader showTopBorder={true} showBottomBorder={true}>
				{sectionID}
			</SectionHeader>
		)
	}

	renderPaginationAllLoadedView() {
		return (
			<SectionHeader showTopBorder={true}/>
		)
	}

	gotoView(row) {
		// global.navigator.push({
		// 	title: params.nickename,
		// 	id: 'message',
		// 	params: params
		// })
	}
}

export default (ComponentView);