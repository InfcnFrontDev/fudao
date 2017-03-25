import * as types from "../actions/types";


// 更新我的情绪
export function updateMyEmotion(myEmotion) {
	return (dispatch) => {
		dispatch({
			type: types.MY_EMOTION_UPDATE,
			payload: {
				myEmotion
			}
		});
	}
}
//清空我的情绪
export function clearMyEmotion(myEmotion) {
	return (dispatch) => {
		dispatch({
			type: types.MY_EMOTION_CLEAR,
		});
	}
}