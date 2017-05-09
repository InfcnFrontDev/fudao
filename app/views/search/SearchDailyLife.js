import React, {PureComponent} from "react";
import {Container, Content, Text} from "native-base";
import Header from "../../components/header/SearchHeader";

/**
 * 搜索 -> 日常生活
 */
export default class SearchDailyLife extends PureComponent {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Container>
				<Header placeholder="搜索日常生活"/>
				<Content>
					<Text>日常生活</Text>
				</Content>
			</Container>
		);
	}
}