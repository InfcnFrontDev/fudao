import React, {PureComponent} from "react";
import {Alert} from "react-native";
import {Actions, ActionConst} from "react-native-router-flux";
import {observer} from "mobx-react/native";
import {Container, Header, Content, List, Separator} from "../../components/index";
import {Body, Right, Switch, ListItem, Text} from "native-base";
import settingsStore from "../../mobx/settingsStore";
import userStore from "../../mobx/userStore";

/**
 * 系统设置
 */
@observer
export default class Settings extends PureComponent {

	render() {
		let {isRecommend} = settingsStore;
		return (
			<Container>
				<Header {...this.props}/>
				<Content gray>
					<List>
						<ListItem last>
							<Body>
							<Text>是否推送</Text>
							</Body>
							<Right>
								<Switch value={isRecommend}
										onValueChange={()=> settingsStore.isRecommend = !isRecommend}/>
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
		userStore.logout();
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