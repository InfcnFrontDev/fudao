import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Container, Header, Content, WebView} from "../../components/index";
import {urls} from "../../utils/index"

/**
 * 我的健康环
 */
class HealthRing extends PureComponent {

	render() {
		return (
			<Content>
				<WebView uri={urls.pages.HEALTH_CIRCLE}/>
			</Content>
		)
	}
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(HealthRing);
