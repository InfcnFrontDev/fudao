import React, {Component} from "react";
import {StyleSheet, View, Text} from "react-native";
import NavBarView from "../components/NavBarView";

/**
 * 资讯
 */
class ArticleView extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<NavBarView {...this.props}>
				<Text>ArticleView</Text>
			</NavBarView>
		)
	}
}

export default (ArticleView);