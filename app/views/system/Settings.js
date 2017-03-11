import React, {PureComponent} from "react";
import {Alert} from "react-native";
import {connect} from "react-redux";
import {Actions, ActionConst} from "react-native-router-flux";
import {Container, Content, List, Separator} from "../../components/index";
import Header from "../../components/header/BaseHeader";
import {Body, Right, Switch, ListItem, Text} from "native-base";
import {updateSettings} from "../../actions/settings";
import {logout} from "../../actions/user";

/**
 * 系统设置
 */
class Settings extends PureComponent {

	render() {
		let {dispatch, isRecommend} = this.props;
		return (
			<Container>
				<Header {...this.props}/>
				<Content gray>
					<Separator/>
					<List>
						<ListItem last>
							<Body>
							<Text>是否推送</Text>
							</Body>
							<Right>
								<Switch value={isRecommend}
										onValueChange={()=> dispatch(updateSettings({isRecommend: !isRecommend}))}/>
							</Right>
						</ListItem>
					</List>
					<Separator/>
					<List>
						<ListItem last onPress={this.quitAlert.bind(this)}>
							<Body style={{alignItems: 'center'}}>
							<Text>退出</Text>
							</Body>
						</ListItem>
					</List>
				</Content>
			</Container>
		);
	}

	quitAlert() {
		Alert.alert('提示信息', '确定要退出吗？', [
			{text: '确定', onPress: () => this.quit()},
			{text: '取消'},
		])
	}

	quit() {
		this.props.dispatch(logout());
		Actions.start({
			type: ActionConst.POP_AND_REPLACE
		});
	}
}

const styles = {
	list: {
		marginTop: 20,
		borderTopWidth: 0,
		borderBottomWidth: 0
	},
	listItem: {}
};
const mapStateToProps = state => ({
	...state.settingsStore
});
export default connect(mapStateToProps)(Settings);