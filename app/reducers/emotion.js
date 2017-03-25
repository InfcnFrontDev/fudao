import * as types from "../actions/types";
const initialState = {
	updateTime: null,
	myEmotion:null,
};
export default function (state = initialState, {type, payload}) {
	switch (type) {
		case types.MY_EMOTION_UPDATE:
			return Object.assign({}, state, {
				updateTime: new Date().getTime(),
				...payload
			});
		case types.MY_EMOTION_CLEAR:
			return Object.assign({}, state, initialState);
		default:
			return state;
	}
}
