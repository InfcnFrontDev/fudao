//noinspection JSAnnotator
import React, {Component} from "react";
import {connect} from "react-redux";
import {Container, Title, Content, Left, Right, Body, Form, Input, Item} from "native-base";
import Header from "../../components/header/IndexHeader";


/**
 * 主页
 */
class Home extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<Container>
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
const mapStateToProps = state => ({});
export default connect(mapStateToProps)(Home);
