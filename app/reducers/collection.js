import * as types from "../actions/types";
const initialState = {
	isFetching: false,
	isRefreshing: false,
	collectionList: []
};
export default function (state = initialState, {type, payload}) {
	switch (type) {
		case types.MY_COLLECTION_FETCH_LIST:
			return Object.assign({}, state, {
				isFetching: true,
			});
		case types.MY_COLLECTION_REFRESH_LIST:
			return Object.assign({}, state, {
				isRefreshing: false,
			});
		case types.MY_COLLECTION_RECEIVE_LIST:
			return Object.assign({}, state, {
				isFetching: false,
				isRefreshing: false,
				...payload
			});
		case types.USER_LOGOUT:
			return initialState;
		default:
			return state;

	}
}
