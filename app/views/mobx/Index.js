import React, {PureComponent} from "react";
import {ScrollView, View, Text} from "react-native";
import {observer} from "mobx-react/native";
import userStore from "../../mobx/userStore";

/**
 * 我的
 */
@observer
export default class My extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			stores: {
				userStore
			}
		};
	}

	render() {
		let {stores} = this.state;
		console.log(_.mapKeys(stores))
		return (
			<ScrollView>
				{_.keys(stores).map((key) => this.renderRow(key, stores[key]))}
			</ScrollView>
		)
	}

	renderRow(key, value) {
		return (
			<View key={key} style={{paddingLeft:5}}>
				<Text style={{fontWeight:'bold', fontSize:18}}>{key}</Text>
				<Text>{JSON.stringify(value, null, '  ')}</Text>
			</View>
		)
	}

}
