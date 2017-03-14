import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {Text, View} from "native-base";
import {Container, Content, Header, HeaderIcon} from "../../components/index";
import MyEnter from "./components/MyEnter.js";
import Headline from "./components/Headline.js";


/**
 * 主页
 */
class Home extends PureComponent {

	render() {
		return (
			<Container>
				<Header menu {...this.props} right={
					<View style={{flexDirection: 'row'}}>
						<HeaderIcon onPress={()=>Actions.search()} name="search"/>
						<HeaderIcon onPress={()=>Actions.message()} name="ios-chatboxes"/>
					</View>
				}/>

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
