import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Content, WebView} from "../../components/index";

/**
 * 健康测评
 */
class HealthEvaluation extends PureComponent {

	render() {
		return (
			<Content>
				<WebView uri="http://echarts.baidu.com/examples.html"/>
			</Content>
		)
	}
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(HealthEvaluation);
