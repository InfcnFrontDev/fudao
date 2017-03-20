import * as types from "../actions/types";
import {toast} from "../utils/index"
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
			let loginUser = {};
			loginUser[payload.field] = payload.value;
			loginUser = Object.assign({}, state.loginUser, loginUser);
			return Object.assign({}, state, {
				loginUser
			});
		case types.USER_UPDATE_CHECK:
			let loginUser1= {};
			let str={};
            str[payload.field] = payload.value;
			loginUser1[payload.tableName]  = Object.assign({}, state.loginUser[payload.tableName], str);
			loginUser = Object.assign({}, state.loginUser, loginUser1);
			return Object.assign({}, state, {
				loginUser
			});
		default:
			return state;
	}
}
