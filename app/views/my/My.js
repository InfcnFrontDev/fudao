import React, {PureComponent} from "react";
import {ScrollView} from "react-native";
import {Container, Content, Header} from "../../components/index";
import Separator from "../../components/Separator";
import {observer} from "mobx-react/native";
import MyPhoto from "./components/MyCover";
import MyList from "./components/ListMenu";
import MyGrid from "./components/GridMenu";


/**
 * 我的
 */
@observer
export default class My extends PureComponent {

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
