import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Container, Header, Content, WebView} from "../../components/index";

/**
 * 我的健康环
 */
class HealthRing extends PureComponent {


	render() {
		let {loginUser} = this.props;
		return (
			<Content>
				<WebView uri={urls.pages.HEALTH_CIRCLE+'?userid='+this.props.loginUser.appid+'&renqun='+this.props.loginUser['renqun']}/>
			</Content>
		)
	}
}

const mapStateToProps = state => ({
	loginUser: state.user.loginUser
});
export default connect(mapStateToProps)(HealthRing);
