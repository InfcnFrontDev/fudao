import React, {PureComponent} from "react";
import {StyleSheet, View, Text, Image, ActivityIndicator} from "react-native";
import {Container, Content, Loading} from "../../components/index";
import Header from "../../components/header/SearchHeader";
import {theme} from "../../utils/";

/**
 * 搜索用户
 */
class SearchUser extends PureComponent {

	state = {
		isFetching: false,
		inSearch: false,
		user: null
	};

	render() {
		let {isFetching, inSearch, user} = this.state;
		return (
			<Container>
				<Header placeholder="搜索" onSearch={this.search.bind(this)}/>
				<Content gray>
					{isFetching ? <Loading text="正在查找..."/> : (inSearch && user) ? null : this.renderNoUser() }
				</Content>
			</Container>
		);
	}

	renderNoUser() {
		return (
			<View style={styles.noUserView}>
				<Text>该用户不存在</Text>
			</View>
		)
	}

	// 搜索
	search(keyword) {
		const {dispatch} = this.props;
		if (keyword == '') {
			// dispatch(clearSymptomProblem())
		} else {
			// dispatch(searchSymptomProblem(keyword))
		}
	}
}

const styles = {
	content: {
		flex: 1,
		backgroundColor: theme.contentBgColor,
	},
	noUserView: {
		height: 100,
		alignItems: 'center',
		justifyContent: 'center'
	}
};

export default (SearchUser);