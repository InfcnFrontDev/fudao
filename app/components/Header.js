import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Header, Left, Right, Body, Button, Icon, Title} from "native-base";
import {openDrawer, closeDrawer} from "../actions/drawer";

class Header_ extends PureComponent {

	render() {
		let {back, menu, left, center, right, title} = this.props;

		if (!left) {
			if (back)
				left = (
					<Button transparent onPress={() => Actions.pop()}>
						<Icon name="arrow-back"/>
					</Button>
				);
			if (menu)
				left = (
					<Button transparent onPress={() => this.props.openDrawer()}>
						<Icon name="menu"/>
					</Button>
				);
		}

		if (!center) {
			if (title)
				center = (
					<Title >{title}</Title>
				)
		}

		if (!right) {

		}

		return (
			<Header>
				<Left>
					{left}
				</Left>
				<Body>
				{center}
				</Body>
				<Right>
					{right}
				</Right>
			</Header>
		)
	}
}


Header_.propTypes = {
	back: React.PropTypes.bool,// 返回按钮
	menu: React.PropTypes.bool, // 有菜单按钮
	title: React.PropTypes.string, // 标题
	left: React.PropTypes.any, // left
	center: React.PropTypes.any, // center
	right: React.PropTypes.any, // right
}

Header_.defaultProps = {
	back: false,
	menu: false,
	title: '',
	left: null,
	center: null,
	right: null
}

function bindAction(dispatch) {
	return {
		openDrawer: () => dispatch(openDrawer()),
		closeDrawer: key => dispatch(closeDrawer()),
	};
}
const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(Header_)
