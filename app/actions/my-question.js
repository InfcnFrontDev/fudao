import * as types from "../actions/types";
import { ToastAndroid,} from "react-native";
import {request,urls} from "../utils/";


export function getAllQuestions(callback) {
  return (dispatch) => {
    // request.getJson(urls.apis.DYNAMIC_DELETE_PRAISE,{
    //   // dynamicID:info.id,
    //   // userId:params.user.appid,
    // }).then((res)=>{
    //
    // })
    // dispatch({
    //   type: types.MY_QUESTION_ROW,
    //   source:{
    //     row:rows,
    //   }
    // })
    callback([1,2,3], {
      allLoaded: true
    })
  }
}



export function myQuestionToRows(allQuestion,callback) {
  return (dispatch) => {
    let colNum = 2,
    rows = [],
    row = {rowNum: 0, cells: []};
    allQuestion=['aaa','bbb','ccc','ddd','eee','fff','ggg','hhhh','rrr']
    //.then函数内部
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

export function addMyQuestion(title,my_question) {
  return (dispatch) => {
    for(var i=0;i<my_question.length;i++){
      if(title==my_question[i]){
        ToastAndroid.show('删掉了',ToastAndroid.SHORT);
        my_question.splice(i,1);
        i=-1;
        break;
      }
    }

    if(i!=-1){
    my_question = [title].concat(my_question);
    }
    dispatch({
      type: types.MY_QUESTION_CHANGE_QUESTION,
      source:{
        my_question:my_question,
      }
    })
  }
}
