import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Text, Container, Title, Content, View} from "native-base";
import Header from "../../components/header/IndexHeader";
import MyEnter from "./components/MyEnter.js";
import Headline from "./components/Headline.js";


/**
 * 主页
 */
class Home extends PureComponent {

	render() {
		return (
			<Container>
				<Header>
					<Title>{this.props.title}</Title>
				</Header>

				<Content style={styles.content}>
					<Headline />
					<MyEnter />
					<View>
						<Text>
							<Text style={styles.title}>Current position: </Text>
							{JSON.stringify(this.props.lastPosition)}
						</Text>
					</View>
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
	...state.user,
	...state.drawer,
	...state.position,
});
export default connect(mapStateToProps)(Home);
