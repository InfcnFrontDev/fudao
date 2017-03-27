import * as types from "../actions/types";
import {ToastAndroid} from "react-native";

const initialState = {
	allQuestions: [],
	allQuestionMap: {},
	allQuestionsGroupBy: {},
	myQuestions: [],
	myQuestionsGroupBy: {},
};
export default function (state = initialState, {type, payload}) {
	switch (type) {
		case types.QUESTION_RECEIVE_ALL_LIST:
			return Object.assign({}, state, {
				...payload
			});
		case types.QUESTION_RECEIVE_MY_LIST:
			return Object.assign({}, state, {
				...payload
			});
		case types.QUESTION_ADD_TO_MY_LIST:
			let question = payload.question;
			state.myQuestions.push(question);
			state.myQuestionsGroupBy[question.id] = question;
			state.allQuestionMap[question.id].selected = true;
			return Object.assign({}, state);
		default:
			return state;
	}
}
