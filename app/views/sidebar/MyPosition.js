import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Content, WebView} from "../../components/index";

/**
 * 我的位置
 */
export default class MyEnergy extends PureComponent {

	render() {
		let {lastPosition}=this.props;
		return (
			<Content>
				<WebView
					uri={urls.pages.MY_LOCATION+'?c=116.311132&y=39.982196'}/>
			</Content>
		)
	}
}

const mapStateToProps = state => ({
	...state.position
});
