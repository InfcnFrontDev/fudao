import * as types from "../actions/types";
import {ToastAndroid} from "react-native";
import _ from "lodash";

const initialState = {
	allExpects: [],
	allExpectMap: {},
	allExpectsGroupBy: {},
	myExpects: [],
	myExpectMap: {},
};
export default function (state = initialState, {type, payload}) {
	switch (type) {
		case types.EXPECT_RECEIVE_ALL_EXPECT:
			return Object.assign({}, state, {
				...payload
			});
		case types.EXPECT_RECEIVE_MY_EXPECT:
			return Object.assign({}, state, {
				...payload
			});
		case types.EXPECT_ADD_MY_EXPECT:
			let item = payload.expect;
			// 插入元素第一个位置
			state.myExpects.unshift(item);
			state.myExpectMap[item.id] = item;
			return Object.assign({}, state, {
				myExpects: _.slice(state.myExpects, 0),
				myExpectMap: _.clone(state.myExpectMap)
			});
		case types.EXPECT_REMOVE_MY_EXPECT:
			// 删除指定元素
			_.remove(state.myExpects, (n) => n.id == payload.expect.id);
			delete state.myExpectMap[payload.expect.id];
			return Object.assign({}, state, {
				myExpects: _.slice(state.myExpects, 0),
				myExpectMap: _.clone(state.myExpectMap)
			});
		case types.EXPECT_CLEAR_ALL_AND_MY:
			return Object.assign({}, state, initialState);
		default:
			return state;
	}
}
