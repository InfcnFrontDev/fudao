import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Container, Header, Content, WebView} from "../../components/index";
import DetailsModal from "../home/components/DetailsModal";

/**
 * 我的健康环
 */
export default class HealthRing extends PureComponent {


	render() {
		let {loginUser} = this.props;
		return (
			<Content>
				<WebView uri={urls.pages.HEALTH_CIRCLE+'?i=0'}/>
				<DetailsModal ref={(e)=>this._groupSelectModal = e}></DetailsModal>
			</Content>
		)
	}
	openDetailsBox(data){
		//alert(data.substring(0,4));
		if(data=='修改时间'){
			this._TimeModal.show(data);
		}else if(data.substring(0,4)=='获取运动'){
			this._YunDongModal.show(data.substring(4,data.length));
		}else{
			this._groupSelectModal.show(data);
		}

	}
}

const mapStateToProps = state => ({
	loginUser: state.user.loginUser
});
