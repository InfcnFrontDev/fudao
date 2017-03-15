import * as types from "../actions/types";
import { ToastAndroid,} from "react-native";

const initialState = {
	rows:[],
	my_question:[],
	flag:true
};
export default function (state = initialState, {type, source}) {
	switch (type) {
		case types.MY_QUESTION_ROW:
			return Object.assign({}, state, {
				...source
			});
		case types.MY_QUESTION_CHANGE_QUESTION:
		ToastAndroid.show('reduece'+JSON.stringify(source.my_question),ToastAndroid.SHORT);

			return Object.assign({}, state, {
				my_question:source.my_question,
				flag:!state.flag,
			});
		default:
			return state;

	}
}
