import React, {PureComponent} from "react";
import {TouchableOpacity} from "react-native";
import {connect} from "react-redux";
import {Container, Content, Left, Right, Body, Grid, Row, Col, Icon, Text, View} from "native-base";
import {Actions} from "react-native-router-flux";
import Header from "../../components/header/search";
import styles from "./styles";
import Category from "./category";
import Result from "./result";
import {request, urls} from "../../utils/";

/**
 * 搜索
 */
class Search extends PureComponent {

	constructor(props) {
		super(props);
		this.state = {
			query: '',
			results: null
		};
	}

	render() {
		let {results} = this.state;
		return (
			<Container>
				<Header placeholder="搜索" onSearch={(query) => this.onSearch(query)}/>
				<Content style={styles.content}>
					{results ? <Result/> : <Category />}
				</Content>
			</Container>
		)
	}

	onSearch(query) {
		let results = null;
		if (query.length > 0) {
			results = [];
		}
		this.setState({
			query, results
		});
	}
}

function bindAction(dispatch) {
	return {};
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, bindAction)(Search);