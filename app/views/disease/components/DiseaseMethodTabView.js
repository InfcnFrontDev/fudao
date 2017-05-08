import React, {PureComponent} from "react";
import {View, Image, ListView, TouchableHighlight} from "react-native";
import ScrollableTabView, {DefaultTabBar} from "react-native-scrollable-tab-view";
import DiseaseMethodTabBar from "./DiseaseMethodTabBar";
import DiseaseMethodTab from "./DiseaseMethodTab";
import diseaseMethodStore from "../../../mobx/diseaseMethodStore";

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
    componentDidMount(){
        let {diseaseId} = this.props
        diseaseMethodStore.fetchDiseaseMethod(diseaseId)
    }
	render() {
        const {diseaseMethod} = diseaseMethodStore;
		return (
			<ScrollableTabView
				style={styles.tabView}
				renderTabBar={() => <DiseaseMethodTabBar/>}
				locked={false}>
				{diseaseMethod.map((item) => <DiseaseMethodTab key={item.type} tabLabel={item.type} data={item}/>)}
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

