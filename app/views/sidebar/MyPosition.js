import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Content, WebView} from "../../components/index";
import positionStore from "../../mobx/positionStore"
import userStore from "../../mobx/userStore";

/**
 * 我的位置
 */
export default class MyEnergy extends PureComponent {

	render() {
		let {lastPosition}=userStore;
		return (
			<Content>
				<WebView
					uri={urls.pages.MY_LOCATION+'?x='+lastPosition.coords.longitude+'&y='+lastPosition.coords.latitude}/>
			</Content>
		)
	}
}

const mapStateToProps = state => ({
	...state.position
});
