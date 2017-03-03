import React, {PureComponent} from "react";
import {Container, Title, Content, Left, Right, Body} from "native-base";
import Header from "../../components/header/BaseHeader";


/**
 * 我的好友
 */
class MyFriends extends PureComponent {

	render() {
		return (
			<Container>
				<Header {...this.props}/>
				<Content>
				</Content>
			</Container>
		)
	}
}

export default (MyFriends);
