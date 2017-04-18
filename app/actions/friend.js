import * as types from "../actions/types";
import {request, urls} from "../utils/index";


// 获取我的好友列表
export function fetchMyFriendList(userId, callback) {
	return (dispatch) => {
		dispatch({
			type: types.FETCH_MY_FRIEND_LIST,
		});
		// 请求数据
		request.getJson(urls.apis.FRIEND_GETMYFRIENDLIST, {
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
				callback(result.success);
		}, (error) => {
			dispatch({
				type: types.RECEIVE_MY_FRIEND_LIST,
				payload: {}
			});
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
		request.getJson(urls.apis.FRIEND_GETMYFRIENDAPPLYLIST, {
			userId
		}).then((result) => {
			let newFriendList = result.obj;
			dispatch({
				type: types.RECEIVE_NEW_FRIEND_LIST,
				payload: {
					newFriendList
				}
			});
			// 回调处理
			if (callback)
				callback(result.success);
		}, (error) => {
			dispatch({
				type: types.RECEIVE_NEW_FRIEND_LIST,
				payload: {}
			});
		});
	}
}

export function clearFriend() {
	return (dispatch) => {
		dispatch({
			type: types.FRIEND_CLEAR,
		});
}
}