import * as types from "../actions/types";

const initialState = {
	drawerState: 'closed',
};

export default function (state = initialState, {type}) {
	switch (type) {
		case types.OPEN_DRAWER:
			return Object.assign({}, state, {
				drawerState: 'opened'
			});
		case types.CLOSE_DRAWER:
			return Object.assign({}, state, {
				drawerState: 'closed',
			});
		default:
			return state;
	}
}
