import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Container, Header, Content, WebView} from "../../components/index";
import {urls} from "../../utils/index"

/**
 * 我的位置
 */
class MyEnergy extends PureComponent {

	render() {
		return (
			<Content>
				<WebView uri={urls.pages.MY_LOCATION}/>
			</Content>
		)
	}
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(MyEnergy);
