import * as types from "../actions/types";
const initialState = {
	loginUser: {}
};
export default function (state = initialState, {type, payload}) {
	switch (type) {
		case types.USER_LOGIN:
			return Object.assign({}, state, {
				...payload
			});
		case types.USER_LOGOUT:
			return initialState;
		case types.USER_UPDATE_INFO:
			state.loginUser[payload.field] = payload.value;
			return state;
		default:
			return state;
	}
}
