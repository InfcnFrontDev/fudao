import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Actions} from "react-native-router-flux";
import {View, Image, DeviceEventEmitter, ScrollView} from "react-native";
import {Container, Content, Header} from "../../components/index";
import QuestionMyself from "./components/QuestionMyself";
import QuestionAll from "./components/QuestionAll";
import {fetchAllQuestions, fetchMyQuestions, addToMyQuestions, removeMyQuestion} from "../../actions/question";

/**
 * 我的问题
 */
class MyQuestion extends PureComponent {

	render() {
		let {allQuestionsGroupBy, myQuestions, myQuestionMap} = this.props;
		return (
			<Container>
				<Header {...this.props}/>
				<Content delay>
					<ScrollView>
						<QuestionMyself
							title="我的期望"
							items={myQuestions}
							onItemPress={(item) => this._onItemPress(item)}
							onItemRemove={(item) => this._onItemRemove(item)}/>
						<QuestionAll
							items={allQuestionsGroupBy}
							selectedItem={myQuestionMap}
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
		dispatch(fetchAllQuestions('aged'));
		// 抓取我的问题
		dispatch(fetchMyQuestions(loginUser.userId));
	}

	/**
	 * 按下问题， 打开问题详情
	 * @param question
	 * @private
	 */
	_onItemPress(question) {
		Actions.myQuestionDetail({question})
	}

	/**
	 * 从我的问题列表中移除
	 * @param question
	 * @private
	 */
	_onItemRemove(question) {
		const {dispatch, loginUser} = this.props;
		dispatch(removeMyQuestion(loginUser.userId, question));
	}

	/**
	 * 添加到我的问题列表中
	 * @param question
	 * @private
	 */
	_onItemAdd(question) {
		const {dispatch, loginUser} = this.props;
		dispatch(addToMyQuestions(loginUser.userId, question));
	}

}

const styles = {};

const mapStateToProps = state => ({
	...state.user,
	...state.question
});
export default connect(mapStateToProps)(MyQuestion);
