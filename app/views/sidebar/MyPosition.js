import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Content, WebView} from "../../components/index";

/**
 * 我的位置
 */
class MyEnergy extends PureComponent {

	render() {
		let {lastPosition}=this.props;
		return (
			<Content>
				<WebView
					uri={urls.pages.MY_LOCATION+'?x=' + lastPosition.coords.longitude + '&y=' + lastPosition.coords.latitude}/>
			</Content>
		)
	}
}

const mapStateToProps = state => ({
	...state.position
});
export default connect(mapStateToProps)(MyEnergy);
