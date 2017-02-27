import React, {Component} from "react";
import {TouchableOpacity, Image} from "react-native";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Left, Right, Body, Grid, Col, Thumbnail, Item, Text, View} from "native-base";
import styles from "./styles";

/**
 * my grid menu
 */
class PhotoMenu extends Component {

	render() {

		return (
			<Thumbnail source={require('../../assets/my-covers/pic01.jpg')} style={styles.myCover}>
				<TouchableOpacity activeOpacity={1} onPress={()=> Actions.myInfo()}>
					<Thumbnail
						source={require('../../assets/my-photos/photo.jpg')}
						style={styles.myPhoto}/>
				</TouchableOpacity>
			</Thumbnail>
		)
	}

	shouldComponentUpdate() {
		return false
	}
}
function bindAction(dispatch) {
	return {};
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(PhotoMenu);