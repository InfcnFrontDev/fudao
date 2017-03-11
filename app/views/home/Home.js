import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Container, Title, Content} from "native-base";
import {Button, Text} from "../../components/index";
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
					<Text/>
					<Button text="abcd" onPress={()=>alert('abcd')}/>
				</Content>
			</Container>
		)
	}
}

const styles = {
	content: {
		backgroundColor: '#fff'
	}
}
const mapStateToProps = state => ({
	...state.userStore
});
export default connect(mapStateToProps)(Home);
