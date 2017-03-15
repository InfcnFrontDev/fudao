import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Container, Header, Content, WebView} from "../../components/index";
import {urls} from "../../utils/index"

/**
 * 我的时间
 */
class MyTime extends PureComponent {

	render() {
		return (
			<Content>
				<WebView uri={urls.pages.MY_TIME}/>
			</Content>
		)
	}
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(MyTime);
