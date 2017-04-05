import * as types from "../actions/types";
const initialState = {
	lastPosition: 'unknown',
};
export default function (state = initialState, {type, payload}) {
	switch (type) {
		case types.UPDATE_POSITION:
			return Object.assign({}, state, {
				...payload
			});
		case types.CLEAR_POSITION:
			return Object.assign({}, state,initialState);
		default:
			return state;
	}
}
