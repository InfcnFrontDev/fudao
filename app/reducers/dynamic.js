import * as types from "../actions/types";
import { ToastAndroid,} from "react-native";

const initialState = {
	addPicture:[],
	dynamicList:[],
	nowShow:'',
};
export default function (state = initialState, {type, source}) {
	switch (type) {
		case types.NEW_DYNAMIC_ADD_PICTURE_ARR:
			var arr = state.addPicture;
			return Object.assign({}, state, {
				addPicture:arr.concat([source])
			});
		case types.DYNAMIC_LIST_LOAD:
			return Object.assign({}, state, {
				dynamicList:source.dynamicList
			});
		case types.DYNAMIC_LIST_SHOW:
			return Object.assign({}, state, {
				nowShow:source.nowShow
			});
		case types.DYNAMIC_LIST_ZAN_COMMENT:
			return Object.assign({}, state, {
				nowShow:source.nowShow,
				dynamicList:source.dynamicList
			});
		default:
			return state;

	}
}
