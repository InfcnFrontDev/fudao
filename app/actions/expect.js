import * as types from "../actions/types";
import {request, urls} from "../utils/";
import groupBy from 'lodash/groupBy'

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
export function fetchAllExpects() {
    return (dispatch) => {
        request.getJson(urls.apis.EXPECT_GETALLEXPECTLIST)
        .then((res) => {
            let allExpects = groupBy(res.obj, item => {
                return item.part
            });

            dispatch({
                type: types.EXPECT_RECEIVE_ALL_EXPECT,
                payload: {
                    allExpects,
                }
            })
        })
    }
}

/**
 * 所有用户的期望
 * @param userId
 */
export function fetchMyExpects() {
    return (dispatch) => {
        request.getJson(urls.apis.EXPECT_GETMYEXPECTLIST)
        .then((res) => {
            let myExpects = res.obj;
            let  myExpectMap = {};
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
export function removeMyExpect(expect) {
    return (dispatch) => {
        request.getJson(urls.apis.EXPECT_DELETEMYEXPECT, {
            projectId: expect.id,
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
export function addMyExpect(expect) {
    return (dispatch) => {
        request.getJson(urls.apis.EXPECT_ADDMYEXPECT, {
            projectId: expect.id,
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
