import React, {Component} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Header, Button, Icon, Left, Right, Body} from "native-base";
import {openDrawer} from "../../actions/drawer";

class IndexHeader extends Component {

	render() {
		let {dispatch} = this.props;
		return (
			<Header>
				<Left>
					<Button transparent onPress={() => dispatch(openDrawer())}>
						<Icon name="menu"/>
					</Button>
				</Left>
				<Body>
				{this.props.children}
				</Body>
				<Right>
					<Button transparent onPress={()=>Actions.search()}><Icon name="search"/></Button>
					<Button transparent onPress={()=>Actions['message']()}><Icon name="ios-chatboxes"/></Button>
				</Right>
			</Header>
		)
	}
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(IndexHeader)
