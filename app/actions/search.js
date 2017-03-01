import * as types from "../actions/types";
import {request, urls} from "../utils/";

// 搜索全部类别
export function searchAll(keyword) {
	return (dispatch) => {
		dispatch({
			type: types.SEARCH_ALL_FETCH_LIST,
		});

		// 请求数据
		request.getJson(urls.test, (result) => {
			result = {
				symptomProblem: {
					list: [
						"默认", "情况下", "项目", "都排在一条线", "又称轴线", "flex-wrap", "属性定义", "如果", "一条轴线",
						"排不下", "如何换行"
					]

				},
				information: {
					list: [
						{
							text: '李维嘉发伤心感慨 节目现场崩溃大哭 何炅谢娜话里露玄机',
							note: 'Its time to build a difference . .',
						},
						{
							text: '杭州5名公交司机照片挂车厢征婚 一人已脱单',
							note: 'One needs courage to be happy and smiling all time . . ',
						},
						{
							text: '儿童误将药丸当糖豆带到幼儿园分享 致4人中毒',
							note: 'Live a life style that matchs your vision',
						}
					]
				}
			};

			dispatch({
				type: types.SEARCH_ALL_RECEIVE_LIST,
				payload: {
					...result
				}
			});
		});
	}
}
// 清空全部结果
export function clearAll() {
	return (dispatch) => {
		dispatch({
			type: types.SEARCH_ALL_CLEAR_LIST
		});
	}
}
// 搜索'症状和问题'
export function searchSymptomProblem(keyword) {
	return (dispatch) => {
		dispatch({
			type: types.SEARCH_SYMPTOM_PROBLEM_FETCH_LIST,
		});

		// 请求数据
		request.getJson(urls.test, (result) => {
			result = {
				list: [
					"默认", "情况下", "项目", "都排在一条线", "又称轴线", "flex-wrap", "属性定义", "如果", "一条轴线",
					"排不下", "如何换行"
				]
			}
			dispatch({
				type: types.SEARCH_SYMPTOM_PROBLEM_RECEIVE_LIST,
				payload: {
					list: result.list
				}
			});
		});
	}
}
// 清空'症状和问题'结果
export function clearSymptomProblem() {
	return (dispatch) => {
		dispatch({
			type: types.SEARCH_SYMPTOM_PROBLEM_CLEAR_LIST
		});
	}
}
// 搜索'资讯'
export function searchInformation(keyword) {
	return (dispatch) => {
		dispatch({
			type: types.SEARCH_INFORMATION_FETCH_LIST,
		});

		// 请求数据
		request.getJson(urls.test, (result) => {
			result = {
				list: [
					{
						text: '李维嘉发伤心感慨 节目现场崩溃大哭 何炅谢娜话里露玄机',
						note: 'Its time to build a difference . .',
					},
					{
						text: '杭州5名公交司机照片挂车厢征婚 一人已脱单',
						note: 'One needs courage to be happy and smiling all time . . ',
					},
					{
						text: '儿童误将药丸当糖豆带到幼儿园分享 致4人中毒',
						note: 'Live a life style that matchs your vision',
					},
					{
						text: '河南夫妻吵架醉酒丈夫挥刀断指 已被成功接活',
						note: 'Failure is temporary, giving up makes it permanent',
					},
					{
						text: '女子虐打男童被拘：孩子系花钱买来 是否涉拐卖儿童待查',
						note: 'The biggest risk is a missed opportunity !!',
					},
					{
						text: '男子硕士学历月薪上万 占共享单车喷漆还加儿童座',
						note: ''
					}
				]
			}
			dispatch({
				type: types.SEARCH_INFORMATION_RECEIVE_LIST,
				payload: {
					list: result.list
				}
			});
		});
	}
}
// 清空'资讯'结果
export function clearInformation() {
	return (dispatch) => {
		dispatch({
			type: types.SEARCH_INFORMATION_CLEAR_LIST
		});
	}
}