import * as types from "../actions/types";
import { ToastAndroid,} from "react-native";
import {request,urls} from "../utils/";


export function getAllQuestions(callback,my_question,all_questions,renqun) {
  return (dispatch) => {
    // if(all_questions!=[]){
    //   callback(all_questions, {
    //     allLoaded: true
    //   })
    // }else{
      request.getJson(urls.apis.MY_QUESTION_ALL_QUESTION,{
        renqun:renqun
      }).then((res)=>{
        var allQuestions = res.obj.datas;
        for(var i=0;i<allQuestions.length;i++){
          for(var j=0;j<allQuestions[i].diseases.length;j++){
            var flag=true;
            for(var k=0;k<my_question.length;k++){
              if(my_question[k].showVal==allQuestions[i].diseases[j].showVal){
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
    // }
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

export function initialMyQuestion(userId,my_question) {
  return (dispatch) => {
    if(my_question.length==0){
      request.getJson(urls.apis.MY_QUESTION_USER_QUESTION,{
        userId:userId
      }).then((res)=>{
        dispatch({
          type: types.MY_QUESTION_CHANGE_QUESTION,
          source:{
            my_question:res.obj,
          }
        })
      })
    }
  }
}

export function addMyQuestion(obj,my_question,id,allQuestions,callback,userId) {
  return (dispatch) => {
    my_question = [obj].concat(my_question);
    dispatch({
      type: types.MY_QUESTION,
      source:{
        my_question:my_question,
      }
    })
    for(var j=0;j<allQuestions[id].diseases.length;j++){
      if(allQuestions[id].diseases[j].showVal==obj.showVal){
          allQuestions[id].diseases[j].flag=true;
      }
    }
    myQuestionToRows(allQuestions[id],callback);
    dispatch({
      type: types.MY_QUESTION,
      source:{
        allQuestions:allQuestions,
        changeRowID:id
      }
    })
    request.getJson(urls.apis.MY_QUESTION_ADD_USER_QUESTION,{
      userId:userId,
      diseaseId:obj.id,
    })
  }
}

export function delMyQuestion(obj,my_question,allQuestions,userId) {
  return (dispatch) => {
    for(var i=0;i<my_question.length;i++){
      if(obj.showVal==my_question[i].showVal){
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
        if(allQuestions[i].diseases[j].showVal==obj.showVal){
          allQuestions[i].diseases[j].flag=false;
          j=-1;
          break;
        }
      }
      if(j==-1){
        break;
      }
    }
    dispatch({
      type: types.MY_QUESTION_DEL_QUESTION_CHANGE_ALL_QUESTIONS,
      source:{
        allQuestions:allQuestions,
        changeRowID:i,
      }
    })
    request.getJson(urls.apis.MY_QUESTION_DEL_USER_QUESTION,{
      userId:userId,
      diseaseId:obj.id,
    })
  }
}
