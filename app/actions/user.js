import * as types from "../actions/types";
import {ToastAndroid} from "react-native";
// 登录
export function login(loginUser) {
	return (dispatch) => {
		dispatch({
			type: types.USER_LOGIN,
			payload: {
				loginUser
			}
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