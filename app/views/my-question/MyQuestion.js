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
		let {allQuestionsGroupBy, myQuestions, myQuestionMap} = this.props;
		return (
			<Container>
				<Header {...this.props}/>
				<Content delay>
					<ScrollView>
						{myQuestions &&
						<QuestionMyself
							items={myQuestions}
							onItemPress={(item) => this._onItemPress(item)}
							onItemRemove={(item) => this._onItemRemove(item)}/>
						}
						{allQuestionsGroupBy &&
						<QuestionAll
							rowsData={allQuestionsGroupBy}
							selectedData={myQuestionMap}
							onItemPress={(item) => this._onItemPress(item)}
							onItemAdd={(item)=>this._onItemAdd(item)}/>}
					</ScrollView>
				</Content>
			</Container>
		)
	}

	componentDidMount() {
		const {dispatch, loginUser} = this.props;
		dispatch(fetchAllQuestions('aged'));
		dispatch(fetchMyQuestions(loginUser.userId));
	}

	_onItemPress(question) {
		Actions.myQuestionDetail({
			question
		})
	}

	_onItemRemove(question) {
		const {dispatch, loginUser} = this.props;
		dispatch(removeMyQuestion(loginUser.userId, question));
	}

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
