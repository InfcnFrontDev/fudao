import * as types from "../actions/types";
const initialState = {
	isLoading: false,
	text: '正在加载...'
};
export default function (state = initialState, {type, payload}) {
	switch (type) {
		case types.LOADING_SHOW:
			return Object.assign({}, state, {
				isLoading: true,
				text: payload.text || initialState.text
			});
		case types.LOADING_HIDE:
			return Object.assign({}, state, {
				isLoading: false
			});
		default:
			return state;
	}
}
