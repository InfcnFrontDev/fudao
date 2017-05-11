import React, {PureComponent} from "react";
import {View} from "react-native";
import {Text} from "native-base";
import ScrollableTabView, {ScrollableTabBar} from "react-native-scrollable-tab-view";
import MyRecordeList from "./MyRecordeList";
const Btn = require('./Button');
const LABELS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];


/**
 * 我的日记录
 */
export default class MyRecordDay extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			flag: 'day',
		}
		this.nowDate = new Date();
		this.days = new Date(this.nowDate.getFullYear(), this.nowDate.getMonth() + 1, 0).getDate();
		this.allDays = LABELS.slice(0, this.days);
		this.labels = this.allDays.slice(0, this.nowDate.getDate());
		this.disabled = this.allDays.slice(this.nowDate.getDate());
	}

	render() {
		return (
			<View style={styles.tabView}>
				<View style={styles.topView}>
					<Text>{this.nowDate.getMonth()}月</Text>
					<Text style={styles.topCenter}>{this.nowDate.getFullYear()}年{this.nowDate.getMonth() + 1}月</Text>
					<Text style={styles.colorAE}>{this.nowDate.getMonth() + 2}月</Text>
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
					{this.labels.map((label, i) => <MyRecordeList key={i} btn={i} tabLabel={label} label={label} type='day'/>)}
				</ScrollableTabView>
			</View>
		)
	}

	_renderTabBar(name, page, isTabActive, onPressHandler, onLayoutHandler) {
		var disabled = (null);
		if (parseInt(name) == this.nowDate.getDate()) {
			disabled = this.disabled.map((p, i) => {
				return (
					<View key={i} style={styles.tabBarView}>
						<Text style={styles.colorAE}>
							{p}
						</Text>
					</View>
				)
			})
			return <Btn
				key={`${name}_${page}`}
				accessible={true}
				accessibilityLabel={name}
				accessibilityTraits='button'
				onPress={() => onPressHandler(page)}
			>
				<View style={{flexDirection:'row'}}>
					<View style={isTabActive?styles.tabBarViewActive:styles.tabBarView}>
						<Text style={isTabActive?styles.tabTextActive:styles.tabTextActive}>
							{name}
						</Text>
					</View>
					{disabled}
				</View>
			</Btn>
		}
		return <Btn
			key={`${name}_${page}`}
			accessible={true}
			accessibilityLabel={name}
			accessibilityTraits='button'
			onPress={() => onPressHandler(page)}
			onLayout={onLayoutHandler}
		>
			<View style={{flexDirection:'row'}}>
				<View style={isTabActive?styles.tabBarViewActive:styles.tabBarView}>
					<Text style={isTabActive?styles.tabTextActive:styles.tabTextActive}>
						{name}
					</Text>
				</View>
			</View>
		</Btn>
	}
}
const styles = {
	tabView: {
		flex: 1,
		flexGrow: 1,
		//底部日记录、周记录、月记录的背景框
		// marginBottom: 70,
		borderBottomColor: '#D8D8D8',
		borderBottomWidth: 1,
	},
	topView: {
		flexDirection: 'row',
		margin: 10,
		marginBottom: 0,
	},
	topCenter: {
		flex: 1,
		textAlign: 'center'
	},
	tabBarViewActive: {
		backgroundColor: '#A1CC00',
		margin: 12,
		marginRight: 6,
		marginLeft: 6,
		padding: 8,
		paddingTop: 2,
		borderRadius: 20,
	},
	tabBarView: {
		margin: 12,
		marginRight: 6,
		marginLeft: 6,
		padding: 8,
		paddingTop: 2,
	},
	colorAE: {
		color: '#aeaeae',
	}
};

