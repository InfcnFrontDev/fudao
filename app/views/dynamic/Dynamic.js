import React, {PureComponent} from "react";
import {observer} from "mobx-react/native";
import {Container, Header, HeaderIcon, Content} from "../../components/index";

/**
 * 动态
 */
@observer
export default class Dynamic extends PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Container>
				<Header menu {...this.props}/>
				<Content gray>

				</Content>
			</Container>
		)
	}

}
