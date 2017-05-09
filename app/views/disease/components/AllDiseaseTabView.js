import React, {PureComponent} from "react";
import {observer} from "mobx-react/native";
import {Actions} from "react-native-router-flux";
import {View, Image, ListView, TouchableHighlight} from "react-native";
import ScrollableTabView, {DefaultTabBar} from "react-native-scrollable-tab-view";
import AllDiseaseTabBar from "./AllDiseaseTabBar";
import AllDiseaseTabLiaoShen from "./AllDiseaseTabLiaoShen";
import AllDiseaseTabLiaoXin from "./AllDiseaseTabLiaoXin";
import allDiseaseListStore from "../../../mobx/allDiseaseListStore";
import myDiseaseListStore from "../../../mobx/myDiseaseListStore";
import allExpectListStore from "../../../mobx/allExpectListStore";


const bgColors = ['#F1F7EE', '#F9F1EF', '#EDF4FE', '#F4F5E5'];
/**
 * 所有问题列表组件
 */
@observer
export default class AllDiseaseTabView extends PureComponent {

	render() {
        let {data,selectedItem} = this.props;
        return (
			<ScrollableTabView
				style={styles.tabView}
				renderTabBar={() => <AllDiseaseTabBar/>}
				locked={false}
			>
                <AllDiseaseTabLiaoShen
                    data = {data.liaoshen}
                    onItemPress={(item) => this.props.onItemPress(item)}
                    onItemAdd = {(item) => this.props.onItemAdd(item)}
                    selectedItem = {selectedItem}
                />
				<AllDiseaseTabLiaoXin
					data = {data.liaoxin}
					onItemPress={(item) => this.props.onItemPress(item)}
					onItemAdd = {(item) => this.props.onItemAdd(item)}
					selectedItem = {selectedItem}
				/>

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

