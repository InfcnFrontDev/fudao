import * as types from "../actions/types";
const initialState = {
	isFetching: false,
	friendList: [],
	friendNickMap: {},
	newFriendList: []
};
export default function (state = initialState, {type, payload}) {
	switch (type) {
		case types.FETCH_MY_FRIEND_LIST:
			return Object.assign({}, state, {
				isFetching: true,
			});
		case types.RECEIVE_MY_FRIEND_LIST:
			let friendList = payload.friendList;

			// userId => userNick
			let friendNickMap = {};
			friendList.forEach((f) => friendNickMap[f.friendId] = f.friendNick);

			return Object.assign({}, state, {
				isFetching: false,
				friendList,
				friendNickMap
			});
		case types.FETCH_NEW_FRIEND_LIST:
			return Object.assign({}, state, {
				isFetching: true,
			});
		case types.RECEIVE_NEW_FRIEND_LIST:
			return Object.assign({}, state, {
				isFetching: false,
				...payload
			});
		default:
			return state;
	}
}
