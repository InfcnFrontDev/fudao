import * as types from "../actions/types";
import {ToastAndroid} from "react-native";
// 登录
export function login(user) {
	return (dispatch) => {
		dispatch({
			type: types.USER_LOGIN,
			payload: {
				user
			}
		});
	}
}
// 注销
export function logout() {
	return (dispatch) => {
		dispatch({
			type: types.AUTH_LOGOUT
		});
	}
}