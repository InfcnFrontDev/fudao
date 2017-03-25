import React, {PureComponent} from "react";
import {ScrollView} from "react-native";
import {connect} from "react-redux";
import {Right, Button, Icon} from "native-base";
import {Actions} from "react-native-router-flux";
import {Container, Content, Header} from "../../components/index";
import Separator from "../../components/Separator";
import MyPhoto from "./components/MyCover";
import MyList from "./components/ListMenu";
import MyGrid from "./components/GridMenu";


/**
 * 我的
 */
class My extends PureComponent {

	render() {
		return (
			<Container>
				<Header menu {...this.props}/>

				<Content gray>
					<ScrollView>
						<MyPhoto/>
						<MyGrid/>
						<Separator/>
						<MyList />
						<Separator/>
					</ScrollView>
				</Content>
			</Container>
		)
	}
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(My);
