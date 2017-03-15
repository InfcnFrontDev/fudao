import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Container, Header, Content, WebView} from "../../components/index";
import {urls} from "../../utils/index"

/**
 * 我的生命周期
 */
class LifeCycle extends PureComponent {

	render() {
		return (
			<Content>
				<WebView uri={urls.pages.LIFE_CYCLE}/>
			</Content>
		)
	}
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(LifeCycle);
