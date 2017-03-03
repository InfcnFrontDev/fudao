import * as types from "../actions/types";
import {request, urls} from "../utils/";

//
export function fetchMyCollectionList(appid) {
	return (dispatch) => {
		dispatch({
			type: types.MY_COLLECTION_FETCH_LIST,
		});

		// 请求数据
		request.getJson(urls.apis.MY_COLLECTION_LIST, {
			appid
		}, (result) => {

			console.log(result);

			dispatch({
				type: types.MY_COLLECTION_RECEIVE_LIST,
				payload: {
					collectionList: result.obj.datas
				}
			});
		});
	}
}
//
export function refreshMyCollectionList() {
	return (dispatch) => {
		dispatch({
			type: types.MY_COLLECTION_REFRESH_LIST,
		});

		// 请求数据
		request.getJson(urls.apis.MY_COLLECTION_LIST, (result) => {
			dispatch({
				type: types.MY_COLLECTION_RECEIVE_LIST,
				payload: {
					result
				}
			});
		});
	}
}