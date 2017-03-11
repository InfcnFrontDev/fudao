import * as types from "../actions/types";
import {ToastAndroid} from "react-native";
// 更新设置
export function updateSettings(settings) {
	return (dispatch) => {
		dispatch({
			type: types.SETTINGS_UPDATE,
			payload: {
				...settings
			}
		});
	}
}