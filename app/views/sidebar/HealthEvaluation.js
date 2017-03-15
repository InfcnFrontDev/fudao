import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Content, WebView} from "../../components/index";
import {urls} from "../../utils/index"

/**
 * 健康测评
 */
class HealthEvaluation extends PureComponent {

	render() {
		return (
			<Content>
				<WebView uri={urls.pages.HEALTH_APPRAISAL}/>
			</Content>
		)
	}
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(HealthEvaluation);
