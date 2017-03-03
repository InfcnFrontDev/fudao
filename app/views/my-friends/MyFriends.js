import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Container, Content, Left, Right, Body} from "native-base";
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

const mapStateToProps = state => ({
	account: state.account
});
export default connect(mapStateToProps)(MyFriends);
