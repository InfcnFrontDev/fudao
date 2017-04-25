import React, {PureComponent} from "react";
import {View, Image, ListView, TouchableHighlight} from "react-native";
import ScrollableTabView, {DefaultTabBar} from "react-native-scrollable-tab-view";

const bgColors = ['#F1F7EE', '#F9F1EF', '#EDF4FE', '#F4F5E5'];
/**
 * 所有问题列表组件
 */
export default class DiseaseAll extends PureComponent {

	render() {
		let {items} = this.state;
		return (
			<ScrollableTabView
				style={styles.tabView}
				renderTabBar={() => <DefaultTabBar />}
				locked={false}
				tabBarUnderlineStyle={{backgroundColor: '#A0CD01', height: 4,}}
				tabBarTextStyle={{color: '#000', fontWeight: "400",}}
			>
				<AllDiseaseTypeList tabLabel='疗身' diseaseName={question.showVal}/>
				<AllDiseaseTypeList tabLabel='疗心' question={question} url={url} module={module}/>
			</ScrollableTabView>
		)
	}
}

const styles = {
	tabView: {
		flex: 1,
	},
};

DiseaseAll.propsTypes = {
	items: React.PropTypes.object,
	selectedItem: React.PropTypes.object,
	onItemAdd: React.PropTypes.func,
	onItemPress: React.PropTypes.func,
}
DiseaseAll.defaultProps = {
	items: {},
	selectedItem: {},
	onItemAdd: () => {
	},
	onItemPress: () => {
	},
}

