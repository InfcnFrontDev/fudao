import React, {PureComponent} from "react";
import {StyleSheet, View, Text, Image, ActivityIndicator} from "react-native";
import {connect} from "react-redux";
import {Container, Content} from "../../components/index";
import Header from "../../components/header/SearchHeader";
import {showLoading, hideLoading} from "../../actions/loading";
import {request, urls} from "../../utils/index";

/**
 * 搜索用户
 */
class SearchUser extends PureComponent {

	state = {
		notExist: false,
	};

	render() {
		let {notExist} = this.state;
		return (
			<Container>
				<Header placeholder="搜索" onSearch={this._onSearch.bind(this)}/>
				<Content gray>
					{notExist ? this.renderNoUser() : null }
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
	_onSearch(phone) {
		const {dispatch} = this.props;

		dispatch(showLoading());

		request.getJson(urls.apis.USER_SEARCH, {phone})
			.then((data) => {
				dispatch(hideLoading());
				alert(JSON.stringify(data));
			}, (error) => {
				dispatch(hideLoading());
			});
	}

}

const styles = {
	noUserView: {
		height: 100,
		alignItems: 'center',
		justifyContent: 'center'
	}
};
const mapStateToProps = state => ({});
export default connect(mapStateToProps)(SearchUser);