import * as types from "../actions/types";
import {ToastAndroid} from "react-native";

// 登录
export function showLoading(text) {
	return (dispatch) => {
		dispatch({
			type: types.LOADING_SHOW,
			payload: {
				text
			}
		});
	}
}
// 注销
export function hideLoading() {
	return (dispatch) => {
		dispatch({
			type: types.LOADING_HIDE
		});
	}
}