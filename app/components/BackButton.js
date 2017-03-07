import React, {PureComponent} from "react";
import {Button, Icon} from "native-base";
import {Actions} from "react-native-router-flux";


export default class BackButton extends PureComponent {
	render() {
		return (
			<Button transparent onPress={() => Actions.pop()}>
				<Icon name="arrow-back"/>
			</Button>
		)
	}
}