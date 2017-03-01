//noinspection JSAnnotator
import React, {Component} from "react";
import {connect} from "react-redux";
import {Container, Title, Content, Left, Right, Body, Form, Input, Item} from "native-base";
import {openDrawer, closeDrawer} from "../../actions/drawer";
import Header from "../../components/header/IndexHeader";
import styles from "./styles";


/**
 * 主页
 */
class Home extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<Container style={styles.container}>
				<Header>
					<Title>{this.props.title}</Title>
				</Header>

				<Content padder>
					<Form>
						<Item>
							<Input placeholder="Username"/>
						</Item>
						<Item>
							<Input placeholder="Password"/>
						</Item>
					</Form>
				</Content>
			</Container>
		)
	}
}
function bindAction(dispatch) {
	return {
		openDrawer: () => dispatch(openDrawer()),
		closeDrawer: key => dispatch(closeDrawer()),
	};

}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(Home);
