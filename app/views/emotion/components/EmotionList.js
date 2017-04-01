import React, {PureComponent} from "react";
import {ListView, ScrollView, View, Image, ToastAndroid, DeviceEventEmitter} from "react-native";
import {Actions} from "react-native-router-flux";
import {Text, Button} from "native-base";
import {theme, urls, request, toast} from "../../../utils/";
import {updateMyEmotion} from "../../../actions/emotion";
import {good, calm, bad} from "./EmotionData";

/**
 * 情绪列表
 */
class EmotionList extends PureComponent {

	ds = new ListView.DataSource({
		rowHasChanged: (row1, row2) => row1 !== row2,
		sectionHeaderHasChanged: (section1, section2) => section1 !== section2,
	});

	state = {
		dataSource1: this.ds.cloneWithRows(good),
		dataSource2: this.ds.cloneWithRows(calm),
		dataSource3: this.ds.cloneWithRows(bad),
	}

	render() {
		let {dataSource1, dataSource2, dataSource3} = this.state;
		return (
			<ScrollView>
				{this._renderGroup('积极向上，朵朵小太阳', dataSource1)}
				{this._renderGroup('清风徐来，水波不兴', dataSource2)}
				{this._renderGroup('月落乌啼霜满天', dataSource3)}
			</ScrollView>
		)
	}

	_renderGroup(text, dataSource) {
		return (
			<View style={styles.container}>
				<View style={styles.groupContainer}>
					<Text style={styles.groupText}>{text}</Text>
				</View>
				<ListView
					contentContainerStyle={styles.listContainer}
					dataSource={dataSource}
					renderRow={this._renderRow.bind(this)}
					horizontal
					pageSize={4}
					enableEmptySections
				/>
			</View>
		)
	}

	_renderRow(rowData) {
		let {onItemPress} = this.props;
		return (
			<Button transparent block style={styles.item} onPress={() => onItemPress(rowData)}>
				<Image source={rowData.img} style={styles.itemImg}/>
				<Text style={styles.itemText}>{rowData.title}</Text>
			</Button>
		)
	}

	solve(p) {

		this.props.dispatch(updateMyEmotion(p));
		request.getJson(urls.apis.NOW_EMOTION, {
			name: p.title,
			renqun: 'high_quality_population',
		}).then((data) => {
			if (data.success) {
				Actions['myEmotionSolve']({data: data.obj});
			}
		}, (error) => {

		})
	}

}

const styles = {
	container: {
		paddingLeft: 10,
		paddingRight: 10,
	},
	groupContainer: {
		paddingTop: 10,
		paddingBottom: 6,
		paddingLeft: 6,
		borderBottomWidth: theme.borderWidth,
		borderBottomColor: theme.listBorderColor,
	},
	groupText: {
		color: '#676767',
		fontSize: theme.DefaultFontSize - 2,
	},
	listContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		width: theme.deviceWidth - 20,
		justifyContent: 'space-between',
		paddingLeft: 5,
		paddingRight: 5,
	},
	item: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		width: 80,
		height: 80,
	},
	itemImg: {
		width: 50,
		height: 50,
		marginRight: 5,
	},
	itemText: {
		color: '#676767',
		fontSize: theme.DefaultFontSize - 2,
	},
};

EmotionList.propTypes = {
	onItemPress: React.PropTypes.func,
}
EmotionList.defaultProps = {
	onItemPress: () => {
	}
}

export default (EmotionList);
