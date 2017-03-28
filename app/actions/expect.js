import * as types from "../actions/types";
import {request, urls} from "../utils/";

//清空我的期望和所有期望列表
export function clearAllExpectsAndMyExpects() {
	return (dispatch) => {
		dispatch({
			type: types.EXPECT_CLEAR_ALL_AND_MY,
		})
	}
}


/**
 * 根据人群获取所有期望
 * @param renqun
 */
export function fetchAllExpects(renqun) {
	return (dispatch) => {
		request.getJson(urls.apis.EXPECT_ALL_EXPECT_LIST, {
			renqunId: renqun
		}).then((res) => {
			let datas = res.obj,
				allExpects = [],
				allExpectMap = {},
				allExpectsGroupBy = {};

			// 数据转换
			datas.forEach((item) => {
				allExpectsGroupBy[item.name] = item.zixiuProjects;
				item.zixiuProjects.forEach((expect) => {
					allExpects.push(expect);
					allExpectMap[expect.id] = expect
				});
			});
			dispatch({
				type: types.EXPECT_RECEIVE_ALL_EXPECT,
				payload: {
					allExpects,
					allExpectMap,
					allExpectsGroupBy
				}
			})
		})
	}
}

/**
 * 所有用户的期望
 * @param userId
 */
export function fetchMyExpects(userId) {
	return (dispatch) => {
		request.getJson(urls.apis.EXPECT_USER_EXPECT_LIST, {
			userId: userId
		}).then((res) => {

			let myExpects = res.obj,
				myExpectMap = {};
			// 数据转换
			myExpects.forEach((item) => myExpectMap[item.id] = item);

			dispatch({
				type: types.EXPECT_RECEIVE_MY_EXPECT,
				payload: {
					myExpects,
					myExpectMap
				}
			})
		})
	}
}

/**
 * 删除用户期望
 * @param userId
 * @param expect
 */
export function removeMyExpect(userId, expect) {
	return (dispatch) => {
		request.getJson(urls.apis.EXPECT_REMOVE_USER_EXPECT, {
			userId: userId,
			diseaseId: expect.id,
		}).then((res) => {
			dispatch({
				type: types.EXPECT_REMOVE_MY_EXPECT,
				payload: {
					expect
				}
			})
		})
	}
}

/**
 * 添加期望
 * @param userId
 * @param expect
 */
export function addMyExpect(userId, expect) {
	return (dispatch) => {
		request.getJson(urls.apis.EXPECT_ADD_USER_EXPECT, {
			userId: userId,
			diseaseId: expect.id,
		}).then((res) => {
			dispatch({
				type: types.EXPECT_ADD_MY_EXPECT,
				payload: {
					expect
				}
			})
		})
	}
}
