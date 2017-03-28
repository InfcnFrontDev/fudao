import * as types from "../actions/types";
import {ToastAndroid} from "react-native";
import {request, urls} from "../utils/";

//跳转菜单页


//清空我的问题和期望
export function clearMyQuestion() {
	return (dispatch) => {
		dispatch({
			type: types.MY_QUESTION_CLEAR,
		})
	}
}


export function fetchAllQuestions(renqun) {
	return (dispatch) => {
		request.getJson(urls.apis.MY_QUESTION_ALL_QUESTION, {
			renqun
		}).then((res) => {
			let allQuestions = res.obj.datas,
				allQuestionMap = {},
				allQuestionsGroupBy = {};

			// 数据转换
			allQuestions.forEach((item) => {
				allQuestionsGroupBy[item.name] = item.diseases;
				item.diseases.forEach((disease) => allQuestionMap[disease.id] = disease);
			});
			dispatch({
				type: types.QUESTION_RECEIVE_ALL_LIST,
				payload: {
					allQuestions,
					allQuestionMap,
					allQuestionsGroupBy
				}
			})
		})
	}
}

export function fetchMyQuestions(userId) {
	return (dispatch) => {
		request.getJson(urls.apis.MY_QUESTION_USER_QUESTION, {
			userId: userId
		}).then((res) => {

			let myQuestions = res.obj,
				myQuestionsGroupBy = {};
			// 数据转换
			myQuestions.forEach((item) => myQuestionsGroupBy[item.id] = item);

			dispatch({
				type: types.QUESTION_RECEIVE_MY_LIST,
				payload: {
					myQuestions,
					myQuestionsGroupBy
				}
			})
		})
	}
}

export function removeMyQuestion(userId, question) {
	return (dispatch) => {
		request.getJson(urls.apis.MY_QUESTION_DEL_USER_QUESTION, {
			userId: userId,
			diseaseId: question.id,
		}).then((res) => {
			dispatch({
				type: types.QUESTION_REMOVE_MY_QUESTION,
				payload: {
					question
				}
			})
		})
	}
}


export function addToMyQuestions(userId, question) {
	return (dispatch) => {
		request.getJson(urls.apis.MY_QUESTION_ADD_USER_QUESTION, {
			userId: userId,
			diseaseId: question.id,
		}).then((res) => {
			dispatch({
				type: types.QUESTION_ADD_TO_MY_LIST,
				payload: {
					question
				}
			})
		})
	}
}


export function myQuestionToRows(allQuestion, callback) {
	return (dispatch) => {
		let colNum = 2,
			rows = [],
			row = {rowNum: 0, cells: []};

		for (var value of allQuestion) {
			row.cells.push(value);
			if (row.cells.length == 2) {
				rows.push(row);
				row = {rowNum: row.rowNum + 1, cells: []};
			}
		}
		if (row.cells.length > 0) {
			let celsLen = row.cells.length;
			for (let i = 0; i < colNum - celsLen; i++) {
				row.cells.push('');
			}
			rows.push(row);
		}
		callback(rows, {
			allLoaded: true
		})
	}
}


export function addMyQuestion(obj, my_question, id, allQuestions, callback, userId, from) {
	return (dispatch) => {
		my_question = [obj].concat(my_question);
		if (from == 'myquestion') {
			var my_source = {
				my_question: my_question,
			}
		} else {
			var my_source = {
				my_expect: my_question,
			}
		}
		dispatch({
			type: types.MY_QUESTION,
			source: my_source
		})
		for (var j = 0; j < allQuestions[id].diseases.length; j++) {
			if (allQuestions[id].diseases[j].showVal == obj.showVal) {
				allQuestions[id].diseases[j].flag = true;
			}
		}
		myQuestionToRows(allQuestions[id], callback);
		if (from == 'myquestion') {
			var allSource = {
				allQuestions: allQuestions,
				changeRowID: id
			}
			var url = urls.apis.MY_QUESTION_ADD_USER_QUESTION;
		} else {
			var allSource = {
				allExpects: allQuestions,
				changeRowID: id
			}
			//expect 待修改
			var url = urls.apis.MY_QUESTION_ADD_USER_QUESTION;
		}
		dispatch({
			type: types.MY_QUESTION,
			source: allSource
		})
		request.getJson(url, {
			userId: userId,
			diseaseId: obj.id,
		})
	}
}

export function delMyQuestion(obj, my_question, allQuestions, userId, from) {
	return (dispatch) => {
		for (var i = 0; i < my_question.length; i++) {
			if (obj.showVal == my_question[i].showVal) {
				my_question.splice(i, 1);
				break;
			}
		}
		if (from == 'myquestion') {
			var my_source = {
				my_question: my_question,
			}
		} else {
			var my_source = {
				my_expect: my_question,
			}
		}
		dispatch({
			type: types.MY_QUESTION_CHANGE,
			source: my_source
		})
		for (var i = 0; i < allQuestions.length; i++) {
			for (var j = 0; j < allQuestions[i].diseases.length; j++) {
				if (allQuestions[i].diseases[j].showVal == obj.showVal) {
					allQuestions[i].diseases[j].flag = false;
					j = -1;
					break;
				}
			}
			if (j == -1) {
				break;
			}
		}
		if (from == 'myquestion') {
			var allSource = {
				allQuestions: allQuestions,
				changeRowID: i,
			}
			var url = urls.apis.MY_QUESTION_DEL_USER_QUESTION;
		} else {
			var allSource = {
				allExpects: allQuestions,
				changeRowID: i,
			}
			var url = urls.apis.MY_QUESTION_ADD_USER_QUESTION;
		}
		dispatch({
			type: types.MY_QUESTION_DEL_QUESTION_CHANGE_ALL_QUESTIONS,
			source: allSource
		})
		request.getJson(url, {
			userId: userId,
			diseaseId: obj.id,
		})
	}
}

export function initialMyExpect(userId, my_expect) {
	return (dispatch) => {
		if (my_expect.length == 0) {
			request.getJson(urls.apis.MY_QUESTION_USER_QUESTION, {
				userId: userId
			}).then((res) => {
				dispatch({
					type: types.MY_QUESTION,
					source: {
						my_expect: res.obj,
					}
				})
			})
		}
	}
}