/**
 * Created by yangkk on 17/2/28.
 * action类型
 */

// 侧边栏 actions
export const OPEN_DRAWER = 'OPEN_DRAWER';
export const CLOSE_DRAWER = 'CLOSE_DRAWER';


// loading ////////////////////////////////////////
export const LOADING_SHOW = 'LOADING_SHOW';
export const LOADING_HIDE = 'LOADING_HIDE';
export const USER_UPDATE_INFO = "USER_UPDATE_INFO";
export const USER_UPDATE_CHECK = "USER_UPDATE_CHECK";
// position ////////////////////////////////////////
export const UPDATE_POSITION = 'UPDATE_POSITION';
export const CLEAR_POSITION= 'CLEAR_POSITION';
// user actions ////////////////////////////////////////
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

// 搜索 actions ////////////////////////////////////////

// 搜索全部
export const SEARCH_ALL_FETCH_LIST = 'SEARCH_ALL_FETCH_LIST';
export const SEARCH_ALL_RECEIVE_LIST = 'SEARCH_ALL_RECEIVE_LIST';
export const SEARCH_ALL_CLEAR_LIST = 'SEARCH_ALL_CLEAR_LIST';

// 搜索症状和问题
export const SEARCH_SYMPTOM_PROBLEM_FETCH_LIST = 'SEARCH_SYMPTOM_PROBLEM_FETCH_LIST';
export const SEARCH_SYMPTOM_PROBLEM_RECEIVE_LIST = 'SEARCH_SYMPTOM_PROBLEM_RECEIVE_LIST';
export const SEARCH_SYMPTOM_PROBLEM_CLEAR_LIST = 'SEARCH_SYMPTOM_PROBLEM_CLEAR_LIST';

// 搜索资讯
export const SEARCH_INFORMATION_FETCH_LIST = 'SEARCH_INFORMATION_FETCH_LIST';
export const SEARCH_INFORMATION_RECEIVE_LIST = 'SEARCH_INFORMATION_RECEIVE_LIST';
export const SEARCH_INFORMATION_CLEAR_LIST = 'SEARCH_INFORMATION_CLEAR_LIST';


// export const MY_COLLECTION_FETCH_LIST_FIRSTLOAD = 'MY_COLLECTION_FETCH_LIST_FIRSTLOAD';
// export const MY_COLLECTION_FETCH_LIST_REFRESH = 'MY_COLLECTION_FETCH_LIST_REFRESH';
// export const MY_COLLECTION_FETCH_LIST_PAGINATION = 'MY_COLLECTION_FETCH_LIST_PAGINATION';
// export const MY_COLLECTION_RECEIVE_LIST = 'MY_COLLECTION_RECEIVE_LIST';


// 好友
export const FETCH_MY_FRIEND_LIST = 'FETCH_MY_FRIEND_LIST';
export const RECEIVE_MY_FRIEND_LIST = 'RECEIVE_MY_FRIEND_LIST';
export const FETCH_NEW_FRIEND_LIST = 'FETCH_NEW_FRIEND_LIST';
export const RECEIVE_NEW_FRIEND_LIST = 'RECEIVE_NEW_FRIEND_LIST';
export const FRIEND_CLEAR = 'FRIEND_CLEAR';

// dynamic actions ////////////////////////////////////////
export const NEW_DYNAMIC_ADD_PICTURE_ARR = 'NEW_DYNAMIC_ADD_PICTURE_ARR';
export const NEW_DYNAMIC_ADD_RENDER_PICTURE_ARR = 'NEW_DYNAMIC_ADD_RENDER_PICTURE_ARR';
export const DYNAMIC_LIST_LOAD = 'DYNAMIC_LIST_FIRSTLOAD';
export const DYNAMIC_LIST_SHOW = 'DYNAMIC_LIST_SHOW';
export const DYNAMIC_LIST_ZAN_COMMENT = 'DYNAMIC_LIST_ZAN_COMMENT';
export const DYNAMIC_CLEAR= 'DYNAMIC_CLEAR';

// settings actions ////////////////////////////////////////
export const SETTINGS_UPDATE = 'SETTINGS_UPDATE';


// my collection actions ////////////////////////////////////////
export const MY_COLLECTION_FETCH_LIST = 'MY_COLLECTION_FETCH_LIST';
export const MY_COLLECTION_RECEIVE_LIST = 'MY_COLLECTION_RECEIVE_LIST';


// my question  actions ////////////////////////////////////////
export const MY_QUESTION = 'MY_QUESTION';
export const MY_QUESTION_CLEAR = 'MY_QUESTION_CLEAR';
export const MY_QUESTION_ALL_QUESTION = 'MY_QUESTION_ALL_QUESTION';
export const MY_QUESTION_CHANGE = 'MY_QUESTION_CHANGE'
export const MY_QUESTION_DEL_QUESTION_CHANGE_ALL_QUESTIONS = 'MY_QUESTION_DEL_QUESTION_CHANGE_ALL_QUESTIONS'
export const MY_EXPECT_CHANGE = 'MY_EXPECT_CHANGE'

// my emotion actions ////////////////////////////////////////
export const MY_EMOTION_UPDATE = 'MY_EMOTION_UPDATE';
export const MY_EMOTION_CLEAR = 'MY_EMOTION_CLEAR';