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
import diseaseMethodStore from "../../../mobx/diseaseMethodStore";

const bgColors = ['#F1F7EE', '#F9F1EF', '#EDF4FE', '#F4F5E5'];
/**
 * 所有问题列表组件
 */
@observer
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
    componentDidMount(){
        allDiseaseListStore.fetchAllDiseaseList()
    }
    onItemPress(item){
        Actions.diseaseDetail({title: item.name, data: item})
        diseaseMethodStore.diseaseId = item.id
    }
    onItemAdd(item){
        let {myDiseaseList,addMyDiseaseListItem} = myDiseaseListStore;
        myDiseaseList.unshift(item);
        addMyDiseaseListItem(item.id)
        allDiseaseListStore.fetchAllDiseaseList()
    }
	render() {
        let {liaoXinDataSource,liaoShenDataSource,allDiseaseListLiaoShen,allDiseaseListLiaoXin} = allDiseaseListStore;
        let selectedItem = myDiseaseListStore.myDiseaseList
        return (
			<ScrollableTabView
				style={styles.tabView}
				renderTabBar={() => <AllDiseaseTabBar/>}
				locked={false}
			>

                <AllDiseaseTabLiaoShen
                    data = {allDiseaseListLiaoShen}
                    onItemPress={(item) => this.onItemPress(item)}
                    onItemAdd = {(item) => this.onItemAdd(item)}
                    selectedItem = {selectedItem}
                />
				<AllDiseaseTabLiaoXin
					data = {liaoXinDataSource}
                    onItemPress={(item) => this.onItemPress(item)}
                    onItemAdd = {(item) => this.onItemAdd(item)}
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

