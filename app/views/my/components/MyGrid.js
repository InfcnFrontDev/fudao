import React, {PureComponent} from "react";
import {TouchableNativeFeedback} from "react-native";
import {Actions} from "react-native-router-flux";
import {Grid, Icon, Left, Right, Body, Text, Col} from "native-base";


/**
 * my grid menu
 */
class MyGrid extends PureComponent {

	render() {
		return (
			<Grid style={styles.myGrid}>
				{this.renderItem({
					icon: 'heart',
					iconColor: '#EC6149',
					text: '收藏'
				})}
				{this.renderItem({
					icon: 'people',
					iconColor: '#79CDCD',
					text: '好友'
				})}
				{this.renderItem({
					icon: 'ios-settings',
					iconColor: '#868686',
					text: '设置'
				})}
			</Grid>
		)
	}


	renderItem(item) {
		let iconStyle = {fontSize: 40, color: item.iconColor};
		return (
			<TouchableNativeFeedback key={item.text} onPress={()=> Actions['about']()}>
				<Col style={styles.gridCol}>
					<Icon name={item.icon} style={iconStyle}/>
					<Text>{item.text}</Text>
				</Col>
			</TouchableNativeFeedback>
		)
	}
}

const styles = {
	myGrid: {backgroundColor: '#fff', height: 80},
	gridCol: {
		justifyContent: 'center',
		alignItems: 'center'
	}
};

export default (MyGrid);