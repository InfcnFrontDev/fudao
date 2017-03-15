import * as types from "../actions/types";
import {request, urls} from "../utils/index";


// 获取我的收藏列表
export function fetchMyCollectionList(userId, page, callback) {
	return (dispatch) => {
		dispatch({
			type: types.MY_COLLECTION_FETCH_LIST,
		});
		// 请求数据
		request.getJson(urls.apis.MY_COLLECTION_LIST, {
			appid: userId,
			page
		}).then((result) => {
			if (result.success) {
				let friendList = result.obj;
				dispatch({
					type: types.MY_COLLECTION_RECEIVE_LIST,
					payload: {
						friendList
					}
				});
			}
			if (callback)
				callback(result.success);
		}, (error) => {
			dispatch({
				type: types.MY_COLLECTION_RECEIVE_LIST,
				payload: {}
			});
		});
	}
}