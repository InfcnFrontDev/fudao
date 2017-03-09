import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Header, Left, Right, Body, Button, Icon, Title} from "native-base";
import {openDrawer, closeDrawer} from "../actions/drawer";

class Header_ extends PureComponent {

	render() {
		let {back, menu, leftCmp, centerCmp, rightCmp, title} = this.props;

		if (!leftCmp) {
			if (back)
				leftCmp = (
					<Button transparent onPress={() => Actions.pop()}>
						<Icon name="arrow-back"/>
					</Button>
				);
			if (menu)
				leftCmp = (
					<Button transparent onPress={() => this.props.openDrawer()}>
						<Icon name="menu"/>
					</Button>
				);
		}

		if (!centerCmp) {
			if (title)
				centerCmp = (
					<Title>{title}</Title>
				)
		}

		if (!rightCmp) {

		}

		return (
			<Header>
				<Left>
					{leftCmp}
				</Left>
				<Body>
				{centerCmp}
				</Body>
				<Right>
					{rightCmp}
				</Right>
			</Header>
		)
	}
}


Header_.propTypes = {
	back: React.PropTypes.bool,
	menu: React.PropTypes.bool,
	title: React.PropTypes.string,
	leftCmp: React.PropTypes.any,
	centerCmp: React.PropTypes.any,
	rightCmp: React.PropTypes.any,
}

Header_.defaultProps = {
	back: false,
	menu: false,
	title: '',
	leftCmp: null,
	centerCmp: null,
	rightCmp: null
}

function bindAction(dispatch) {
	return {
		openDrawer: () => dispatch(openDrawer()),
		closeDrawer: key => dispatch(closeDrawer()),
	};
}
const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(Header_)
