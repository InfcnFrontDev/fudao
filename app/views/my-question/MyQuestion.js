import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {View, Image, DeviceEventEmitter, ScrollView} from "react-native";
import {Container, Content, Header} from "../../components/index";
import QuestionMyself from "./components/QuestionMyself";
import QuestionAll from "./components/QuestionAll";
import {fetchAllQuestions, fetchMyQuestions, addToMyQuestions} from "../../actions/question";

/**
 * 我的问题
 */
class MyQuestion extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			allQuestionsGroupBy: null,
			myQuestionIds: {
				"17": {},
			},
		}
	}

	render() {
		let {allQuestionsGroupBy, myQuestionsGroupBy} = this.props;
		return (
			<Container>
				<Header {...this.props}/>
				<Content delay>
					<ScrollView>
						<QuestionMyself />
						{allQuestionsGroupBy &&
						<QuestionAll rowsData={allQuestionsGroupBy} selectedData={myQuestionsGroupBy}
									 onAdd={(rowData)=>this._onAddToMyQuestion(rowData)}/>}
					</ScrollView>
				</Content>
			</Container>
		)
	}

	componentDidMount() {
		const {dispatch, userId} = this.props;
		dispatch(fetchAllQuestions('aged'));
		dispatch(fetchMyQuestions(userId));
	}

	_onAddToMyQuestion(question) {
		const {dispatch, userId} = this.props;
		dispatch(addToMyQuestions(userId, question));
	}

}

const styles = {};

const mapStateToProps = state => ({
	renqun: state.user.loginUser.renqun,
	userId: state.user.loginUser.appid,
	my_question: state.myQuestion.my_question,
	...state.question
});
export default connect(mapStateToProps)(MyQuestion);
