import * as types from "../actions/types";
const initialState = {
	isRecommend: true
};
export default function (state = initialState, {type, payload}) {
	switch (type) {
		case types.SETTINGS_UPDATE:
			return Object.assign({}, state, {
				...payload
			});
		default:
			return state;
	}
}
