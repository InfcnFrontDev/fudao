import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions, ActionConst} from "react-native-router-flux";
import {Container} from "native-base";
import {View, Image, AsyncStorage} from "react-native";
import CommitButton from "./components/CommitButton";
import {toast} from "../../utils/index";
import UserStore from "../../mobx/userStore";

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
		UserStore.loadData(()=>{
			if (UserStore.token) {
				toast.show('欢迎回来，' + UserStore.loginUser.title);
				Actions.index({
					type: ActionConst.REPLACE
				});
			}
		});
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
	...state.user
});
export default connect(mapStateToProps)(Start);
