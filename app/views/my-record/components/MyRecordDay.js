import React, {PureComponent} from "react";
import {Actions} from "react-native-router-flux";
import {View,ToastAndroid} from "react-native";
import {Right, Button, Icon, Text} from "native-base";
import {Container, Content, Header, Separator} from "../../../components/index";
import ScrollableTabView, {ScrollableTabBar} from "react-native-scrollable-tab-view";
import MyRecordeList from "./MyRecordeList";
import {theme} from "../../../utils/";
const Btn = require('./Button');



/**
 * 资讯
 */
class MyRecordDay extends PureComponent {
	constructor(props){
    super(props);
    this.state={
      flag:'day',
    }
  }

	render() {
		return (
			<View style={styles.tabView}>
				<View>
				<Text>2017年3月</Text>
				</View>
				<ScrollableTabView
				renderTabBar={() => (
					<ScrollableTabBar
					underlineStyle={{backgroundColor: 'transparent'}}
					renderTab={this._renderTabBar.bind(this)}
					/>
				)}
				tabBarPosition='top'
				scrollWithoutAnimation={false}
				>
					{this.props.labels.map((label,i) => <MyRecordeList key={i} tabLabel={label} label={label} type='day'/>)}
				</ScrollableTabView>
			</View>
		)
	}

	_renderTabBar(name, page, isTabActive, onPressHandler, onLayoutHandler){
		return <Btn
			key={`${name}_${page}`}
			accessible={true}
			accessibilityLabel={name}
			accessibilityTraits='button'
			onPress={() => onPressHandler(page)}
			onLayout={onLayoutHandler}
		>
			<View style={isTabActive?styles.tabBarViewActive:styles.tabBarView}>
				<Text style={isTabActive?styles.tabTextActive:styles.tabTextActive}>
					{name}
				</Text>
			</View>
		</Btn>;
		return (null)
	}
}
const styles = {
	tabView: {
		flex: 1,
		flexGrow: 1,
		marginBottom:70,
		borderBottomColor:'#D8D8D8',
		borderBottomWidth:1,
	},
	tabBarViewActive:{
		backgroundColor:'#A1CC00',
		margin:12,
		marginRight:6,
		marginLeft:6,
		padding:8,
		paddingTop:2,
		borderRadius:20,
	},
	tabBarView:{
		margin:12,
		marginRight:6,
		marginLeft:6,
		padding:8,
		paddingTop:2,
	}
};

export default (MyRecordDay);
