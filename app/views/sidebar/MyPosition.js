import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Content, WebView} from "../../components/index";
import positionStore from "../../mobx/positionStore"
import userStore from "../../mobx/userStore";

/**
 * 我的位置
 */
export default class MyEnergy extends PureComponent {
	componentWillMount(){
		userStore.getposition();

	}

	render() {
		let {lon,lat}=userStore;

let x=lon;
 let y=lat;
			return (
				<Content>
					<WebView
						uri={urls.pages.MY_LOCATION+"?x="+x+"&y="+y}/>
				</Content>
			)


	}
}

const mapStateToProps = state => ({
	...state.position
});
