import * as types from "../actions/types";
const initialState = {
	isLoading: false,
	accountInfo: {
		appid: '86516602126601339963921'
	},
};
export default function (state = initialState, {type, payload}) {
	switch (type) {
		case types.USER_LOGGING:
			return Object.assign({}, state, {
				isLoading: true,
				userInfo: null,
			});
		case types.USER_LOGIN:
			return Object.assign({}, state, {
				isLoading: false,
				...payload
			});
		case types.USER_LOGOUT:
			return initialState;
		default:
			return state;

	}
}
