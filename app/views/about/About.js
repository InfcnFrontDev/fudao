/**
 * @author lovebing
 */

import React, {
	Component,
	PropTypes
} from 'react';

import {
	MapView,
	MapTypes,
	Geolocation
} from 'react-native-baidu-map';

import {
	Button,
	AppRegistry,
	StyleSheet,
	Text,
	View,
	TouchableHighlight
} from 'react-native';

export default class BaiduMapDemo extends Component {

	constructor() {
		super();
	}

	componentDidMount() {
	}

	render() {
		return (
			<View style={styles.container}>

				<View style={styles.row}>
					<Button style={styles.btn} title="Locate" onPress={() => {
            Geolocation.getCurrentPosition()
              .then(data => {
                console.warn(JSON.stringify(data));
              })
              .catch(e =>{
                console.warn(e, 'error');
              })
          }} />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		height: 40
	},
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
});