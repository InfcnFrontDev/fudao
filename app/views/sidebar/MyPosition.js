import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Container, Header, Content, WebView} from "../../components/index";
import {urls} from "../../utils/index"

/**
 * 我的位置
 */
class MyEnergy extends PureComponent {

	render() {
		let {lastPosition}=this.props;
		return (
			<Content>
				<WebView uri={urls.pages.MY_LOCATION+'?position='+JSON.stringify(this.props.lastPosition)}/>
			</Content>
		)
	}
}

const mapStateToProps = state => ({
	lastPosition:state.position
});
export default connect(mapStateToProps)(MyEnergy);
