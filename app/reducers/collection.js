import * as types from "../actions/types";
const initialState = {
	isFetching: false,
	isRefreshing: false,
	page: 1,
	collectionList: []
};
export default function (state = initialState, {type, payload}) {
	switch (type) {
		case types.MY_COLLECTION_FETCH_LIST_FIRSTLOAD:
			return Object.assign({}, state, {
				isFetching: true,
				page: 1,
			});
		case types.MY_COLLECTION_FETCH_LIST_REFRESH:
			return Object.assign({}, state, {
				isRefreshing: false,
				page: 1,
			});
		case types.MY_COLLECTION_FETCH_LIST_PAGINATION:
			return Object.assign({}, state, {
				isRefreshing: false,
				...payload
			});
		case types.MY_COLLECTION_RECEIVE_LIST:
			state.collectionList = payload.collectionList;
			if (state.page > 1) {
				state.collectionList.concat(payload.collectionList);
			}
			return Object.assign({}, state, {
				isFetching: false,
				isRefreshing: false,
			});
		default:
			return state;

	}
}
