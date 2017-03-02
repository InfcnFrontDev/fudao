import React, {PureComponent} from "react";
import {TouchableOpacity, Image} from "react-native";
import {Actions} from "react-native-router-flux";
import {Left, Right, Body, Thumbnail, Item} from "native-base";
import {theme} from "../../../utils/index";

/**
 * my grid menu
 */
class MyPhoto extends PureComponent {

	render() {
		return (
			<Thumbnail source={require('../../../assets/my-covers/pic01.jpg')} style={styles.myCover}>
				<TouchableOpacity activeOpacity={1} onPress={()=> Actions.myInfo()}>
					<Thumbnail
						source={require('../../../assets/my-photos/photo.jpg')}
						style={styles.myPhoto}/>
				</TouchableOpacity>
			</Thumbnail>
		)
	}
}

const styles = {
	myCover: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		width: theme.deviceWidth + 3,
		height: 180,
	},
	myPhoto: {
		width: 80,
		height: 80,
		borderRadius: 40,
	},
};

export default (MyPhoto);