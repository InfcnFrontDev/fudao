import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Container, Title, Content, Left, Right, Body, Text, Button} from "native-base";
import Header from "../../components/header/IndexHeader";
import MyEnter from "./components/MyEnter.js";
import Headline from "./components/Headline.js";


/**
 * 主页
 */
class Home extends PureComponent {
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<Container>
				<Header>
					<Title>{this.props.title}</Title>
				</Header>

				<Content style={styles.content}>
					<Headline />
					<MyEnter />
				</Content>
			</Container>
		)
	}
}

const styles ={
	content:{
		backgroundColor:'#fff'
	}
}
const mapStateToProps = state => ({});
export default connect(mapStateToProps)(Home);
