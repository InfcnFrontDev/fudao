import React, {PureComponent} from "react";
import {Image} from "react-native";
import {View} from "native-base";
import ScrollableTabView, {DefaultTabBar} from "react-native-scrollable-tab-view";

class TabView extends PureComponent {

	render() {
		let {tabs} = this.props;
		return (
			<ScrollableTabView
				ref={(e) => this._scrollableTabView = e}
				renderTabBar={() => <View style={{height: 0, width: 0}}/>}
			>
				{tabs.map((item, index) => this.renderTab(item, index))}
			</ScrollableTabView>
		);
	}

	renderTab(item, index) {
		let Component = item.component;
		return (
			<Component key={index} tabLabel={item.title}/>
		)
	}

	goToPage(index) {
		this._scrollableTabView.goToPage(index);
	}

	shouldComponentUpdate() {
		return false
	}
}

const styles = {}

export default (TabView);
