import React, {PureComponent} from "react";
import {View, TouchableNativeFeedback} from "react-native";
import {connect} from "react-redux";
import {Container, Title, Content, Left, Right, Body} from "native-base";
import Header from "../../components/header/IndexHeader";
import Separator from "../../components/Separator";
import MyPhoto from "./components/MyPhoto";
import MyList from "./components/MyList";
import MyGrid from "./components/MyGrid";


/**
 * 我的
 */
class My extends PureComponent {

	render() {
		return (
			<Container>
				<Header>
					<Title>{this.props.title}</Title>
				</Header>

				<Content>
					<MyPhoto/>
					<MyGrid/>
					<Separator/>
					<MyList />
					<Separator/>
				</Content>
			</Container>
		)
	}
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(My);
