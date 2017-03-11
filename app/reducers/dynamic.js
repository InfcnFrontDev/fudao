import * as types from "../actions/types";
import { ToastAndroid,} from "react-native";

const initialState = {
	addPicture:[],
	dynamicList:[],
	nowShow:'',
	dynamicDetail:{},
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
				...source
			});
		default:
			return state;

	}
}
