import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Right, Button, Icon} from "native-base";
import {Actions} from "react-native-router-flux";
import {Container, Content, Header} from "../../components/index";
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
				<Header menu {...this.props} right={
					<Right>
						<Button transparent onPress={()=>Actions.search()}><Icon name="search"/></Button>
						<Button transparent onPress={()=>Actions.message()}><Icon name="ios-chatboxes"/></Button>
					</Right>
				}/>

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
