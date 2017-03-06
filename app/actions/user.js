import * as types from "../actions/types";
import {request, urls} from "../utils/";

// 登录
export function login() {
	return (dispatch) => {
		dispatch({
			type: types.USER_LOGGING,
		});

		// 请求数据
		request.getJson(urls.test, (result) => {
			dispatch({
				type: types.USER_LOGIN,
				payload: {
					...result
				}
			});
		});
	}
}
// 注销
export function logout() {
	return (dispatch) => {
		dispatch({
			type: types.USER_LOGOUT
		});
	}
}