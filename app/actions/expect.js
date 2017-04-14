import * as types from "../actions/types";
import {request, urls} from "../utils/";
import groupBy from 'lodash/groupBy'

var questionList = {
    "ok": true,
    "obj": [
        {
            id: "dc36f1c5-1488-11e7-9b59-000c293e6828",
            img: "/icons/zixiu/jianfeisuxing.png",
            name: "减肥塑形",
            type: "整体"
        },
        {
            id: "dc36f210-1488-11e7-9b59-000c293e6828",
            img: "/icons/zixiu/yanqiuhuian.png",
            name: "眼球晦暗",
            type: "五官"
        },
        {
            id: "dc36f207-1488-11e7-9b59-000c293e6828",
            img: "/icons/zixiu/yanjingfuzhong.png",
            name: "眼睛浮肿",
            type: "五官"
        },
        {
            id: "dc36f286-1488-11e7-9b59-000c293e6828",
            img: "/icons/zixiu/pifuanhuang.png",
            name: "皮肤暗黄",
            type: "皮肤"
        },
        {
            id: "dc36f277-1488-11e7-9b59-000c293e6828",
            img: "/icons/zixiu/zhouwen.png",
            name: "皱纹",
            type: "皮肤"
        },
        {
            id: "dc36f27e-1488-11e7-9b59-000c293e6828",
            img: "/icons/zixiu/pifuganlie.png",
            name: "皮肤干裂",
            type: "皮肤"
        },
        {
            id: "dc36f2bb-1488-11e7-9b59-000c293e6828",
            img: "/icons/zixiu/gudugan.png",
            name: "孤独感",
            type:"精神"
        },
        {
            id: "dc36f2d6-1488-11e7-9b59-000c293e6828",
            img: "/icons/zixiu/shuailaogan.png",
            name: "衰老感",
            type:"精神"
        },
        {
            id: "dc36f2c9-1488-11e7-9b59-000c293e6828",
            img: "/icons/zixiu/jiaolvgan.png",
            name: "焦虑感",
            type:"精神"
        }
    ]
}

var myQuestion = {
    "ok": true,
    "obj": [
        {
            id: "dc36f2c9-1488-11e7-9b59-000c293e6828",
            img: "/icons/zixiu/jiaolvgan.png",
            name: "焦虑感",
            type:"精神",
        },
        {
            id: "dc36f277-1488-11e7-9b59-000c293e6828",
            img: "/icons/zixiu/zhouwen.png",
            name: "皱纹",
            type: "皮肤"
        },
    ],
}

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
            res = questionList;//qqqqqq

            let allExpects = groupBy(res.obj, item => {
                return item.type
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
            res = myQuestion;

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
export function removeMyExpect(userId, expect) {
    return (dispatch) => {
        request.getJson(urls.apis.EXPECT_DELETEMYEXPECT, {
            userId: userId,
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
export function addMyExpect(userId, expect) {
    return (dispatch) => {
        request.getJson(urls.apis.EXPECT_ADDMYEXPECT, {
            userId: userId,
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
