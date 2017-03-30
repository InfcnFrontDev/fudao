import * as types from "../actions/types";
import {ToastAndroid} from "react-native";
import _ from "lodash";

const initialState = {
	allQuestions: [],
	allQuestionMap: {},
	allQuestionsGroupBy: {},
	myQuestions: [],
	myQuestionMap: {},
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
			let item = payload.question;
			// 插入元素第一个位置
			state.myQuestions.unshift(item);
			state.myQuestionMap[item.id] = item;
			return Object.assign({}, state, {
				myQuestions: _.slice(state.myQuestions, 0),
				myQuestionMap: _.clone(state.myQuestionMap)
			});
		case types.QUESTION_REMOVE_MY_QUESTION:
			// 删除指定元素
			_.remove(state.myQuestions, (n) => n.id == payload.question.id);
			delete state.myQuestionMap[payload.question.id];
			return Object.assign({}, state, {
				myQuestions: _.slice(state.myQuestions, 0),
				myQuestionMap: _.clone(state.myQuestionMap)
			});
		case types.MY_QUESTION_CLEAR:
			return Object.assign({}, state, initialState);
		default:
			return state;
	}
}
