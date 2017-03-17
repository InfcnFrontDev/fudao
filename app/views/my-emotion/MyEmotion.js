import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Text} from "native-base";
import {Container, Content, Header, Loading} from "../../components/index";
import {View, Image, DeviceEventEmitter} from "react-native";
import {openDrawer, closeDrawer} from "../../actions/drawer";
import {request, urls, toast} from "../../utils/";
import {calm} from "./components/EmotionData";
import {updateMyEmotion} from "../../actions/emotion";
import EmotionList from "./components/EmotionList";
import EmotionSolve from "./components/EmotionSolve";

/**
 * 我的情绪
 */
class MyEmotion extends PureComponent {

	render() {
		let {myEmotion} = this.props;
		if (!myEmotion) {
			myEmotion = calm[0];
		}

		return (
			<Container>
				<Header back {...this.props} right={
					<View style={styles.selectedEmotion}>
						<Image source={myEmotion.img} style={styles.selectedEmotionImg}/>
						<Text style={styles.selectedEmotionTitle}>{myEmotion.title}</Text>
					</View>
				}/>
				<Content>
					<Loading ref={(e)=>this._loading = e}/>
					<EmotionList onItemPress={this._onItemPress.bind(this)}/>
					<EmotionSolve ref={(e)=>this._modal = e}/>
				</Content>
			</Container>
		)
	}

	componentWillMount() {
		let {loginUser, myEmotion, updateTime} = this.props;
		if (myEmotion) {
			let currentTime = new Date().getTime();
			if (currentTime - updateTime > 1000 * 60 * 60) {
				this.props.dispatch(updateMyEmotion(calm[0]));
			}
		}
	}

	_onItemPress(item) {
		// 更新我的情绪
		this.props.dispatch(updateMyEmotion(item));

		this._loading.show();
		request.getJson(urls.apis.NOW_EMOTION, {
			name: item.title,
			renqun: 'high_quality_population',
		}).then(((data) => {
			this._loading.hide();
			if (data.success && data.obj) {
				this._modal.show(data.obj)
			} else {
				toast.show('这种心情，我没办法了');
			}
		}).bind(this))
	}
}


const styles = {
	selectedEmotion: {
		flexDirection: 'column',
		marginTop: 0,
		alignItems: 'center',
		justifyContent: 'center',
	},
	selectedEmotionImg: {
		width: 36,
		height: 36,
		marginRight: 3,
	},
	selectedEmotionTitle: {
		color: '#fff',
		fontSize: 12,
	}
};


function bindAction(dispatch) {
	return {
		openDrawer: () => dispatch(openDrawer()),
		closeDrawer: key => dispatch(closeDrawer()),
	};

}
const mapStateToProps = state => ({
	loginUser: state.user.loginUser,
	...state.emotion
});
export default connect(mapStateToProps, bindAction)(MyEmotion);
