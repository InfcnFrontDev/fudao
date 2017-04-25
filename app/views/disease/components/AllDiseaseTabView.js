import React, {PureComponent} from "react";
import {View, Image, ListView, TouchableHighlight} from "react-native";
import ScrollableTabView, {DefaultTabBar} from "react-native-scrollable-tab-view";
import AllDiseaseTab from "./AllDiseaseTab";
import AllDiseaseTabBar from "./AllDiseaseTabBar";

const bgColors = ['#F1F7EE', '#F9F1EF', '#EDF4FE', '#F4F5E5'];
/**
 * 所有问题列表组件
 */
export default class AllDiseaseTabView extends PureComponent {

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
				renderTabBar={() => <AllDiseaseTabBar/>}
				locked={false}
			>
				<AllDiseaseTab tabLabel='疗身' data={data[0]}/>
				<AllDiseaseTab tabLabel='疗心' data={data[1]}/>
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

