import React, {PureComponent} from "react";
import {Actions, ActionConst} from "react-native-router-flux";
import {observer} from "mobx-react/native";
import {Container} from "native-base";
import {View, Image, AsyncStorage} from "react-native";
import CommitButton from "./components/CommitButton";
import UserStore from "../../mobx/userStore";

/**
 * 启始页
 */
@observer
export default class Start extends PureComponent {

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
		if (UserStore.isLogin) {
			if(UserStore.loginUser.sex){
				Actions.index({
					type: ActionConst.REPLACE
				});
			}
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
