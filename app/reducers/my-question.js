import * as types from "../actions/types";
import { ToastAndroid,} from "react-native";

const initialState = {
	my_question:[],
	flag:true,
	allQuestions:[],
	refresh:true,
	changeRowID:0,
	my_expect:[],
	allExcepts:[],

};
export default function (state = initialState, {type, source}) {
	switch (type) {
		case types.MY_QUESTION:
			return Object.assign({}, state, {
				...source
			});
		case types.MY_QUESTION_ALL_QUESTION:
			return Object.assign({}, state, {
				...source
			});
		case types.MY_QUESTION_CHANGE:
			return Object.assign({}, state, {
				...source,
				flag:!state.flag,
			});
		case types.MY_QUESTION_DEL_QUESTION_CHANGE_ALL_QUESTIONS:
			return Object.assign({}, state, {
				...source,
				refresh:!state.refresh,
			});

		default:
			return state;

	}
}
