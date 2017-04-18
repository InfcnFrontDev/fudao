import {combineReducers} from "redux";
import realm from "./realm";
import search from "./search";
import dynamic from "./dynamic";
import loading from "./loading";
import user from "./user";
import friend from "./friend";
import settings from "./settings";
import question from "./question";
import expect from "./expect";
import emotion from "./emotion";
import message from "./message";

export default combineReducers({
	position,
	realm,
	search,
	dynamic,
	loading,
	user,
	friend,
	settings,
	question,
	expect,
	emotion,
    message,
});
