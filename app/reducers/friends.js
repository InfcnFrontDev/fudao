import * as types from "../actions/types";
const initialState = {
	isFetching: false,
	friendList: [],
};
export default function (state = initialState, {type, payload}) {
	switch (type) {
		case types.MY_FRIENDS_FETCH_LIST:
			return Object.assign({}, state, {
				isFetching: true,
			});
		case types.MY_FRIENDS_RECEIVE_LIST:
			return Object.assign({}, state, {
				isFetching: false,
				...payload
			});
		default:
			return state;

	}
}
