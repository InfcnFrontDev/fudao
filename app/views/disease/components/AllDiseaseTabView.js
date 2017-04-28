import React, {PureComponent} from "react";
import {View, Image, ListView, TouchableHighlight} from "react-native";
import ScrollableTabView, {DefaultTabBar} from "react-native-scrollable-tab-view";
import AllDiseaseTabBar from "./AllDiseaseTabBar";
import AllDiseaseTabLiaoShen from "./AllDiseaseTabLiaoShen";
import AllDiseaseTabLiaoXin from "./AllDiseaseTabLiaoXin";

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
				<AllDiseaseTabLiaoShen data={data.liaoSheng}/>
				<AllDiseaseTabLiaoXin data={data.liaoXin}/>
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

