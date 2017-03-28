import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {View, Image, DeviceEventEmitter, ScrollView} from "react-native";
import {Container, Content, Header} from "../../components/index";
import QuestionMyself from "./components/QuestionMyself";
import QuestionAll from "./components/QuestionAll";
import {fetchAllExpects, fetchMyExpects, addMyExpect, removeMyExpect} from "../../actions/expect";

/**
 * 我的期望
 */
class MyExpect extends PureComponent {

	render() {
		let {allExpectsGroupBy, myExpects, myExpectMap} = this.props;
		return (
			<Container>
				<Header {...this.props}/>
				<Content delay>
					<ScrollView>
						<QuestionMyself
							title="我的期望"
							items={myExpects}
							onItemPress={(item) => this._onItemPress(item)}
							onItemRemove={(item) => this._onItemRemove(item)}/>
						<QuestionAll
							items={allExpectsGroupBy}
							selectedItem={myExpectMap}
							onItemPress={(item) => this._onItemPress(item)}
							onItemAdd={(item)=>this._onItemAdd(item)}/>
					</ScrollView>
				</Content>
			</Container>
		)
	}

	componentDidMount() {
		const {dispatch, loginUser} = this.props;
		// 抓取所有问题
		dispatch(fetchAllExpects('aged'));
		// 抓取我的问题
		dispatch(fetchMyExpects(loginUser.userId));
	}

	/**
	 * 按下问题， 打开问题详情
	 * @param expect
	 * @private
	 */
	_onItemPress(expect) {
		Actions.myQuestionDetail({expect})
	}

	/**
	 * 从我的问题列表中移除
	 * @param expect
	 * @private
	 */
	_onItemRemove(expect) {
		const {dispatch, loginUser} = this.props;
		dispatch(removeMyExpect(loginUser.userId, expect));
	}

	/**
	 * 添加到我的问题列表中
	 * @param expect
	 * @private
	 */
	_onItemAdd(expect) {
		const {dispatch, loginUser} = this.props;
		dispatch(addMyExpect(loginUser.userId, expect));
	}

}

const styles = {};

const mapStateToProps = state => ({
	...state.user,
	...state.expect
});
export default connect(mapStateToProps)(MyExpect);
