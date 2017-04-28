import React, {PureComponent} from "react";
import {View, Image, ListView, TouchableHighlight} from "react-native";
import ScrollableTabView, {DefaultTabBar} from "react-native-scrollable-tab-view";
import DiseaseMethodTabBar from "./DiseaseMethodTabBar";
import DiseaseMethodTab from "./DiseaseMethodTab";

/**
 * 所有问题列表组件
 */
export default class DiseaseMethodTabView extends PureComponent {

	static propsTypes = {
		data: React.PropTypes.array,
		onItemAdd: React.PropTypes.func,
		onItemPress: React.PropTypes.func,
	}
	static defaultProps = {
		data: {},
		onItemAdd: () => console.log('onItemAdd'),
		onItemPress: () => console.log('onItemPress'),
	}

	render() {
		let {data} = this.props;
		return (
			<ScrollableTabView
				style={styles.tabView}
				renderTabBar={() => <DiseaseMethodTabBar/>}
				locked={false}>
				{data.map((item) => <DiseaseMethodTab key={item.type} tabLabel={item.type} data={item}/>)}
			</ScrollableTabView>
		)
	}
}

const styles = {
	tabView: {
		flex: 1,
		backgroundColor: '#FFF',
	},
};

