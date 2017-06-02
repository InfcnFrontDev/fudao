import React, {PureComponent} from "react";
import {Content, WebView} from "../../components/index";
import positionStore from "../../mobx/positionStore";

/**
 * 我的位置
 */
export default class MyEnergy extends PureComponent {

	render() {
		let {currentPosition}=positionStore;
		return (
			<Content>
				<WebView
					uri={urls.pages.MY_LOCATION + '?x=' + currentPosition.longitude +'&y='+ currentPosition.latitude}/>
			</Content>
		)
	}
}

const mapStateToProps = state => ({
	...state.position
});
