import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {View} from "native-base";
import {Actions} from "react-native-router-flux";
import {Container, Content, Header, HeaderIcon} from "../../components/index";
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
					<View style={{flexDirection: 'row'}}>
						<HeaderIcon onPress={()=>Actions.search()} name="search"/>
						<HeaderIcon onPress={()=>Actions.message()} name="ios-chatboxes"/>
					</View>
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
