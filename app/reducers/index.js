'use strict';
import {combineReducers} from 'redux';
import user from './user';
import messageList from './messageList';

export default combineReducers({
	user,
	messageList
});