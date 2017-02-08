'use strict';
import React, {ListView} from "react-native";
import * as TYPES from "../constants/actionTypes";
var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

const initialState = {
	messageListData: [],
	messageListFetching: false,
	messageListFetched: false,
	error: ''
};

export default function messageList(state = initialState, action) {
	state = Object.assign({}, state, {
		messageListFetched: false,
	});
	switch (action.type) {
		case TYPES.FETCH_MESSAGE_LIST_RESULT:
			return Object.assign({}, state, {
				messageListFetching: true,
				messageListData: dataSource.cloneWithRows([]),
			});
		case TYPES.RECEIVE_MESSAGE_LIST_RESULT:
			state.messageListData.push(action.responseData);
			return Object.assign({}, state, {
				messageListFetching: false,
				messageListFetched: true,
				messageListData: state.messageListData,
				error: action.error,
			});
		default:
			return state;
	}
}