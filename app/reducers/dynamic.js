import * as types from "../actions/types";
import { ToastAndroid,} from "react-native";

const initialState = {
	addPicture:[],
	renderPicture:[],
	dynamicList:[],
	nowShow:'',
	dynamicDetail:{},
	rightButton:'发表'
};
export default function (state = initialState, {type, source}) {
	switch (type) {
		case types.NEW_DYNAMIC_ADD_PICTURE_ARR:
			var arr = state.addPicture;
			return Object.assign({}, state, {
				addPicture:arr.concat([source])
			});
		case types.NEW_DYNAMIC_ADD_RENDER_PICTURE_ARR:
			var arr = state.renderPicture;
			return Object.assign({}, state, {
				renderPicture:arr.concat([source])
			});
		case types.DYNAMIC_LIST_LOAD:
			return Object.assign({}, state, {
				...source
			});
		default:
			return state;

	}
}
