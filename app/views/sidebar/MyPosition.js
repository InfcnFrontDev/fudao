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
		let {location}=userStore;

let x=location.location.lng;
 let y=location.location.lat;
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
