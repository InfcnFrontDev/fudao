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
		default:
			return state;
	}
}
