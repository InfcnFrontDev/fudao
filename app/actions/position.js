import * as types from "../actions/types";

// 每当位置变化之后, 更新当前位置
export function updatePosition(lastPosition) {
	return (dispatch) => {
		dispatch({
			type: types.UPDATE_POSITION,
			payload: {
				lastPosition
			}
		});
	}
}

export function clearPosition() {
	return (dispatch) => {
		dispatch({
			type: types.CLEAR_POSITION,
		});
	}
}