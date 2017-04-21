import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Container, Header, Content, WebView} from "../../components/index";

/**
 * 我的时间
 */
export default class MyTime extends PureComponent {

	render() {
		let{loginUser}=this.props;
		return (
			<Content>
				<WebView uri={urls.pages.MY_TIME+'?crowd=aged'}/>
			</Content>
		)
	}
}

const mapStateToProps = state => ({
	loginUser: state.user.loginUser
});
