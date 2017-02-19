import React, {Component} from "react";
import {connect} from "react-redux";
import {Container, Content, Title, Left, Right, Body, Form, Item, Text} from "native-base";
import {openDrawer, closeDrawer} from "../../actions/drawer";
import Header from "../../components/header/base";
import styles from "./styles";

/**
 * 资讯细览
 */
class ArticleDetail extends Component {

	render() {
		return (
			<Container>
				<Header>
					<Title>{this.props.title}</Title>
				</Header>
				<Content>
					<Text>{this.props.text}</Text>
				</Content>
			</Container>
		)
	}
}
function bindAction(dispatch) {
	return {};
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(ArticleDetail);