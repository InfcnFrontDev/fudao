import React, {PureComponent} from "react";
import {ListView, ScrollView, View, Image, ToastAndroid, DeviceEventEmitter} from "react-native";
import {Actions} from "react-native-router-flux";
import {Text, Button} from "native-base";
import {good, calm, bad} from "./EmotionData";

/**
 * 情绪列表
 */
export default class EmotionList extends PureComponent {

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
			<View>
				{this._renderGroup(dataSource3)}
				{this._renderGroup(dataSource2)}
				{this._renderGroup(dataSource1)}
			</View>
		)
	}

	_renderGroup(dataSource) {
		return (
			<View style={styles.container}>
				<ListView
					contentContainerStyle={styles.listContainer}
					dataSource={dataSource}
					renderRow={this._renderRow.bind(this)}
					horizontal
					pageSize={5}
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

}

const styles = {
	container: {
		marginTop:15,
		width: theme.deviceWidth - 10,
	},
	listContainer: {
		backgroundColor:'rgba(255,255,255,0.3)',
		flexDirection: 'row',
		flexWrap: 'wrap',
		width: theme.deviceWidth - 30,
		/*justifyContent: 'space-between',*/

	},
	item: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		width: 60,
		height: 60,
		marginRight:((theme.deviceWidth - 30)-300)/5 ,
		marginBottom:5,
	},
	itemImg: {
		width: 40,
		height: 40,
		/*marginRight: 5,*/
	},
	itemText: {
		color: '#fff',
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


