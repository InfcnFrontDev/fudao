import * as types from "../actions/types";

export function openDrawer() {
	return (dispatch) => {
		dispatch({
			type: types.OPEN_DRAWER
		});
	}
}

export function closeDrawer() {
	return (dispatch) => {
		dispatch({
			type: types.CLOSE_DRAWER,
		});
	}
}
