import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Content, WebView} from "../../components/index";
import {urls} from "../../utils/index"

/**
 * 健康测评
 */
class HealthEvaluation extends PureComponent {

	render() {
		let {loginUser} = this.props;
		return (
			<Content>
				<WebView uri={urls.pages.HEALTH_APPRAISAL+'?userId='+this.props.loginUser.appid}/>
			</Content>
		)
	}
}

const mapStateToProps = state => ({
	loginUser: state.user.loginUser
});
export default connect(mapStateToProps)(HealthEvaluation);
