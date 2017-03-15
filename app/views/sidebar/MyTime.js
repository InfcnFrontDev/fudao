import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Container, Header, Content, WebView} from "../../components/index";

/**
 * 我的时间
 */
class MyTime extends PureComponent {

	render() {
		return (
			<Content>
				<WebView uri="http://echarts.baidu.com/examples.html"/>
			</Content>
		)
	}
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(MyTime);
