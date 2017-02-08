import React, {
	Component
} from 'react'

import {
	StyleSheet,
	View,
	ListView,
	TouchableHighlight,
	Text
} from 'react-native'

import {connect} from 'react-redux'

import global from '../../utils/global'
import globalStyles from '../../utils/globalStyles'
import iconfont from '../../utils/iconfont'

import NavBarView from '../../components/NavBarView'

class ComponentView extends Component {
	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows([
				'ActivityIndicator',
				'Button',
				'DatePickerIOS',
				'DrawerLayoutAndroid',
				'Image',
				'KeyboardAvoidingView',
				'ListView',
				'ListView.DataSource',
				'MapView',
				'Modal',
				'Navigator',
				'NavigatorIOS',
				'Picker',
				'PickerIOS',
				'ProgressBarAndroid',
				'ProgressViewIOS',
				'RefreshControl',
				'ScrollView',
				'SegmentedControlIOS',
				'Slider',
				'StatusBar',
				'Switch',
				'TabBarIOS',
				'TabBarIOS.Item',
				'Text',
				'TextInput',
				'ToolbarAndroid',
				'TouchableHighlight',
				'TouchableNativeFeedback',
				'TouchableOpacity',
				'TouchableWithoutFeedback',
				'View',
				'ViewPagerAndroid',
				'WebView',
			])
		};
	}

	render() {
		return (
			<NavBarView {...this.props}>
				<ListView
					dataSource={this.state.dataSource}
					renderRow={(rowData) => this.renderRow(rowData)}
				/>
			</NavBarView>
		)
	}

	renderRow(rowData) {
		return (
			<TouchableHighlight
				style={styles.rowContainer}
				underlayColor='#D9D9D9'
				onPress={() => this.rowPress()}>
				<View style={styles.rowView}>
					<Text style={styles.titleText}>{rowData}</Text>
					<Text style={styles.iconText}>{iconfont.right}</Text>
				</View>
			</TouchableHighlight>
		)
	}

	rowPress() {

	}
}

const styles = StyleSheet.create({
	contentView: {
		flex: 1
	},
	rowContainer: {
		backgroundColor: '#ffffff',
		paddingLeft: 10,
		paddingRight: 10
	},
	rowView: {
		flexDirection: 'row',
		borderBottomColor: '#cccccc',
		borderBottomWidth: 1,
		paddingTop: 15,
		paddingBottom: 15,

	},
	titleText: {
		...globalStyles.text,
		flex: 1,
		fontSize: 14
	},
	iconText: {
		...globalStyles.iconfont,
		width: 20,
		fontSize: 16,
		textAlign: 'right'
	}
});

export default (ComponentView);