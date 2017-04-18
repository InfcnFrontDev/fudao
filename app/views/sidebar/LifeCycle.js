import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Container, Header, Content, WebView} from "../../components/index";

/**
 * 我的生命周期
 */
class LifeCycle extends PureComponent {


	render() {
		let {loginUser} = this.props;
		return (
			<Content>
				<WebView uri={urls.pages.LIFE_CYCLE+'?userId='+this.props.loginUser.appid+'&sex='+this.props.loginUser['sex']+'&birthdate='+this.props.loginUser['birthdate']}/>
			</Content>
		)
	}
}

const mapStateToProps = state => ({
	loginUser: state.user.loginUser
});
export default connect(mapStateToProps)(LifeCycle);
