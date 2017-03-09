import * as types from "../actions/types";
const initialState = {
	user: {}
};
export default function (state = initialState, {type, payload}) {
	switch (type) {
		case types.USER_LOGIN:
			return Object.assign({}, state, {
				...payload

			});
		case types.AUTH__LOGOUT:
			return initialState;
		default:
			return state;
	}
}
