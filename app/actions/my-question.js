import * as types from "../actions/types";
import {request,urls,toast} from "../utils/";
import {Actions} from "react-native-router-flux";

//跳转详情页
export function skipToDetail(question,from){
  return (dispatch) => {
      if(from=='list'){
        Actions.myQuestionDetail({question:question})
      }else{
        request.getJson(urls.apis.DISEASE_GETDISEASEDAILYMETHODLIST,{
          diseaseId:question.id,
          renqun:'aged',
          local:'北京'
        }).then((res)=>{
          dispatch({
            type: types.MY_QUESTION,
            source:{
              questionDetail:res.obj,
            }
          })
        })
      }
      dispatch({
        type: types.MY_QUESTION,
        source:{
          currentDetail:question
        }
      })
    }
}

//清空我的问题和期望
export function clearMyQuestion() {
  return (dispatch) => {
        dispatch({
          type: types.MY_QUESTION_CLEAR,
        })
    }
}

export function getQuestionTreetment(diseaseId,renqun){
  return (dispatch) => {
    request.getJson(urls.apis.DISEASE_GETDISEASEDAILYMETHODLIST,{
      diseaseId:diseaseId,
      renqun:'aged',
      local:'北京'
    }).then((res)=>{
      dispatch({
        type: types.MY_QUESTION,
        source:{
          questionDetail:res.obj,
        }
      })
    })

  }
}

export function getAllDatas(callback,my_params,all_params,renqun,from) {
  return (dispatch) => {
    // if(all_params!=[]){
    //   callback(all_params, {
    //     allLoaded: true
    //   })
    // }else{
      if(from=='myquestion'){
        var url = urls.apis.DISEASE_GETALLDISEASELIST;
      }else{
        //expect 待修改
        var url = urls.apis.DISEASE_GETALLDISEASELIST;
      }
      request.getJson(url,{
        renqun:'aged'
      }).then((res)=>{
        var allDatas = res.obj.datas;
        for(var i=0;i<allDatas.length;i++){
          for(var j=0;j<allDatas[i].diseases.length;j++){
            var flag=true;
            for(var k=0;k<my_params.length;k++){
              if(my_params[k].showVal==allDatas[i].diseases[j].showVal){
                allDatas[i].diseases[j].flag=true;
                flag=false;
                break;
              }
            }
            if(flag){
              allDatas[i].diseases[j].flag=false;
            }
          }
        }
        if(from=='myquestion'){
          dispatch({
            type: types.MY_QUESTION,
            source:{
              allQuestions:allDatas,
            }
          })
        }else{
          dispatch({
            type: types.MY_QUESTION,
            source:{
              allExpects:allDatas,
            }
          })
        }
        // setTimeout(function(){
        callback(allDatas, {
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
      request.getJson(urls.apis.DISEASE_GETMYDISEASELIST,{
        userId:userId
      }).then((res)=>{
        dispatch({
          type: types.MY_QUESTION_CHANGE,
          source:{
            my_question:res.obj,
          }
        })
      })
    }
  }
}




export function addMyQuestion(obj,my_question,id,allQuestions,callback,userId,from) {
  return (dispatch) => {
    my_question = [obj].concat(my_question);
    if(from=='myquestion'){
      var my_source={
        my_question:my_question,
      }
    }else{
      var my_source={
        my_expect:my_question,
      }
    }
    dispatch({
      type: types.MY_QUESTION,
      source:my_source
    })
    for(var j=0;j<allQuestions[id].diseases.length;j++){
      if(allQuestions[id].diseases[j].showVal==obj.showVal){
          allQuestions[id].diseases[j].flag=true;
      }
    }
    myQuestionToRows(allQuestions[id],callback);
    if(from=='myquestion'){
      var allSource={
        allQuestions:allQuestions,
        changeRowID:id
      }
      var url=urls.apis.DISEASE_ADDMYDISEASE;
    }else{
      var allSource={
        allExpects:allQuestions,
        changeRowID:id
      }
      //expect 待修改
      var url=urls.apis.DISEASE_ADDMYDISEASE;
    }
    dispatch({
      type: types.MY_QUESTION,
      source:allSource
    })
    request.getJson(url,{
      userId:userId,
      diseaseId:obj.id,
    })
  }
}

export function delMyQuestion(obj,my_question,allQuestions,userId,from) {
  return (dispatch) => {
    for(var i=0;i<my_question.length;i++){
      if(obj.showVal==my_question[i].showVal){
        my_question.splice(i,1);
        break;
      }
    }
    if(from=='myquestion'){
      var my_source={
        my_question:my_question,
      }
    }else{
      var my_source={
        my_expect:my_question,
      }
    }
    dispatch({
      type: types.MY_QUESTION_CHANGE,
      source:my_source
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
    if(from=='myquestion'){
      var allSource={
        allQuestions:allQuestions,
        changeRowID:i,
      }
      var url=urls.apis.DISEASE_DELETEMYDISEASE;
    }else{
      var allSource={
        allExpects:allQuestions,
        changeRowID:i,
      }
      var url=urls.apis.DISEASE_ADDMYDISEASE;
    }
    dispatch({
      type: types.MY_QUESTION_DEL_QUESTION_CHANGE_ALL_QUESTIONS,
      source:allSource
    })
    request.getJson(url,{
      userId:userId,
      diseaseId:obj.id,
    })
  }
}

export function initialMyExpect(userId,my_expect) {
  return (dispatch) => {
    if(my_expect.length==0){
      request.getJson(urls.apis.DISEASE_GETMYDISEASELIST,{
        userId:userId
      }).then((res)=>{
        dispatch({
          type: types.MY_QUESTION,
          source:{
            my_expect:res.obj,
          }
        })
      })
    }
  }
}
