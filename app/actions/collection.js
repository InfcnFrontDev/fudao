import * as types from "../actions/types";
import {request, urls} from "../utils/";

//
export function fetchMyCollectionList(page) {
	return (dispatch) => {
		if (page) {
			if (page === 1) {
				dispatch({
					type: types.MY_COLLECTION_FETCH_LIST_REFRESH,
				});
			} else {
				dispatch({
					type: types.MY_COLLECTION_FETCH_LIST_PAGINATION,
					payload: {
						page: page
					}
				});
			}
		} else {
			dispatch({
				type: types.MY_COLLECTION_FETCH_LIST_FIRSTLOAD,
			});
		}


		// 请求数据
		request.getJson(urls.apis.ARTICLE_LIST, {
			name: '健康饮食',
			page
		}, (result) => {
			dispatch({
				type: types.MY_COLLECTION_RECEIVE_LIST,
				payload: {
					collectionList: result.obj.datas
				}
			});
		});
	}
}