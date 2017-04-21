//noinspection JSAnnotator
import React, {PureComponent} from "react";
import {Text, Button} from "native-base";
import {View, Image, DeviceEventEmitter, TouchableHighlight} from "react-native";
import {Actions} from "react-native-router-flux";

/**
 * 我的情绪
 */
export default  class MyEnter extends PureComponent {
	constructor(props) {
		super(props);
	}


	render() {
		let itemStyle1 = Object.assign({}, styles.button, styles.mgl10);
		let itemStyle = Object.assign({}, styles.button, styles.mgl);
		return (
			<View>
				<View style={styles.View}>
					<Button style={itemStyle1} transparent onPress={()=>Actions.energy()}>
						<Image source={require('../../../assets/disease/zizhen.png')} style={styles.image}/>
					</Button>
				</View>
				<View style={styles.View}>
					<Button style={itemStyle1} transparent onPress={()=>Actions.myQuestion()}>
						<Image source={require('../../../assets/disease/ziliao.png')} style={styles.image}/>
					</Button>
					<Button style={itemStyle} transparent onPress={()=>Actions.myExpect()}>
						<Image source={require('../../../assets/disease/ziyang.png')} style={styles.image}/>
					</Button>
					<Button style={itemStyle} transparent onPress={()=>Actions.emotion()}>
						<Image source={require('../../../assets/disease/zixiu.png')} style={styles.image}/>
					</Button>
				</View>
			</View>

		)
	}

}

const styles = {
	View: {
		flexDirection: 'row',
		marginTop: 1

	},
	button: {
		flexDirection: 'row',
		height: 50,
		justifyContent: 'center',
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: 'rgba(255, 255, 255, 0.3)',


	},
	mgl: {
		marginLeft: 1
	},
	mgl10: {
		marginLeft: 6
	},
	text: {
		color: '#fff'
	},
	badge: {
		backgroundColor: '#AED9E5',
		paddingTop: 6,
		paddingBottom: 6,
		paddingLeft: 6,
		paddingRight: 6,
		borderRadius: 48,
	},
	image: {
		width: 32,
		height: 32,
	},
	color2: {
		backgroundColor: '#E5B2A8',
	},
	color3: {
		backgroundColor: '#D5E1AF',
	},
	color4: {
		backgroundColor: '#CABBD3',
	},
};
function bindAction(dispatch) {
	return {};
}
