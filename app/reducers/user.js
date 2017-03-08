import * as types from "../actions/types";
const initialState = {
	isLoading: false,
	userInfo: {
		id: '86516602126601339963921',
	},
	account:{

	}
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
				userInfo:{
					...payload.obj.userInformation,
					...payload.accountInfo
				}
			});
		case types.USER_LOGOUT:
			return initialState;
		default:
			return state;
	}
}
