'use strict';
import * as TYPES from './actionTypes';
import request from '../utils/request';

export function fetchMessageList(userId) {
	return dispatch => {
		dispatch(fetchMessageListResult());
		return request('http://192.168.10.58:9095/api/MessageApi/sendMessage?msgFrom=sunq&msgTo=weil&content=hello123')
			.then((responseData) => {
				if (responseData) {
					dispatch(receiveMessageListResult(responseData));
				} else {
					dispatch(receiveMessageListResult([]));
				}
			})
			.catch((error) => {
				console.error('fetchMessageList error: ' + error);
				dispatch(receiveMessageListResult([], error));
			})
	}
}

function fetchMessageListResult() {
	return {
		type: TYPES.FETCH_MESSAGE_LIST_RESULT,
	}
}

export function receiveMessageListResult(responseData, error) {
	return {
		type: TYPES.RECEIVE_MESSAGE_LIST_RESULT,
		responseData: responseData,
		error: error,
	}
}
