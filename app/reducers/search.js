import * as types from "../actions/types";
const initialState = {
	isLoading: false,
	list: [],
};
export default function realm(state = initialState, {type, payload}) {
	switch (type) {
		case types.SEARCH_SYMPTOM_PROBLEM_FETCH_LIST:
			console.log(type, payload);
			return Object.assign({}, state, {
				isLoading: true
			});
		case types.SEARCH_SYMPTOM_PROBLEM_RECEIVE_LIST:
			return Object.assign({}, state, {
				isLoading: false,
				...payload
			});
		case types.SEARCH_SYMPTOM_PROBLEM_CLEAR_LIST:
			return Object.assign({}, state, {
				list: []
			});

		default:
			return state;

	}
}
