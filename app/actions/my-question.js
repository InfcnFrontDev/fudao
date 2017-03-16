import * as types from "../actions/types";
import { ToastAndroid,} from "react-native";
import {request,urls} from "../utils/";


export function getAllQuestions(callback,my_question,all_questions) {
  return (dispatch) => {
    if(all_questions!=[]){
      callback(all_questions, {
        allLoaded: true
      })
    }else{
      request.getJson(urls.apis.MY_QUESTION_ALL_QUESTION,{
        renqun:'aged'
      }).then((res)=>{
        var allQuestions = res.obj.datas;
        for(var i=0;i<allQuestions.length;i++){
          for(var j=0;j<allQuestions[i].diseases.length;j++){
            var flag=true;
            for(var k=0;k<my_question.length;k++){
              if(my_question[k].title==allQuestions[i].diseases[j].showVal){
                allQuestions[i].diseases[j].flag=true;
                flag=false;
                break;
              }
            }
            if(flag){
              allQuestions[i].diseases[j].flag=false;
            }
          }
        }
        dispatch({
          type: types.MY_QUESTION_ALL_QUESTION,
          source:{
            allQuestions:allQuestions,
          }
        })
        // setTimeout(function(){
        callback(allQuestions, {
          allLoaded: true
        })
        // },600);
      })
    }
  }
}



export function myQuestionToRows(allQuestion,callback) {
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

export function addMyQuestion(title,my_question,id,allQuestions,callback) {
  return (dispatch) => {
    my_question = [{title}].concat(my_question);
    dispatch({
      type: types.MY_QUESTION_CHANGE_QUESTION,
      source:{
        my_question:my_question,
      }
    })
    for(var j=0;j<allQuestions[id].diseases.length;j++){
      if(allQuestions[id].diseases[j].showVal==title){
          allQuestions[id].diseases[j].flag=true;
      }
    }
    myQuestionToRows(allQuestions[id],callback);
    dispatch({
      type: types.MY_QUESTION_ALL_QUESTION,
      source:{
        allQuestions:allQuestions,
      }
    })
  }
}

export function delMyQuestion(obj,my_question,allQuestions) {
  return (dispatch) => {
    for(var i=0;i<my_question.length;i++){
      if(obj.title==my_question[i].title){
        my_question.splice(i,1);
        break;
      }
    }
    dispatch({
      type: types.MY_QUESTION_CHANGE_QUESTION,
      source:{
        my_question:my_question,
      }
    })
    for(var i=0;i<allQuestions.length;i++){
      for(var j=0;j<allQuestions[i].diseases.length;j++){
        if(allQuestions[i].diseases[j].showVal==obj.title){
          allQuestions[i].diseases[j].flag=false;
        }
      }
    }
    dispatch({
      type: types.MY_QUESTION_DEL_QUESTION_CHANGE_ALL_QUESTIONS,
      source:{
        allQuestions:allQuestions,
      }
    })
  }
}
