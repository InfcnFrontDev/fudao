import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Container, Header, Content, WebView} from "../../components/index";

/**
 * 线下服务
 */
class OfflineService extends PureComponent {

	render() {
		return (
			<Container>
				<Header back {...this.props} />
				<Content>
					<WebView uri="http://echarts.baidu.com/examples.html"/>
				</Content>
			</Container>
		)
	}
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(OfflineService);
