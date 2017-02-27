import React, {PureComponent} from "react";
import {Container, Content, Left, Right, Body, Text} from "native-base";
import Header from "../../../components/header/search";
import styles from "./styles";
import Result from "./result";

/**
 * 搜索 -> 症状和问题
 */
class SearchSymptomProblem extends PureComponent {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Container>
				<Header placeholder="搜索症状和问题"/>
				<Content>
					<Result/>
				</Content>
			</Container>
		);
	}
}

export default (SearchSymptomProblem);