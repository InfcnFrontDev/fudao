import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Container, Header, Content, WebView} from "../../components/index";

/**
 * 我的生命周期
 */
export default class LifeCycle extends PureComponent {


	render() {
		let {loginUser} = this.props;
		return (
			<Content>
				<WebView uri={urls.pages.LIFE_CYCLE+'?sex=0&birthdate=1992-02-20'}/>
			</Content>
		)
	}
}

const mapStateToProps = state => ({
	loginUser: state.user.loginUser
});
