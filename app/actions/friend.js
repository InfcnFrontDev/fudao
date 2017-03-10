import * as types from "../actions/types";
import {request, urls} from "../utils/index";


//
export function fetchMyFriendList(userId, callback) {
	return (dispatch) => {
		dispatch({
			type: types.FETCH_MY_FRIEND_LIST,
		});

		// 请求数据
		request.getJson(urls.apis.MY_FRIENDS_LIST, {
			userId
		}).then((result) => {
			if (result.success) {
				let friendList = result.obj;
				dispatch({
					type: types.RECEIVE_MY_FRIEND_LIST,
					payload: {
						friendList
					}
				});
			}
			if (callback)
				callback();
		});
	}
}

// 获取新朋友列表
export function fetchNewFriendList(userId, callback) {
	return (dispatch) => {
		dispatch({
			type: types.FETCH_NEW_FRIEND_LIST,
		});

		// 请求数据
		request.getJson(urls.apis.FRIEND_APPLY_LIST, {
			userId
		}).then((result) => {
			let newFriendList = result.obj;
			dispatch({
				type: types.RECEIVE_NEW_FRIEND_LIST,
				payload: {
					newFriendList
				}
			});
		}, (error) => {
			let newFriendList = result.obj;
			dispatch({
				type: types.RECEIVE_NEW_FRIEND_LIST,
				payload: {}
			});
		});
	}
}