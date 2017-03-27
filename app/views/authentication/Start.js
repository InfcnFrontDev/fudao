import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions, ActionConst} from "react-native-router-flux";
import {Container, Left, Right, Body, Form, Item} from "native-base";
import {View, Image, AsyncStorage} from "react-native";
import CommitButton from "./components/CommitButton";
import {toast} from "../../utils/index";

/**
 * 开始页
 */
class Start extends PureComponent {

	render() {
		return (
			<Container style={styles.container}>
				<View style={styles.view}>
					<Image source={require('./assets/logo.png')} style={styles.img}/>
					<View style={styles.viewButton}>
						<CommitButton border={true} block={false} title="登录" onPress={()=>Actions['login']()}/>
						<CommitButton border={false} block={false} title="注册" onPress={()=>Actions['register']()}/>
					</View>
				</View>
			</Container>
		)
	}

	componentWillMount() {
		let {loginUser} = this.props;
		if (loginUser.appid) {
			toast.show('欢迎回来，' + loginUser.title);
			Actions.index({
				type: ActionConst.REPLACE
			});
		}
	}

}
const styles = {
	container: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	view: {
		width: 300,
		height: 500,
	},
	img: {
		marginTop: -80,
		width: 300,
		height: 500,
		resizeMode: 'contain',
	},
	viewButton: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	}
};

const mapStateToProps = state => ({
	loginUser: state.user.loginUser,
});
export default connect(mapStateToProps)(Start);
