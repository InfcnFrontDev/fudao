import * as types from "../actions/types";
import { ToastAndroid,} from "react-native";

const initialState = {
	rows:[],
	my_question:[],
	flag:true,
	allQuestions:[],
	refresh:true,
};
export default function (state = initialState, {type, source}) {
	switch (type) {
		case types.MY_QUESTION_ROW:
			return Object.assign({}, state, {
				...source
			});
		case types.MY_QUESTION_ALL_QUESTION:
			return Object.assign({}, state, {
				...source
			});
		case types.MY_QUESTION_CHANGE_QUESTION:
			return Object.assign({}, state, {
				my_question:source.my_question,
				flag:!state.flag,
			});
		case types.MY_QUESTION_DEL_QUESTION_CHANGE_ALL_QUESTIONS:
			return Object.assign({}, state, {
				allQuestions:source.allQuestions,
				refresh:!state.refresh,
			});
		default:
			return state;

	}
}
